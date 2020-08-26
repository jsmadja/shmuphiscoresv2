<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ game.title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="2">
        <v-row>
          <v-col cols="12" sm="6" md="12">
            <v-card tile><Cover :url="game.cover" :alt="game.title" /></v-card>
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

            <v-menu offset-x open-on-hover nudge-right="5">
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

            <v-menu offset-x open-on-hover nudge-right="5">
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
              dark
              color="orange"
              class="mr-1 mb-3"
              @click="goToGamePage"
            >
              <v-icon left>mdi-gamepad-variant</v-icon>
              Game Page
            </v-btn>
            <v-btn tile small depressed target="_blank" :href="game.thread">
              <v-icon left small>mdi-eye</v-icon>
              Read Topic
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="12">
            <copyable-code
              title="Forum Code"
              :code="forumCode"
              @copy="onForumCodeCopy"
            />
          </v-col>
          <v-col cols="12">
            <add-platforms
              :platforms="platforms"
              :used-platforms="game.platforms.map((p) => p.name)"
              @add="onAddPlatforms"
            />
          </v-col>
          <v-col cols="12">
            <game-setting-form
              setting-name="Mode"
              :values="game.modes"
              @create="createMode"
            />
          </v-col>
          <v-col cols="12">
            <game-setting-form
              setting-name="Difficulty"
              :values="game.difficulties"
              @create="createDifficulty"
            />
          </v-col>
          <v-col cols="12">
            <game-setting-form
              setting-name="Ship"
              :values="game.ships"
              @create="createShip"
            />
          </v-col>
          <v-col cols="12">
            <game-setting-form
              setting-name="Stage"
              :values="game.stages"
              @create="createStage"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import GameSettingForm from "../atoms/GameSettingForm.vue";
import AddPlatforms from "../atoms/AddPlatforms.vue";
import CopyableCode from "../atoms/CopyableCode.vue";
import Cover from "@/components/atoms/Cover.vue";

export default Vue.extend({
  name: "Game",
  props: ["game", "platforms"],
  components: {
    GameSettingForm,
    AddPlatforms,
    CopyableCode,
    Cover,
  },
  computed: {
    forumCode: function () {
      return `[url=http://hiscores.shmup.com/game/${
        (this as any).game.id
      }/new_score]
      [b][color=#0080FF][size=150]POSTER AUTOMATIQUEMENT VOTRE SCORE[/size][/color][/b]
      [/url][img]http://hiscores.shmup.com/game/${
        (this as any).game.id
      }/ranking.png[/img]`;
    },
  },
  methods: {
    onForumCodeCopy: function () {
      this.$emit("copyForumCode");
    },
    onAddPlatforms: function (opts) {
      this.$emit("addPlatforms", opts);
    },
    createMode: function (opts) {
      this.$emit("createMode", opts);
    },
    createDifficulty: function (opts) {
      this.$emit("createDifficulty", opts);
    },
    createShip: function (opts) {
      this.$emit("createShip", opts);
    },
    createStage: function (opts) {
      this.$emit("createStage", opts);
    },
    goToGamePage: function () {
      this.$emit("goToGamePage");
    },
  },
});
</script>
