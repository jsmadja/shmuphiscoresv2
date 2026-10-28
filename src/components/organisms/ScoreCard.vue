<template>
  <article class="score-row">
    <span
      class="score-row__rank k-rank"
      :class="{ 'k-rank--first': score.rank === 1 }"
      >{{ score.rank | formatRank }}</span
    >

    <router-link
      :to="`/game/${score.game.id}`"
      class="score-row__cover"
      :aria-label="score.game.title"
    >
      <img :src="coverUrl(score.game.cover)" alt="" loading="lazy" />
    </router-link>

    <div class="score-row__main">
      <router-link :to="`/game/${score.game.id}`" class="score-row__game">{{
        score.game.title
      }}</router-link>
      <span class="score-row__meta">
        <a
          href="#"
          class="score-row__platform"
          @click.prevent="$emit('goToPlatform', score.platform.name)"
          >{{ score.platform.name }}</a
        ><template v-for="detail in details"> · {{ detail }}</template>
      </span>
    </div>

    <div v-if="showPlayer" class="score-row__player">
      <a href="#" @click.prevent="$emit('goToPlayer', score.player)">{{
        score.player.name
      }}</a>
      <span class="score-row__when">{{ since(score.createdAt) }}</span>
    </div>
    <span v-else class="score-row__when score-row__when--alone">{{
      since(score.createdAt)
    }}</span>

    <div class="score-row__tags">
      <span v-if="score.onecc" class="k-tag k-tag--1cc">1CC</span>
      <a
        v-if="score.photo"
        :href="score.photo"
        target="_blank"
        rel="noopener"
        class="k-tag"
        >PHOTO</a
      >
      <a
        v-if="score.replay"
        :href="score.replay"
        target="_blank"
        rel="noopener"
        class="k-tag"
        >REPLAY</a
      >
      <a
        v-if="score.inp"
        :href="score.inp"
        target="_blank"
        rel="noopener"
        class="k-tag"
        >INP</a
      >
    </div>

    <a
      href="#"
      class="score-row__value k-score"
      @click.prevent="$emit('goToScore', score)"
      ><template v-if="score.mode && score.mode.scoreType === 'timer'">{{
        score.value | formatTime
      }}</template
      ><template v-else>{{ score.value | formatNumber }}</template></a
    >

    <div
      v-if="showAddButton || showEditButton || showDeleteButton"
      class="score-row__actions"
    >
      <button
        v-if="showAddButton"
        type="button"
        class="k-icon-btn"
        :aria-label="`Post a new score on ${score.game.title}`"
        :title="`Post a new score on ${score.game.title}`"
        @click="$emit('addScore', score)"
      >
        <v-icon small>mdi-plus</v-icon>
      </button>
      <button
        v-if="showEditButton"
        type="button"
        class="k-icon-btn"
        aria-label="Edit this score"
        title="Edit this score"
        @click="$emit('editScore', score)"
      >
        <v-icon small>mdi-pencil</v-icon>
      </button>
      <button
        v-if="showDeleteButton"
        type="button"
        class="k-icon-btn k-icon-btn--danger"
        aria-label="Delete this score"
        title="Delete this score"
        @click="confirmDelete = true"
      >
        <v-icon small>mdi-delete</v-icon>
      </button>
    </div>

    <v-dialog v-model="confirmDelete" max-width="400">
      <v-card>
        <v-card-title>Delete this score?</v-card-title>
        <v-card-text>This action cannot be undone.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="confirmDelete = false">Cancel</v-btn>
          <v-btn
            color="error"
            dark
            @click="
              confirmDelete = false;
              $emit('deleteScore', score);
            "
            >Delete</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import { coverUrl } from "@/coverUrl";

export default Vue.extend({
  name: "ScoreCard",
  props: {
    score: Object,
    showAddButton: {
      type: Boolean,
      default: true,
    },
    showEditButton: {
      type: Boolean,
      default: true,
    },
    showDeleteButton: {
      type: Boolean,
      default: false,
    },
    showPlayer: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      confirmDelete: false,
    };
  },
  computed: {
    details(): string[] {
      const { difficulty, mode, ship, stage } = this.score;
      return [
        difficulty && difficulty.name,
        mode && mode.name,
        ship && ship.name,
        stage && `Stage ${stage.name}`,
      ].filter(Boolean);
    },
  },
  methods: {
    since(date) {
      return moment(date).fromNow();
    },
    coverUrl,
  },
});
</script>

<style lang="scss" scoped>
@import "../../custom.scss";

.score-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 16px;
  padding: 12px 18px;
  border-bottom: 1px solid var(--k-border);

  &__rank {
    flex: none;
    width: 52px;
    text-align: center;
    font-size: 30px;
  }

  &__cover {
    flex: none;
    img {
      width: 96px;
      height: 64px;
      object-fit: cover;
      border-radius: 6px;
      display: block;
      background: var(--k-track);
    }
  }

  &__main {
    flex: 1 1 240px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  &__game {
    font-family: $font-display;
    font-weight: 700;
    font-size: 21px;
    color: var(--k-text) !important;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__meta {
    color: var(--k-muted);
    font-size: 13px;
  }

  &__platform {
    color: var(--k-muted) !important;
  }

  &__player {
    flex: 0 1 170px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-weight: 600;
  }

  &__when {
    color: var(--k-muted);
    font-size: 12px;
    font-weight: 400;

    &--alone {
      flex: 0 0 auto;
    }
  }

  &__tags {
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
  }

  &__value {
    flex: 0 0 auto;
    min-width: 180px;
    text-align: right;
    font-size: 38px;
    text-decoration: none;
  }

  &__actions {
    flex: none;
    display: flex;
    gap: 4px;
  }
}

.k-icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid var(--k-border2);
  background: transparent;
  color: var(--k-text);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .v-icon {
    color: inherit !important;
  }

  &--danger {
    border-color: var(--k-danger-border);
    color: var(--k-danger);
  }
}

@media (min-width: 960px) {
  .score-row {
    display: grid;
    grid-template-columns: 52px 96px minmax(0, 1fr) 160px 170px 190px auto;
  }

  .score-row__player,
  .score-row__when--alone {
    flex: none;
  }
}

@media (max-width: 700px) {
  .score-row__value {
    min-width: 0;
    text-align: left;
    font-size: 32px;
  }
}
</style>
