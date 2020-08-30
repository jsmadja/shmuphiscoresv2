<template>
  <div>
    <v-form ref="form" v-model="valid">
      <v-row dense>
        <v-col cols="12" lg="4">
          <v-select
            label="Platform"
            v-model="form.platform"
            :items="game.platforms"
            item-value="id"
            item-text="name"
            outlined
            required
            :hide-details="hideDetails"
          />
        </v-col>
        <v-col cols="12" lg="4">
          <v-select
            label="Mode"
            v-model="form.mode"
            :items="game.modes"
            item-value="id"
            item-text="name"
            outlined
            required
            :disabled="game.modes.length === 0"
            :hide-details="hideDetails"
          />
        </v-col>
        <v-col cols="12" lg="4">
          <v-select
            label="Difficulty"
            v-model="form.difficulty"
            :items="game.difficulties"
            item-value="id"
            item-text="name"
            outlined
            required
            :disabled="game.difficulties.length === 0"
            :hide-details="hideDetails"
          />
        </v-col>
        <v-col cols="12" lg="4">
          <v-select
            label="Ship"
            v-model="form.ship"
            :items="game.ships"
            item-value="id"
            item-text="name"
            outlined
            required
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
            outlined
            required
            :hide-details="hideDetails"
            :disabled="game.stages.length === 0"
          />
        </v-col>
        <v-col cols="12" lg="4">
          <v-text-field
            label="Score"
            v-model="form.value"
            outlined
            required
            :rules="scoreRules"
            placeholder="123456"
            :hide-details="hideDetails"
            suffix="pts"
            type="number"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Comment"
            v-model="form.comment"
            outlined
            :hide-details="hideDetails"
          />
        </v-col>
        <v-col cols="12" xs="12" lg="4">
          <v-file-input
            label="Photo"
            v-model="form.photo"
            prepend-icon="mdi-camera"
            outlined
            :hide-details="hideDetails"
          ></v-file-input>
        </v-col>
        <v-col cols="12" xs="12" lg="4">
          <v-file-input
            label="INP"
            v-model="form.inp"
            outlined
            :hide-details="hideDetails"
          />
        </v-col>
        <v-col cols="12" xs="12" lg="4">
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
      </v-row>
    </v-form>
    <v-btn
      :disabled="!valid || loading"
      :loading="loading"
      @click="validate"
      color="primary"
      >Submit Score</v-btn
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["game", "score", "mode", "difficulty", "ship", "stage", "platform"],
  data() {
    return {
      loading: false,
      valid: false,
      hideDetails: false,
      scoreRules: [
        (v: string) => (v && v.trim().length > 0) || "Score is required",
      ],
      replayRules: [
        (v: string) =>
          !v ||
          (v && v.startsWith("http")) ||
          "Replay link should start with http",
      ],
      form: {
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
      },
    };
  },
  mounted() {
    const form = (this as any).form;
    form.mode = (this as any).mode;
    form.difficulty = (this as any).difficulty;
    form.platform = (this as any).platform;
    form.ship = (this as any).ship;
    form.stage = (this as any).stage;
  },
  methods: {
    validate() {
      const form = this.$refs.form as any;
      form.validate();
      const _this = this as any;
      const score = JSON.parse(JSON.stringify(_this.form));
      score.photo = _this.form.photo;
      score.inp = _this.form.inp;
      score.game = _this.game.id;
      this.$emit("createScore", score);
      this.loading = true;
    },
  },
});
</script>
