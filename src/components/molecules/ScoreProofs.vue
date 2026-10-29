<template>
  <section v-if="hasProofs" aria-label="Proofs" class="score-proofs">
    <figure
      v-if="score.replay"
      class="k-panel score-proofs__item"
      :class="{ 'score-proofs__item--wide': score.photo }"
    >
      <div class="score-proofs__head">
        <h2 class="score-proofs__title">Replay</h2>
        <a :href="score.replay" target="_blank" rel="noopener"
          >Open {{ youtubeId ? "on YouTube" : "replay" }} ↗</a
        >
      </div>
      <iframe
        v-if="youtubeId && playing"
        class="score-proofs__media"
        :src="`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`"
        title="Replay video"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button
        v-else-if="youtubeId"
        type="button"
        class="score-proofs__media score-proofs__poster"
        :style="{ backgroundImage: `url('${posterUrl}')` }"
        aria-label="Play the replay"
        @click="playing = true"
      >
        <span class="score-proofs__play" aria-hidden="true"
          ><v-icon large>mdi-play</v-icon></span
        >
      </button>
      <a
        v-else
        :href="score.replay"
        target="_blank"
        rel="noopener"
        class="score-proofs__media score-proofs__link"
        ><v-icon large>mdi-play-circle-outline</v-icon>Watch the replay</a
      >
    </figure>

    <figure v-if="score.photo" class="k-panel score-proofs__item">
      <div class="score-proofs__head">
        <h2 class="score-proofs__title">Photo proof</h2>
        <a v-if="score.inp" :href="score.inp" target="_blank" rel="noopener"
          >INP ↗</a
        >
      </div>
      <button
        type="button"
        class="score-proofs__media score-proofs__photo"
        aria-label="View the photo full size"
        @click="zoom = true"
      >
        <img :src="score.photo" alt="Photo of the score" />
      </button>
    </figure>

    <v-dialog v-model="zoom" max-width="1100">
      <div class="k-panel score-proofs__zoom">
        <img :src="score.photo" alt="Photo of the score, full size" />
        <div class="score-proofs__zoom-actions">
          <a
            :href="score.photo"
            target="_blank"
            rel="noopener"
            class="k-btn k-btn--ghost"
            >Open original ↗</a
          >
          <button type="button" class="k-btn k-btn--cta" @click="zoom = false">
            Close
          </button>
        </div>
      </div>
    </v-dialog>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

const YOUTUBE_ID =
  /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/;

export function youtubeIdOf(url?: string | null): string | null {
  const match = (url || "").match(YOUTUBE_ID);
  return match ? match[1] : null;
}

export default Vue.extend({
  name: "ScoreProofs",
  props: {
    score: { type: Object, required: true },
  },
  data: () => ({
    playing: false,
    zoom: false,
  }),
  computed: {
    hasProofs(): boolean {
      return !!(this.score.replay || this.score.photo);
    },
    youtubeId(): string | null {
      return youtubeIdOf(this.score.replay);
    },
    posterUrl(): string {
      return `https://i.ytimg.com/vi/${this.youtubeId}/hqdefault.jpg`;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/custom.scss";

.score-proofs {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;

  &__item {
    flex: 1 1 320px;
    min-width: 0;
    margin: 0;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &--wide {
      flex: 2 1 480px;
    }
  }

  &__head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
  }

  &__title {
    font-size: 26px;
    margin: 0;
  }

  &__media {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 1px solid var(--k-border);
    border-radius: 8px;
    background: var(--k-inset);
    overflow: hidden;
  }

  &__poster {
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
  }

  &__play {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: var(--k-cta);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 24px rgba(255, 120, 27, 0.45);

    .v-icon {
      color: var(--k-on-cta) !important;
    }
  }

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: 600;

    .v-icon {
      color: inherit !important;
    }
  }

  &__photo {
    aspect-ratio: 4 / 3;
    padding: 0;
    cursor: zoom-in;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }

  &__zoom {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    img {
      width: 100%;
      max-height: 80vh;
      object-fit: contain;
    }
  }

  &__zoom-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style>
