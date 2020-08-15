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
          <v-list-item link to="/my-profile">
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>My Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/my-games">
            <v-list-item-action>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>My Games</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/my-recommendations">
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
          <v-list-item link to="/add-game">
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
        <v-toolbar-title>shmup.hiscores</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <router-view></router-view>
          <v-menu open-on-hover top offset-y>
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
                color="#1972F5"
                class="mr-5 mb-12"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in [
                  'Mushihimesama Futari',
                  'Gunhed',
                  'Gate of Thunder'
                ]"
                :key="index"
                style="cursor: pointer;"
                to="/add-score"
              >
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-container>
      </v-main>
    </v-app>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    drawer: null
  }),

  created() {
    this.$vuetify.theme.dark = true;
  }
});
</script>
