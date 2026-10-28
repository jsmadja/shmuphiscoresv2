<template>
  <div class="home">
    <section v-if="isAuthenticated" class="home-hero">
      <div class="k-container home-hero__inner home-hero__inner--member">
        <div class="home-hero__text">
          <p class="k-kicker">&gt; PLAYER 1 · READY</p>
          <h1 class="home-hero__title">
            Welcome back,<br /><span class="k-scan home-hero__accent">{{
              user.name
            }}</span>
          </h1>
          <p v-if="myLastScores.length > 0" class="home-hero__lead">
            Your last score was on
            <router-link :to="`/game/${myLastScores[0].game.id}`">{{
              myLastScores[0].game.title
            }}</router-link
            >, {{ since(myLastScores[0].createdAt) }}. Time for a new credit?
          </p>
        </div>
        <button
          v-if="myLastScores.length > 0"
          type="button"
          class="k-btn k-btn--cta home-hero__cta"
          @click="addScore(myLastScores[0])"
        >
          Post a new score
        </button>
        <router-link v-else to="/games" class="k-btn k-btn--cta home-hero__cta"
          >Post your first score</router-link
        >
      </div>
    </section>

    <section v-else class="home-hero">
      <div class="k-container home-hero__inner">
        <div class="home-hero__text">
          <p class="k-kicker">&gt; INSERT COIN · 1P START</p>
          <h1 class="home-hero__title home-hero__title--big">
            Every hiscore.<br /><span class="k-scan home-hero__accent"
              >Ranked.</span
            >
          </h1>
          <p class="home-hero__lead">
            Post your best runs with proof, climb the leaderboards and settle it
            with other players.
          </p>
        </div>
        <div class="home-screen">
          <div
            class="home-screen__image"
            :style="screenStyle"
            role="img"
            aria-label="Starfield with a spaceship"
          ></div>
          <div v-if="lastScores.length > 0" class="home-screen__caption">
            <span
              >LAST · {{ lastScores[0].game.title }} ·
              {{ lastScores[0].player.name }}</span
            >
            <span class="k-score home-screen__value">{{
              lastScores[0].value | formatNumber
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="k-container home-body">
      <section v-if="isAuthenticated && myLastScores.length > 0">
        <div class="k-section-title">
          <h2>My last scores</h2>
          <router-link :to="`/players/${user.id}`">All my scores →</router-link>
        </div>
        <div class="k-panel home-list">
          <score-card
            v-for="score in myLastScores"
            :key="`mine-${score.id}`"
            :score="score"
            :show-player="false"
            :show-edit-button="true"
            :show-delete-button="true"
            @goToGame="goToGame"
            @addScore="addScore"
            @editScore="editScore"
            @deleteScore="deleteScore"
            @goToPlatform="goToPlatform"
            @goToScore="goToScore"
          />
        </div>
      </section>

      <section>
        <div class="k-section-title">
          <h2>{{ isAuthenticated ? "Community latest" : "Latest scores" }}</h2>
        </div>
        <div class="k-panel home-list">
          <template v-if="lastScoresLoading">
            <v-skeleton-loader
              v-for="i in 3"
              :key="`skeleton-${i}`"
              type="list-item-avatar-two-line"
            ></v-skeleton-loader>
          </template>
          <score-card
            v-for="(score, i) in lastScores"
            :key="`last-${i}`"
            :score="score"
            :show-edit-button="isOwn(score)"
            :show-add-button="isOwn(score)"
            :show-delete-button="isOwn(score)"
            @goToGame="goToGame"
            @addScore="addScore"
            @editScore="editScore"
            @deleteScore="deleteScore"
            @goToPlayer="goToPlayer"
            @goToPlatform="goToPlatform"
            @goToScore="goToScore"
          />
        </div>
      </section>

      <section v-if="topPlatforms.length > 0">
        <div class="k-section-title">
          <h2>Select your hardware</h2>
          <router-link to="/platforms">All platforms →</router-link>
        </div>
        <div class="home-platforms">
          <a
            v-for="platform in topPlatforms"
            :key="platform.title"
            href="#"
            class="home-platforms__item"
            @click.prevent="goToPlatform(platform.title)"
            >{{ platform.title }}
            <span class="k-score">{{ platform.games }}</span></a
          >
        </div>
      </section>

      <section class="k-panel home-kofi" aria-label="Support the site">
        <div class="home-kofi__text">
          <p class="k-kicker">CREDIT 00 · INSERT COIN</p>
          <h2>
            {{
              isAuthenticated
                ? "Enjoying the leaderboards?"
                : "Keep the hiscores online"
            }}
          </h2>
          <p>
            hiscores.shmup.com is a free, ad-free community project. A coffee on
            Ko-fi helps pay for its hosting.
          </p>
        </div>
        <a
          href="https://ko-fi.com/Z8U6243MY5"
          target="_blank"
          rel="noopener"
          class="k-btn k-btn--kofi home-kofi__cta"
          >Press Start to Support</a
        >
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import ScoreCard from "../organisms/ScoreCard.vue";

export default Vue.extend({
  name: "HomeTemplate",
  components: { ScoreCard },
  props: {
    myLastScores: { type: Array, default: () => [] },
    lastScores: { type: Array, default: () => [] },
    lastScoresLoading: Boolean,
    myLastScoresLoading: Boolean,
    user: { type: Object, default: () => ({}) },
    platforms: { type: Array, default: () => [] },
  },
  computed: {
    screenStyle(): Record<string, string> {
      return {
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0 1px, transparent 1px 3px), url('/img/header.png')",
      };
    },
    isAuthenticated(): boolean {
      return !!(this.user && this.user.authenticated);
    },
    topPlatforms(): Array<{ title: string; games: number }> {
      return [...(this.platforms as Array<{ title: string; games: number }>)]
        .sort((a, b) => b.games - a.games)
        .slice(0, 10);
    },
  },
  methods: {
    isOwn(score): boolean {
      return !!(this.user && score.player.id === this.user.id);
    },
    since(date) {
      return moment(date).fromNow();
    },
    goToPlayer(player) {
      this.$emit("goToPlayer", player);
    },
    goToGame(game) {
      this.$emit("goToGame", game);
    },
    goToPlatform(platformName) {
      this.$emit("goToPlatform", platformName);
    },
    addScore(score) {
      this.$emit("addScore", score);
    },
    editScore(score) {
      this.$emit("editScore", score);
    },
    deleteScore(score) {
      this.$emit("deleteScore", score);
    },
    goToScore(score) {
      this.$emit("goToScore", score);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../custom.scss";

.home {
  margin: -12px;
}

.home-hero {
  border-bottom: 1px solid var(--k-border);

  &__inner {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
    padding-top: 56px;
    padding-bottom: 56px;

    &--member {
      align-items: flex-end;
      justify-content: space-between;
      padding-top: 44px;
      padding-bottom: 44px;
    }
  }

  &__text {
    flex: 1 1 480px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__title {
    font-size: 68px;
    line-height: 0.95;
    margin: 0;

    &--big {
      font-size: 80px;
    }
  }

  &__accent {
    color: var(--k-accent);
    text-shadow: var(--k-glow);
  }

  &__lead {
    margin: 0;
    max-width: 520px;
    font-size: 18px;
    line-height: 1.55;
    color: var(--k-text2);
  }

  &__cta {
    min-height: 52px;
    font-family: $font-display;
    font-size: 20px;
    text-transform: uppercase;
  }
}

.home-screen {
  flex: 1 1 400px;
  padding: 18px;
  border-radius: 22px;
  background: #0a0908;
  border: 1px solid var(--k-border);

  &__image {
    height: 250px;
    border-radius: 14px;
    background-size: auto, cover;
    background-position: 0 0, 12% center;
    box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.8);
  }

  &__caption {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
    padding: 14px 8px 4px;
    font-family: $font-score;
    font-size: 20px;
    color: #a79f92;
    text-transform: uppercase;
  }

  &__value {
    font-size: 30px;
    color: #ff8a33;
    text-shadow: 0 0 10px rgba(255, 120, 27, 0.45);
  }
}

.home-body {
  display: flex;
  flex-direction: column;
  gap: 52px;
  padding-top: 44px;
  padding-bottom: 64px;
}

.home-list {
  overflow: hidden;
}

.home-platforms {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  &__item {
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 0 16px;
    border-radius: 6px;
    background: var(--k-surface);
    border: 1px solid var(--k-border2);
    color: var(--k-text) !important;
    text-decoration: none;
    font-family: $font-display;
    font-weight: 700;
    font-size: 17px;
    text-transform: uppercase;

    .k-score {
      font-size: 22px;
    }
  }
}

.home-kofi {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  padding: 30px 34px;
  border-color: var(--k-kofi);

  &__text {
    flex: 1 1 480px;
    display: flex;
    flex-direction: column;
    gap: 6px;

    h2 {
      font-size: 34px;
      margin: 0;
    }
    p {
      margin: 0;
      color: var(--k-text2);
      line-height: 1.5;
      max-width: 560px;
    }
  }

  &__cta {
    min-height: 52px;
    font-family: $font-display;
    font-size: 20px;
    text-transform: uppercase;
  }
}

@media (max-width: 600px) {
  .home-hero__title,
  .home-hero__title--big {
    font-size: 48px;
  }
}
</style>
