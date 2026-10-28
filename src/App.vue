<template>
  <v-app id="inspire">
    <header class="k-header">
      <div class="k-container k-header__main">
        <router-link to="/" class="k-brand">
          <img
            src="https://shmup.com/wp-content/themes/shmup/images/shmup.png"
            alt="shmup"
            class="k-brand__logo"
          />
          <span class="k-brand__name">HISCORES</span>
        </router-link>

        <nav aria-label="Main" class="k-nav">
          <router-link
            v-for="item in mainNav"
            :key="item.to"
            :to="item.to"
            :exact="item.exact"
            class="k-nav__link"
            active-class="k-nav__link--active"
            >{{ item.label }}</router-link
          >
        </nav>

        <div class="k-header__actions">
          <button
            type="button"
            class="k-btn k-btn--ghost k-btn--icon"
            :aria-label="
              isDark ? 'Switch to light theme' : 'Switch to dark theme'
            "
            :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
            @click="toggleTheme"
          >
            <v-icon>{{
              isDark ? "mdi-white-balance-sunny" : "mdi-weather-night"
            }}</v-icon>
          </button>
          <a
            :href="kofiUrl"
            target="_blank"
            rel="noopener"
            class="k-btn k-btn--kofi"
          >
            <v-icon small color="white">mdi-coffee</v-icon>Support
          </a>
          <router-link to="/games" class="k-btn k-btn--cta"
            >Post a score</router-link
          >
          <router-link
            v-if="isAuthenticated"
            to="/my-profile"
            class="k-btn k-btn--ghost k-account"
            :aria-label="`My account: ${user.name}`"
          >
            <span class="k-account__avatar" aria-hidden="true">{{
              initial(user.name)
            }}</span>
            {{ user.name }}
          </router-link>
          <a v-else :href="signInUrl" class="k-btn k-btn--ghost">Sign in</a>
        </div>
      </div>

      <div v-if="isAuthenticated" class="k-subbar">
        <div class="k-container k-subbar__inner">
          <nav aria-label="My space" class="k-nav k-nav--sub">
            <router-link
              v-for="item in memberNav"
              :key="item.to"
              :to="item.to"
              :exact="item.exact"
              class="k-nav__link"
              active-class="k-nav__link--active"
              >{{ item.label }}</router-link
            >
          </nav>
          <div v-if="user.administrator" class="k-nav k-nav--sub">
            <span class="k-admin-tag">ADMIN</span>
            <router-link
              to="/add-game"
              class="k-nav__link"
              active-class="k-nav__link--active"
              >+ Add game</router-link
            >
            <router-link
              to="/add-player"
              class="k-nav__link"
              active-class="k-nav__link--active"
              >+ Add player</router-link
            >
          </div>
        </div>
      </div>
    </header>

    <v-main>
      <v-container fluid class="pb-8">
        <v-snackbar
          timeout="2000"
          top
          right
          :color="toastColor"
          :value="showToast"
        >
          {{ toastMessage }}
        </v-snackbar>
        <router-view :key="$route.fullPath"></router-view>
        <floating-menu
          :my-last-scores="myLastScores"
          :recently-viewed-games="recentlyViewedGames"
          @goToGame="goToGame"
        />
      </v-container>
    </v-main>

    <footer class="k-footer">
      <div class="k-container k-footer__inner">
        <span class="k-footer__brand">GAME OVER? CONTINUE ▸ 9</span>
        <nav aria-label="Footer" class="k-footer__links">
          <a href="https://forum.shmup.com/" target="_blank" rel="noopener"
            >Forum</a
          >
          <router-link to="/statistics">Statistics</router-link>
          <a :href="kofiUrl" target="_blank" rel="noopener"
            >Support us on Ko-fi</a
          >
        </nav>
      </div>
    </footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import FloatingMenu from "@/components/organisms/FloatingMenu.vue";
import { THEME_STORAGE_KEY } from "@/plugins/vuetify";

export default Vue.extend({
  name: "App",

  components: {
    FloatingMenu,
  },

  data: () => ({
    kofiUrl: "https://ko-fi.com/Z8U6243MY5",
    signInUrl: "https://forum.shmup.com/ucp.php?mode=login",
    mainNav: [
      { to: "/", label: "Home", exact: true },
      { to: "/games", label: "Games", exact: false },
      { to: "/platforms", label: "Platforms", exact: false },
      { to: "/players", label: "Players", exact: true },
      { to: "/compare-scores", label: "Compare", exact: false },
      { to: "/statistics", label: "Stats", exact: false },
    ],
  }),

  computed: {
    ...mapGetters([
      "user",
      "showToast",
      "toastMessage",
      "toastColor",
      "myLastScores",
      "recentlyViewedGames",
    ]),
    isAuthenticated(): boolean {
      return !!(this.user && this.user.authenticated);
    },
    isDark(): boolean {
      return this.$vuetify.theme.dark;
    },
    memberNav(): Array<{ to: string; label: string; exact: boolean }> {
      return [
        { to: "/", label: "Dashboard", exact: true },
        { to: `/players/${this.user.id}`, label: "My scores", exact: true },
        { to: "/my-games", label: "My games", exact: false },
        {
          to: "/my-recommendations",
          label: "Recommendations",
          exact: false,
        },
        { to: "/my-profile", label: "Share on forums", exact: false },
      ];
    },
  },

  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("fetchMyLastScores");
  },

  methods: {
    goToGame(game) {
      this.$router.push(`/games/${game.id}`);
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      try {
        window.localStorage.setItem(
          THEME_STORAGE_KEY,
          this.$vuetify.theme.dark ? "dark" : "light"
        );
      } catch (e) {
        // storage unavailable: the choice only lasts for this visit
      }
    },
    initial(name: string): string {
      return (name || "?").trim().charAt(0).toUpperCase();
    },
  },
});
</script>

<style lang="scss">
@import "theme.scss";

.k-header {
  background: var(--k-header);
  border-bottom: 1px solid var(--k-border);
  position: relative;
  z-index: 5;
}

.k-header__main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 22px;
  padding-top: 12px;
  padding-bottom: 12px;
}

.k-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none !important;
  color: var(--k-text) !important;

  &__logo {
    height: 30px;
    width: auto;
  }
  &__name {
    font-family: $font-display;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.18em;
  }
}

.k-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  flex: 1 1 auto;
  font-family: $font-display;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  &__link {
    padding: 9px 12px;
    color: var(--k-text2) !important;
    text-decoration: none !important;
    border-bottom: 2px solid transparent;

    &--active {
      color: var(--k-accent) !important;
      border-bottom-color: var(--k-accent);
    }
  }

  &--sub {
    flex: 0 1 auto;
    font-size: 15px;
    letter-spacing: 0.06em;
  }
}

.k-header__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  .v-icon {
    color: inherit !important;
  }
}

.k-account {
  padding-left: 6px;

  &__avatar {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: var(--k-cta);
    color: var(--k-on-cta);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: $font-score;
    font-size: 24px;
  }
}

.k-subbar {
  background: var(--k-surface);
  border-top: 1px solid var(--k-border);

  &__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 4px 16px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
}

.k-admin-tag {
  padding: 1px 8px;
  border: 1px solid var(--k-accent);
  border-radius: 4px;
  color: var(--k-accent);
  font-family: $font-score;
  font-size: 17px;
  letter-spacing: 0.08em;
}

.k-footer {
  background: var(--k-header);
  border-top: 1px solid var(--k-border);
  padding: 26px 0;
  color: var(--k-muted);
  font-size: 14px;

  &__inner {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
  }
  &__brand {
    font-family: $font-score;
    font-size: 20px;
    color: var(--k-accent);
  }
  &__links {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
