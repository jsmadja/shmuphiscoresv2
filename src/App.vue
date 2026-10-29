<template>
  <v-app id="inspire">
    <div class="k-shell">
      <aside
        class="k-drawer"
        :class="{ 'k-drawer--open': menuOpen }"
        aria-label="Site menu"
      >
        <div class="k-drawer__top">
          <router-link to="/" class="k-brand">
            <img
              src="https://shmup.com/wp-content/themes/shmup/images/shmup.png"
              alt="shmup"
              class="k-brand__logo"
            />
            <span class="k-brand__name">HISCORES</span>
          </router-link>
          <button
            type="button"
            class="k-btn k-btn--ghost k-btn--icon k-drawer__toggle"
            aria-label="Menu"
            :aria-expanded="menuOpen ? 'true' : 'false'"
            @click="menuOpen = !menuOpen"
          >
            <v-icon>{{ menuOpen ? "mdi-close" : "mdi-menu" }}</v-icon>
          </button>
        </div>

        <div class="k-drawer__body">
          <global-search />

          <router-link
            v-if="isAuthenticated"
            to="/games"
            class="k-btn k-btn--cta k-drawer__cta"
            >Post a score</router-link
          >
          <a v-else :href="signInUrl" class="k-btn k-btn--cta k-drawer__cta"
            >Sign in</a
          >

          <nav aria-label="Main" class="k-menu">
            <router-link
              v-for="item in mainNav"
              :key="item.to"
              :to="item.to"
              :exact="item.exact"
              class="k-menu__link"
              active-class="k-menu__link--active"
              ><v-icon>{{ item.icon }}</v-icon
              >{{ item.label }}</router-link
            >
          </nav>

          <nav v-if="isAuthenticated" aria-label="My space" class="k-menu">
            <h2 class="k-menu__title">MY SPACE</h2>
            <router-link
              v-for="item in memberNav"
              :key="item.to"
              :to="item.to"
              :exact="item.exact"
              class="k-menu__link"
              active-class="k-menu__link--active"
              ><v-icon>{{ item.icon }}</v-icon
              >{{ item.label }}</router-link
            >
          </nav>

          <nav
            v-if="favoriteGames.length > 0"
            aria-label="Favourites"
            class="k-menu"
          >
            <h2 class="k-menu__title">FAVOURITES</h2>
            <router-link
              v-for="game in favoriteGames"
              :key="`favorite-${game.id}`"
              :to="`/games/${game.id}`"
              class="k-menu__link k-menu__link--game"
              active-class="k-menu__link--active"
              ><v-icon>mdi-star</v-icon
              ><span class="k-menu__link-label">{{
                game.title
              }}</span></router-link
            >
          </nav>

          <nav
            v-if="isAuthenticated && user.administrator"
            aria-label="Admin"
            class="k-menu"
          >
            <h2 class="k-menu__title">ADMIN</h2>
            <router-link
              to="/add-game"
              class="k-menu__link"
              active-class="k-menu__link--active"
              ><v-icon>mdi-plus</v-icon>Add game</router-link
            >
            <router-link
              to="/add-player"
              class="k-menu__link"
              active-class="k-menu__link--active"
              ><v-icon>mdi-plus</v-icon>Add player</router-link
            >
          </nav>

          <div class="k-drawer__footer">
            <router-link
              v-if="isAuthenticated"
              to="/my-profile"
              class="k-account"
              :aria-label="`My account: ${user.name}`"
            >
              <span class="k-account__avatar" aria-hidden="true">{{
                initial(user.name)
              }}</span>
              <span class="k-account__text">
                <span class="k-account__name">{{ user.name }}</span>
                <span class="k-account__hint">My profile</span>
              </span>
            </router-link>
            <div class="k-drawer__actions">
              <button
                type="button"
                class="k-btn k-btn--ghost k-btn--icon"
                :aria-label="
                  isDark ? 'Switch to light theme' : 'Switch to dark theme'
                "
                :title="
                  isDark ? 'Switch to light theme' : 'Switch to dark theme'
                "
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
                class="k-btn k-btn--kofi k-drawer__kofi"
              >
                <v-icon small color="white">mdi-coffee</v-icon>Support
              </a>
            </div>
          </div>
        </div>
      </aside>

      <div class="k-content">
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
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import FloatingMenu from "@/components/organisms/FloatingMenu.vue";
import GlobalSearch from "@/components/organisms/GlobalSearch.vue";
import { THEME_STORAGE_KEY } from "@/plugins/vuetify";

export default Vue.extend({
  name: "App",

  components: {
    FloatingMenu,
    GlobalSearch,
  },

  data: () => ({
    kofiUrl: "https://ko-fi.com/Z8U6243MY5",
    signInUrl: "https://forum.shmup.com/ucp.php?mode=login",
    menuOpen: false,
    mainNav: [
      { to: "/", label: "Home", icon: "mdi-home-outline", exact: true },
      {
        to: "/games",
        label: "Games",
        icon: "mdi-gamepad-variant-outline",
        exact: false,
      },
      {
        to: "/platforms",
        label: "Platforms",
        icon: "mdi-monitor",
        exact: false,
      },
      {
        to: "/players",
        label: "Players",
        icon: "mdi-account-group-outline",
        exact: true,
      },
      {
        to: "/compare-scores",
        label: "Compare",
        icon: "mdi-compare-horizontal",
        exact: false,
      },
      {
        to: "/statistics",
        label: "Stats",
        icon: "mdi-chart-bar",
        exact: false,
      },
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
      "favoriteGames",
    ]),
    isAuthenticated(): boolean {
      return !!(this.user && this.user.authenticated);
    },
    isDark(): boolean {
      return this.$vuetify.theme.dark;
    },
    memberNav(): Array<{
      to: string;
      label: string;
      icon: string;
      exact: boolean;
    }> {
      return [
        {
          to: `/players/${this.user.id}`,
          label: "My scores",
          icon: "mdi-trophy-outline",
          exact: true,
        },
        {
          to: "/my-games",
          label: "My games",
          icon: "mdi-controller-classic-outline",
          exact: false,
        },
        {
          to: "/my-recommendations",
          label: "Recommendations",
          icon: "mdi-star-outline",
          exact: false,
        },
        {
          to: "/my-profile",
          label: "Share on forums",
          icon: "mdi-forum-outline",
          exact: false,
        },
      ];
    },
  },

  watch: {
    $route() {
      this.menuOpen = false;
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

.k-shell {
  display: flex;
  align-items: stretch;
  min-height: 100vh;
}

.k-drawer {
  position: sticky;
  top: 0;
  z-index: 5;
  flex: none;
  width: 248px;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: var(--k-header);
  border-right: 1px solid var(--k-border);

  .v-icon {
    color: inherit !important;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 16px 16px 12px;
  }
  &__toggle {
    display: none !important;
  }
  &__body {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 6px 12px 18px;
  }
  &__cta {
    width: 100%;
    justify-content: center;
    min-height: 46px;
    font-family: $font-display;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  &__footer {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 14px;
    border-top: 1px solid var(--k-border);
  }
  &__actions {
    display: flex;
    gap: 8px;
  }
  &__kofi {
    flex: 1 1 auto;
    justify-content: center;
  }
}

.k-content {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;

  .v-main {
    flex: 1 0 auto;
  }
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

.k-menu {
  display: flex;
  flex-direction: column;
  gap: 2px;

  &__title {
    margin: 0 0 6px;
    padding: 0 12px;
    font-family: $font-display;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.18em;
    color: var(--k-muted);
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 44px;
    padding: 0 12px;
    border-radius: 6px;
    color: var(--k-text2) !important;
    text-decoration: none !important;
    font-family: $font-display;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.08em;

    .v-icon {
      font-size: 20px;
    }

    &:hover {
      background: var(--k-surface);
      color: var(--k-text) !important;
    }

    &--game {
      min-height: 38px;
      font-family: $font-body;
      font-weight: 500;
      font-size: 14px;
      text-transform: none;
      letter-spacing: 0;

      .v-icon {
        font-size: 16px;
        color: var(--k-accent) !important;
      }
    }

    &-label {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &--active,
    &--active:hover {
      background: var(--k-surface);
      color: var(--k-accent) !important;
      box-shadow: inset 3px 0 0 var(--k-accent);
    }
  }
}

.k-account {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 48px;
  padding: 4px 10px 4px 4px;
  border-radius: 6px;
  border: 1px solid var(--k-border2);
  color: var(--k-text) !important;
  text-decoration: none !important;

  &__avatar {
    width: 36px;
    height: 36px;
    flex: none;
    border-radius: 4px;
    background: var(--k-cta);
    color: var(--k-on-cta);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: $font-score;
    font-size: 26px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    line-height: 1.2;
  }
  &__name {
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &__hint {
    font-size: 12px;
    color: var(--k-muted);
  }
}

@media (max-width: 860px) {
  .k-shell {
    flex-direction: column;
  }
  .k-drawer {
    width: auto;
    height: auto;
    border-right: 0;
    border-bottom: 1px solid var(--k-border);

    &__toggle {
      display: inline-flex !important;
    }
    &__body {
      display: none;
    }
    &--open &__body {
      display: flex;
      max-height: calc(100vh - 72px);
      overflow-y: auto;
    }
  }
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
