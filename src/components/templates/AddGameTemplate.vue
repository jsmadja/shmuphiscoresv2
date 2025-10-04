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
import { defineComponent } from "vue";
import GameTemplate from "./GameTemplate.vue";
import { generateRankings } from "@/models/ranking";

interface GameFormType {
  title: string;
  cover: string;
  ships: string;
  stages: string;
  modes: string;
  difficulties: string;
  thread: string;
  platforms: string[];
}

type ArrayRule = (v: string[]) => string | boolean;
type Rule = (v: string) => string | boolean;

export default defineComponent({
  components: { GameTemplate },
  props: ["platforms", "user"],
  data(): {
    valid: boolean;
    difficultyLevelsPlaceholder: string;
    modesPlaceholder: string;
    stagesPlaceholder: string;
    shipsPlaceholder: string;
    formModel: GameFormType;
    titleRules: Array<Rule>;
    platformsRules: Array<ArrayRule>;
    coverRules: Array<Rule>;
    threadRules: Array<Rule>;
  } {
    return {
      valid: false,
      difficultyLevelsPlaceholder: `Easy\nNormal\nHard`,
      modesPlaceholder: `Arcade\nOriginal\nCaravan`,
      stagesPlaceholder: `1\n2\n3\n4\n5\nALL`,
      shipsPlaceholder: `Type A\nType B\nType C`,
      formModel: {
        title: "",
        cover: "",
        ships: "",
        stages: "",
        modes: "",
        difficulties: "",
        thread: "http://forum.shmup.com/viewtopic.php?t=",
        platforms: [],
      },
      titleRules: [
        (v: string): string | boolean => {
          return (v && v.trim().length > 0) || "Title is required";
        },
      ],
      platformsRules: [
        (v: string[]): string | boolean =>
          (v && v.length > 0) || "At least one platform is required",
      ],
      coverRules: [
        (v: string): string | boolean =>
          (v && v.startsWith("http")) ||
          "Absolute image link should start with http",
      ],
      threadRules: [
        (v: string): string | boolean =>
          (v && v.startsWith("http://forum.shmup.com/viewtopic.php?t=")) ||
          "Shmup Forum Thread link should start with http://forum.shmup.com/viewtopic.php?t=",
      ],
    };
  },

  methods: {
    validate: function () {
      const formRef = this.$refs.formRef as HTMLFormElement;
      formRef.validate();
      const formModel = this.$data.formModel;
      const game = JSON.parse(JSON.stringify(formModel));
      game.difficulties = game.difficulties.split("\n").filter((s) => !!s);
      game.ships = game.ships.split("\n").filter((s) => !!s);
      game.modes = game.modes.split("\n").filter((s) => !!s);
      game.stages = game.stages.split("\n").filter((s) => !!s);
      this.$emit("createGame", game);
    },
    reset: function () {
      const formRef = this.$refs.formRef as HTMLFormElement;
      formRef.reset();
    },
  },
  computed: {
    previewedGame: function () {
      const formModel = this.$data.formModel;
      return {
        id: 0,
        ships: [],
        stages: [],
        thread: "",
        title: formModel.title || "Game Name",
        cover:
          formModel.cover ||
          "https://firstfreerockford.org/wp-content/uploads/2018/08/placeholder-book-cover-default.png",
        platforms: formModel.platforms
          .flat()
          .map((platformName) => ({ id: Math.random(), name: platformName })),
        difficulties:
          formModel.difficulties.length === 0
            ? []
            : formModel.difficulties
                .trim()
                .split("\n")
                .map((name) => ({ id: 0, name })),
        modes:
          formModel.modes.length === 0
            ? []
            : formModel.modes
                .trim()
                .split("\n")
                .map((name) => ({ id: 0, name })),
      };
    },

    previewedRankings: function () {
      const formModel = this.$data.formModel;
      const difficulties = formModel.difficulties.split("\n") || [];
      const modes = formModel.modes.split("\n") || [];
      const stages = formModel.stages.split("\n") || [];
      const ships = formModel.ships.split("\n") || [];
      return generateRankings(difficulties, modes, stages, ships);
    },
  },
});
</script>
