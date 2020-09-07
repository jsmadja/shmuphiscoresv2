<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>Add Game</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" md="6" lg="5">
        <v-card class="pa-5" tile>
          <v-form ref="formRef" v-model="valid">
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formModel.title"
                  label="Title"
                  placeholder="Gunhed"
                  :rules="titleRules"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="formModel.cover"
                  label="Hosted Game Cover"
                  hint="Absolute image link to the game cover"
                  placeholder="https://images.fr.shopping.rakuten.com/photo/185488530.jpg"
                  :rules="coverRules"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="formModel.thread"
                  label="Shmup Forum Thread link"
                  placeholder="http://forum.shmup.com/viewtopic.php?t=13851"
                  hint="Absolute link to the shmup.com game thread"
                  :rules="threadRules"
                  required
                  outlined
                ></v-text-field>
                <v-select
                  v-model="formModel.platforms"
                  outlined
                  :items="platforms"
                  :rules="platformsRules"
                  multiple
                  label="Platforms"
                  required
                ></v-select>
                <v-textarea
                  v-model="formModel.difficulties"
                  name="difficulties"
                  label="Difficulty Levels"
                  :placeholder="difficultyLevelsPlaceholder"
                  outlined
                  rows="4"
                  hint="Only one difficulty per line"
                ></v-textarea>
                <v-textarea
                  v-model="formModel.modes"
                  name="modes"
                  label="Modes"
                  :placeholder="modesPlaceholder"
                  outlined
                  rows="4"
                  hint="Only one mode per line"
                ></v-textarea>
                <v-textarea
                  v-model="formModel.stages"
                  name="stages"
                  label="Stages"
                  :placeholder="stagesPlaceholder"
                  outlined
                  rows="7"
                  hint="Only on stage per line, use a prefix for multiloop games: 1-1, 1-2, ..., 1-ALL, 2-1, ..., 2-ALL"
                ></v-textarea>
                <v-textarea
                  v-model="formModel.ships"
                  name="ships"
                  label="Ships"
                  :placeholder="shipsPlaceholder"
                  outlined
                  rows="4"
                  hint="Only on ship per line"
                ></v-textarea>
                <v-btn
                  :disabled="!valid"
                  @click="validate"
                  color="primary"
                  class="mr-4"
                >
                  Create
                </v-btn>
                <v-btn color="error" class="mr-4" @click="reset">
                  Reset Form
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="7">
        <v-card tile>
          <GameTemplate
            :game="previewedGame"
            :hideRankingMenu="true"
            :rankings="previewedRankings"
            :user="user"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import GameTemplate from "./GameTemplate.vue";
import Component from "vue-class-component";
import { generateRankings, Platform, Ranking } from "@/models/ranking";
import { Prop, Provide, Ref } from "vue-property-decorator";
import { Player } from "@/models/player";
import { Game } from "@/models/game";

@Component({
  components: { GameTemplate },
})
export default class AddGame extends Vue {
  @Prop() platforms!: Platform[];
  @Prop() user!: Player;

  @Provide() valid = false;
  @Provide() difficultyLevelsPlaceholder = `Easy\nNormal\nHard`;
  @Provide() modesPlaceholder = `Arcade\nOriginal\nCaravan`;
  @Provide() stagesPlaceholder = `1\n2\n3\n4\n5\nALL`;
  @Provide() shipsPlaceholder = `Type A\nType B\nType C`;
  @Provide() formModel = {
    title: "",
    cover: "",
    ships: "",
    stages: "",
    modes: "",
    difficulties: "",
    thread: "http://forum.shmup.com/viewtopic.php?t=",
    platforms: [],
  };
  @Provide() titleRules = [
    (v: string): string | boolean => {
      return (v && v.trim().length > 0) || "Title is required";
    },
  ];
  @Provide() platformsRules = [
    (v: string[]): string | boolean =>
      (v && v.length > 0) || "At least one platform is required",
  ];
  @Provide() coverRules = [
    (v: string): string | boolean =>
      (v && v.startsWith("http")) ||
      "Absolute image link should start with http",
  ];
  @Provide() threadRules = [
    (v: string): string | boolean =>
      (v && v.startsWith("http://forum.shmup.com/viewtopic.php?t=")) ||
      "Shmup Forum Thread link should start with http://forum.shmup.com/viewtopic.php?t=",
  ];

  @Ref("formRef") readonly formElement;

  validate(): void {
    this.formElement.validate();
    const game = JSON.parse(JSON.stringify(this.formModel));
    game.difficulties = game.difficulties.split("\n");
    game.ships = game.ships.split("\n");
    game.modes = game.modes.split("\n");
    game.stages = game.stages.split("\n");
    this.$emit("createGame", game);
  }
  reset(): void {
    this.formElement.reset();
  }
  get previewedGame(): Game {
    return {
      id: 0,
      ships: [],
      stages: [],
      thread: "",
      title: this.formModel.title || "Game Name",
      cover:
        this.formModel.cover ||
        "https://firstfreerockford.org/wp-content/uploads/2018/08/placeholder-book-cover-default.png",
      platforms: this.formModel.platforms
        .flat()
        .map((platformName) => ({ id: Math.random(), name: platformName })),
      difficulties:
        this.formModel.difficulties.length === 0
          ? []
          : this.formModel.difficulties
              .trim()
              .split("\n")
              .map((name) => ({ id: 0, name })),
      modes:
        this.formModel.modes.length === 0
          ? []
          : this.formModel.modes
              .trim()
              .split("\n")
              .map((name) => ({ id: 0, name })),
    };
  }

  get previewedRankings(): Ranking[] {
    const difficulties = this.formModel.difficulties.split("\n") || [];
    const modes = this.formModel.modes.split("\n") || [];
    const stages = this.formModel.stages.split("\n") || [];
    const ships = this.formModel.ships.split("\n") || [];
    return generateRankings(difficulties, modes, stages, ships);
  }
}
</script>
