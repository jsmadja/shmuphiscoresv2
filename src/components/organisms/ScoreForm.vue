<template>
  <div>
    <v-form ref="formRef" v-model="valid">
      <v-row v-if="previousScore && !previousScoreLoaded">
        <v-col cols="12" lg="4">
          <v-btn
            small
            depressed
            dark
            color="primary"
            outlined
            @click="() => $emit('loadPreviousScore')"
          >
            <v-icon left>mdi-reload</v-icon>
            Load previous score settings</v-btn
          >
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" lg="4">
          <v-select
            label="Platform"
            v-model="form.platform"
            :items="game.platforms"
            :rules="notEmpty"
            item-value="id"
            item-text="name"
            outlined
            :hide-details="hideDetails"
          />
        </v-col>
        <v-col cols="12" lg="4">
          <v-select
            label="Mode"
            v-model="form.mode"
            :items="game.modes"
            :rules="settingRules('modes')"
            item-value="id"
            item-text="name"
            outlined
            :disabled="game.modes.length === 0"
            :hide-details="hideDetails"
          />
        </v-col>
        <v-col cols="12" lg="4">
          <v-select
            label="Difficulty"
            v-model="form.difficulty"
            :items="game.difficulties"
            :rules="settingRules('difficulties')"
            item-value="id"
            item-text="name"
            outlined
            :disabled="game.difficulties.length === 0"
            :hide-details="hideDetails"
          />
        </v-col>
        <v-col cols="12" lg="4">
          <v-select
            label="Ship"
            v-model="form.ship"
            :items="game.ships"
            :rules="settingRules('ships')"
            item-value="id"
            item-text="name"
            outlined
            :hide-details="hideDetails"
            :disabled="game.ships.length === 0"
          />
        </v-col>
        <v-col cols="12" lg="4">
          <v-select
            label="Stage"
            v-model="form.stage"
            item-value="id"
            item-text="name"
            :items="game.stages"
            :rules="settingRules('stages')"
            outlined
            :hide-details="hideDetails"
            :disabled="game.stages.length === 0"
          />
        </v-col>

        <v-col cols="12" xs="12" lg="4">
          <v-file-input
            label="Photo"
            v-model="form.photo"
            prepend-icon="mdi-camera"
            outlined
            class="mb-8"
            :hide-details="!score || !score.photo"
            :hint="
              score
                ? `Previous photo available at: ${score.photo} Upload a new one only if necessary.`
                : ''
            "
            persistent-hint
          ></v-file-input>
        </v-col>

        <v-col cols="12" lg="4" v-if="previewPhoto" offset-lg="4">
          <v-card tile class="ml-1 mb-3">
            <v-card-text>
              <v-img :src="previewPhoto" alt="Photo" />
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" lg="4" offset-lg="4" v-if="!isTimerMode()">
          <v-text-field
            label="Score"
            v-model="form.value"
            outlined
            :rules="notBlank"
            placeholder="123456"
            :hide-details="hideDetails"
            suffix="pts"
            type="number"
          />
        </v-col>

        <v-col cols="12" lg="4" offset-lg="4" v-if="isTimerMode()">
          <v-row>
            <v-col cols="12" lg="4">
              <v-text-field
                label="Minutes"
                v-model="form.minutes"
                :rules="notBlank"
                outlined
                placeholder="12"
                :hide-details="hideDetails"
                suffix="mn"
                type="number"
              />
            </v-col>
            <v-col cols="12" lg="4">
              <v-text-field
                label="Seconds"
                v-model="form.seconds"
                :rules="notBlank"
                outlined
                placeholder="34"
                :hide-details="hideDetails"
                suffix="s"
                type="number"
              />
            </v-col>
            <v-col cols="12" lg="4">
              <v-text-field
                label="Milliseconds"
                v-model="form.milliseconds"
                :rules="notBlank"
                outlined
                placeholder="56"
                :hide-details="hideDetails"
                suffix="ms"
                type="number"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" xs="12" lg="6">
          <v-file-input
            label="INP"
            class="mb-8"
            v-model="form.inp"
            outlined
            :hide-details="!score || !score.inp"
            :hint="
              score
                ? `Previous INP available at: ${score.inp} Upload a new one only if necessary.`
                : ''
            "
            persistent-hint
          />
        </v-col>
        <v-col cols="12" xs="12" lg="6">
          <v-text-field
            label="Replay URL"
            v-model="form.replay"
            type="url"
            :rules="replayRules"
            placeholder="https://"
            hint="Direct Link (hosts: Youtube, Dailymotion, ...)"
            outlined
            prepend-icon="mdi-play"
            :hide-details="hideDetails"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Comment"
            v-model="form.comment"
            rows="3"
            outlined
            :hide-details="hideDetails"
          />
        </v-col>
      </v-row>
    </v-form>
    <v-btn
      :disabled="!valid || loading"
      :loading="loading"
      @click="validate"
      color="primary"
      class="mt-5"
      >{{ score && score.id ? "Update" : "Submit" }} Score</v-btn
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import { Game } from "@/models/game";
import { PropValidator } from "vue/types/options";
import { InputValidationRules } from "vuetify";
import { Score } from "@/models/score";

interface ScoreForm {
  id: string | null;
  mode: number | null;
  stage: number | null;
  ship: number | null;
  platform: number | null;
  difficulty: number | null;
  replay: string | null;
  comment: string | null;
  milliseconds: string | null;
  seconds: string | null;
  minutes: string | null;
  value: number | null;
  photo: File | null;
  inp: File | null;
}

export default Vue.extend({
  props: {
    game: { type: Object } as PropValidator<Game>,
    score: { type: Object } as PropValidator<Score>,
    previousScore: { type: Object } as PropValidator<Score>,
    mode: { type: Number } as PropValidator<number>,
    difficulty: { type: Number } as PropValidator<number>,
    ship: { type: Number } as PropValidator<number>,
    stage: { type: Number } as PropValidator<number>,
    platform: { type: Number } as PropValidator<number>,
  },
  data(): {
    loading: boolean;
    valid: boolean;
    hideDetails: boolean;
    form: ScoreForm;
    notBlank: InputValidationRules;
    notEmpty: InputValidationRules;
    replayRules: InputValidationRules;
    settingRules: (string) => InputValidationRules;
    previousScoreLoaded: boolean;
  } {
    return {
      previousScoreLoaded: false,
      loading: false,
      valid: false,
      hideDetails: false,
      notBlank: [
        (v: string) => {
          return (v && v.toString().trim().length > 0) || "Required";
        },
      ],
      notEmpty: [
        (v: number) => {
          return !!v || "Required";
        },
      ],
      settingRules: (setting: string) => [
        (v: number) => {
          if (this.game[setting].length === 0) {
            return true;
          }
          return !!v || "Required";
        },
      ],
      replayRules: [
        (v: string) =>
          !v ||
          (v && v.startsWith("http")) ||
          "Replay link should start with http",
      ],
      form: {
        id: null,
        value: null,
        platform: null,
        stage: null,
        photo: null,
        inp: null,
        replay: null,
        comment: null,
        mode: null,
        difficulty: null,
        ship: null,
        seconds: null,
        minutes: null,
        milliseconds: null,
      },
    };
  },
  updated() {
    if (
      this.score != null &&
      this.previousScore != null &&
      this.score.id === this.previousScore.id &&
      !this.previousScoreLoaded
    ) {
      this.previousScoreLoaded = true;
      this.form.mode = _.get(this, "score.mode.id");
      this.form.difficulty = _.get(this, "score.difficulty.id");
      this.form.platform = _.get(this, "score.platform.id");
      this.form.ship = _.get(this, "score.ship.id");
      this.form.stage = _.get(this, "score.stage.id");
    }
  },
  mounted() {
    this.form.id = _.get(this, "score.id");
    this.form.value = _.get(this, "score.value");
    this.form.minutes = _.get(this, "score.minutes");
    this.form.seconds = _.get(this, "score.seconds");
    this.form.milliseconds = _.get(this, "score.milliseconds");
    this.form.comment = _.get(this, "score.comment");
    this.form.replay = _.get(this, "score.replay");
    this.form.mode =
      this.mode ||
      _.get(this, "score.mode.id") ||
      this.defaultSettingValue("modes");
    this.form.difficulty =
      this.difficulty ||
      _.get(this, "score.difficulty.id") ||
      this.defaultSettingValue("difficulties");
    this.form.platform =
      this.platform ||
      _.get(this, "score.platform.id") ||
      this.defaultSettingValue("platforms");
    this.form.ship =
      this.ship ||
      _.get(this, "score.ship.id") ||
      this.defaultSettingValue("ships");
    this.form.stage =
      this.stage ||
      _.get(this, "score.stage.id") ||
      this.defaultSettingValue("stages");
  },
  methods: {
    defaultSettingValue(setting): number | null {
      return this.game[setting].length === 1 ? this.game[setting][0].id : null;
    },
    validate() {
      const form = this.$refs.formRef as any;
      form.validate();
      if (this.isTimerMode()) {
        this.form.value = null;
      }
      const score = JSON.parse(JSON.stringify(this.form));
      score.photo = this.form.photo;
      score.inp = this.form.inp;
      score.game = this.game.id;
      if (score.id) {
        this.$emit("editScore", score);
      } else {
        this.$emit("createScore", score);
      }
      this.loading = true;
    },
    isTimerMode() {
      if (this.form.mode) {
        return (
          this.game.modes.filter((m) => m.id === this.form.mode)[0]
            .scoreType === "timer"
        );
      }
      return false;
    },
  },
  computed: {
    previewPhoto: function (): string | null | undefined {
      const scorePhoto = _.get(this.score, "photo");
      return this.form.photo
        ? URL.createObjectURL(this.form.photo)
        : scorePhoto;
    },
  },
});
</script>
