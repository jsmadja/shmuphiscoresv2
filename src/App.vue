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
          <v-list-item link to="/add-game" v-if="user">
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
          <!-- v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item -->
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title
          ><v-img
            width="180"
            src="http://shmup.com/wp-content/themes/shmup/images/shmup.png"
        /></v-toolbar-title>
      </v-app-bar>

      <v-main>
        <v-container fluid class="pb-8">
          <router-view></router-view>
          <v-menu top left nudge-top="10" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                fixed
                absolute
                dark
                fab
                bottom
                right
                color="orange"
                class="mr-1 mb-10 mb-sm-13 mb-md-13 mb-lg-13"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>

            <v-list flat dense>
              <v-subheader>LAST SCORES</v-subheader>
              <v-list-item
                v-for="(item, index) in [
                  'Mushihimesama Futari',
                  'Gunhed',
                  'Gate of Thunder',
                ]"
                :key="index"
                style="cursor: pointer;"
                to="/add-score"
              >
                <v-list-item-avatar tile>
                  <v-img src="https://hiscores.shmup.com/covers/2.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    drawer: null,
  }),

  computed: {
    ...mapGetters(["user"]),
  },

  created() {
    this.$store.dispatch("fetchUser");
  },
});
</script>

<style lang="scss">
@import "custom.scss";
</style>
