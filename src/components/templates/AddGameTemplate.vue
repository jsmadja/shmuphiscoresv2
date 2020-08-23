<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>Add Game</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="5">
        <v-card class="pa-5" tile>
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col>
                <v-text-field
                  v-model="form.title"
                  label="Title"
                  placeholder="Gunhed"
                  :rules="titleRules"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="form.cover"
                  label="Hosted Game Cover"
                  hint="Absolute image link to the game cover"
                  placeholder="https://images.fr.shopping.rakuten.com/photo/185488530.jpg"
                  :rules="coverRules"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="form.thread"
                  label="Shmup Forum Thread link"
                  placeholder="http://forum.shmup.com/viewtopic.php?t=13851"
                  hint="Absolute link to the shmup.com game thread"
                  :rules="threadRules"
                  required
                  outlined
                ></v-text-field>
                <v-select
                  v-model="form.platforms"
                  outlined
                  :items="platforms"
                  :rules="platformsRules"
                  multiple
                  label="Platforms"
                  required
                ></v-select>
                <v-textarea
                  v-model="form.difficulties"
                  name="difficulties"
                  label="Difficulty Levels"
                  :placeholder="difficultyLevelsPlaceholder"
                  outlined
                  rows="4"
                  hint="Only one difficulty per line"
                ></v-textarea>
                <v-textarea
                  v-model="form.modes"
                  name="modes"
                  label="Modes"
                  :placeholder="modesPlaceholder"
                  outlined
                  rows="4"
                  hint="Only one mode per line"
                ></v-textarea>
                <v-textarea
                  v-model="form.stages"
                  name="stages"
                  label="Stages"
                  :placeholder="stagesPlaceholder"
                  outlined
                  rows="7"
                  hint="Only on stage per line, use a prefix for multiloop games: 1-1, 1-2, ..., 1-ALL, 2-1, 2-2 ..., 2-ALL"
                ></v-textarea>
                <v-textarea
                  v-model="form.ships"
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
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import GameTemplate from "./GameTemplate.vue";
import _ from "lodash";

export default Vue.extend({
  name: "AddGame",
  components: { GameTemplate },
  props: ["platforms"],
  data() {
    return {
      valid: false,
      difficultyLevelsPlaceholder: `Easy\nNormal\nHard`,
      modesPlaceholder: `Arcade\nOriginal\nCaravan`,
      stagesPlaceholder: `1\n2\n3\n4\n5\nALL`,
      shipsPlaceholder: `Type A\nType B\nType C`,
      form: {
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
        (v: string) => (v && v.trim().length > 0) || "Title is required",
      ],
      platformsRules: [
        (v: string[]) =>
          (v && v.length > 0) || "At least one platform is required",
      ],
      coverRules: [
        (v: string) =>
          (v && v.startsWith("http")) ||
          "Absolute image link should start with http",
      ],
      threadRules: [
        (v: string) =>
          (v && v.startsWith("http://forum.shmup.com/viewtopic.php?t=")) ||
          "Shmup Forum Thread link should start with http://forum.shmup.com/viewtopic.php?t=",
      ],
    };
  },
  methods: {
    validate() {
      (this.$refs.form as any).validate();
      const game = JSON.parse(JSON.stringify((this as any).form));
      game.difficulties = game.difficulties.split("\n");
      game.ships = game.ships.split("\n");
      game.modes = game.modes.split("\n");
      game.stages = game.stages.split("\n");
      this.$emit("createGame", game);
    },
    reset() {
      (this.$refs.form as any).reset();
    },
  },
  computed: {
    previewedGame: function () {
      const form: any = this.form;
      return {
        title: form.title || "Game Name",
        cover:
          form.cover ||
          "https://firstfreerockford.org/wp-content/uploads/2018/08/placeholder-book-cover-default.png",
        platforms: form.platforms
          .flat()
          .map((platformName) => ({ id: Math.random(), name: platformName })),
      };
    },
    previewedRankings: function () {
      function cartesianProductOf(x?, y?) {
        return _.reduce(
          arguments,
          function (a, b) {
            return _.flatten(
              _.map(a, function (x) {
                return _.map(b, function (y) {
                  return x.concat([y]);
                });
              }),
              true
            );
          },
          [[]]
        );
      }

      const form = (this as any).form;
      const difficulties = form.difficulties.split("\n") || [];
      const modes = form.modes.split("\n") || [];
      const stages = form.stages.split("\n") || [];
      const ships = form.ships.split("\n") || [];

      return cartesianProductOf(difficulties, modes).map((params) => {
        return {
          mode: params[1]
            ? {
                id: Math.random(),
                name: params[1],
              }
            : {},
          difficulty: {
            id: Math.random(),
            name: params[0],
          },
          scores: [1, 2, 3].map((rank) => {
            const stage = _.sample(stages);
            return {
              rank: rank,
              player: { id: Math.random(), name: "player" + rank },
              value: (4 - rank) * 100000,
              stage: stage,
              ship: { id: 0, name: _.sample(ships) },
              comment: "With " + _.sample(ships) + " ship",
              oneCC: stage === "ALL",
              inp: _.sample(["http://", null]),
              replay: _.sample([
                "https://www.youtube.com/watch?v=AxzNFPLstwQ",
                null,
              ]),
              photo: _.sample([
                "https://hiscores.shmup.com/photos/1562457741219-0004.png",
                null,
              ]),
            };
          }),
        };
      });
    },
  },
});
</script>
