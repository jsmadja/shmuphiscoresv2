<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ game.title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="2">
        <game-informations
          :game="game"
          @goToGamePage="goToGamePage"
          :hide-configure-button="true"
          :hide-add-score-button="true"
        />
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="12">
            <v-card outlined>
              <v-card-text>
                <copyable-code
                  title="Forum Code"
                  :code="forumCode"
                  @copy="onForumCodeCopy"
                />
              </v-card-text>
            </v-card>
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
import GameInformations from "../organisms/GameInformations.vue";
import { Game } from "@/models/game";
import { Platform } from "@/models/ranking";

export default Vue.extend({
  name: "Game",
  props: {
    game: {
      type: Object,
    },
    platforms: {
      type: Array,
    },
  },
  components: {
    GameSettingForm,
    AddPlatforms,
    CopyableCode,
    GameInformations,
  },
  computed: {
    forumCode: function () {
      const game = this.game as Game;
      return `[url=http://hiscores.shmup.com/game/${game.id}/new_score]
      [b][color=#0080FF][size=150]POSTER AUTOMATIQUEMENT VOTRE SCORE[/size][/color][/b]
      [/url][img]http://hiscores.shmup.com/game/${game.id}/ranking.png[/img]`;
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
