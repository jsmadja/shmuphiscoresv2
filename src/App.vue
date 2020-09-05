<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <v-list-item link to="/">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            two-line
            link
            to="/my-profile"
            v-if="user && user.authenticated"
          >
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>My Profile</v-list-item-title>
              <v-list-item-subtitle>{{ user.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/my-games" v-if="user && user.authenticated">
            <v-list-item-action>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>My Games</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            link
            to="/my-recommendations"
            v-if="user && user.authenticated"
          >
            <v-list-item-action>
              <v-icon>mdi-compass</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>My Recommendations</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-target</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>My Kill List</v-list-item-title>
            </v-list-item-content>
          </v-list-item -->
          <v-divider></v-divider>
          <v-list-item link to="/games">
            <v-list-item-action>
              <v-icon>mdi-gamepad-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Games</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/platforms">
            <v-list-item-action>
              <v-icon>mdi-desktop-classic</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Platforms</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/players">
            <v-list-item-action>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Players</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/compare-scores">
            <v-list-item-action>
              <v-icon>mdi-compare-horizontal</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Compare Scores</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/add-game" v-if="user.administrator">
            <v-list-item-action>
              <v-icon>mdi-view-grid-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Add Game</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/statistics">
            <v-list-item-action>
              <v-icon>mdi-finance</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Statistics</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        app
        clipped-left
        class="v-chip--clickable"
        @click="$router.push('/')"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title
          ><v-img
            width="180"
            src="http://shmup.com/wp-content/themes/shmup/images/shmup.png"
          />
        </v-toolbar-title>
        <h1>.HISCORES</h1>
      </v-app-bar>

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
      <v-footer app :absolute="false" padless>
        <span style="text-align: center; width: 100%;"
          >&copy; shmup-hiscores 2013-{{ new Date().getFullYear() }}</span
        >
      </v-footer>
    </v-app>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import FloatingMenu from "@/components/organisms/FloatingMenu.vue";

export default Vue.extend({
  name: "App",

  components: {
    FloatingMenu,
  },

  data: () => ({
    drawer: null,
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
  },

  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("fetchMyLastScores");
  },

  methods: {
    goToGame(game) {
      this.$router.push(`/game/${game.id}`);
    },
  },
});
</script>

<style lang="scss">
@import "custom.scss";
</style>
