<template>
  <v-row>
    <v-col cols="12" sm="6" md="12">
      <v-card tile>
        <Cover :url="game.cover" :alt="game.title" />
      </v-card>
    </v-col>
    <v-col class="pa-1">
      <v-menu offset-x nudge-right="5">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            class="ma-2"
            color="green"
            text-color="white"
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar left class="green darken-4">
              {{ (game.platforms || []).length }}
            </v-avatar>
            Platforms
          </v-chip>
        </template>
        <v-list color="green" dense>
          <v-list-item
            v-for="(platform, index) in game.platforms"
            :key="index"
            @click="$emit('selectPlatform', platform)"
            dark
            color="green"
          >
            <v-list-item-title>{{ platform.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-x nudge-right="5">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            class="ma-2"
            color="amber"
            text-color="white"
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar left class="amber darken-4">
              {{ (game.difficulties || []).length }}
            </v-avatar>
            Difficulties
          </v-chip>
        </template>
        <v-list color="amber" dense>
          <v-list-item
            v-for="(difficulty, index) in game.difficulties"
            :key="index"
            dark
            color="amber"
          >
            <v-list-item-title>{{ difficulty.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu disabled="!game.modes" offset-x nudge-right="5">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            class="ma-2"
            color="grey"
            text-color="white"
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar left class="grey darken-4">
              {{ (game.modes || []).length }}
            </v-avatar>
            Modes
          </v-chip>
        </template>
        <v-list color="grey" dense>
          <v-list-item
            v-for="(mode, index) in game.modes"
            :key="index"
            dark
            color="grey darken-4"
          >
            <v-list-item-title>{{ mode.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
    <v-col>
      <v-btn
        tile
        small
        class="mr-1 mb-3 elevation-5"
        dark
        color="orange"
        v-show="!hideAddScoreButton"
        @click="$emit('addScore', { game })"
      >
        <v-icon left small>mdi-plus</v-icon>
        Add Score
      </v-btn>
      <v-btn
        tile
        small
        dark
        color="orange"
        class="mr-1 mb-3 elevation-5"
        v-show="!hideGoToGameButton"
        @click="$emit('goToGamePage')"
      >
        <v-icon left>mdi-gamepad-variant</v-icon>
        Game Page
      </v-btn>
      <v-btn
        tile
        small
        depressed
        class="mr-1 mb-3"
        target="_blank"
        :href="game.thread"
      >
        <v-icon left small>mdi-eye</v-icon>
        Read Topic
      </v-btn>
      <v-btn
        v-if="!hideConfigureButton"
        tile
        small
        depressed
        @click="$emit('configureGame', game)"
      >
        <v-icon left small>mdi-cog</v-icon>
        Configure
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Cover from "../atoms/Cover.vue";

export default Vue.extend({
  name: "GameInformations",
  props: [
    "game",
    "hideAddScoreButton",
    "hideGoToGameButton",
    "hideConfigureButton",
  ],
  components: { Cover },
});
</script>
