<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ game.title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col col="12" lg="2">
        <game-informations :game="game" :hide-add-score-button="true" />
      </v-col>
      <v-col>
        <v-stepper v-model="e6">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1"
              >Register your score</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2"
              >Copy Forum Code</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step step="3">Paste on forum</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-form>
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
                      :hide-details="hideDetails"
                      :disabled="game.stages.length === 0"
                    />
                  </v-col>
                  <v-col cols="12" lg="4">
                    <v-text-field
                      label="Score"
                      v-model="form.value"
                      outlined
                      placeholder="123456"
                      :hide-details="hideDetails"
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
                      prepend-icon="mdi-camera"
                      label="Photo"
                      outlined
                      :hide-details="hideDetails"
                    ></v-file-input>
                  </v-col>
                  <v-col cols="12" xs="12" lg="4">
                    <v-file-input
                      label="INP"
                      outlined
                      :hide-details="hideDetails"
                    />
                  </v-col>
                  <v-col cols="12" xs="12" lg="4">
                    <v-text-field
                      label="Replay URL"
                      type="url"
                      placeholder="http://"
                      outlined
                      prepend-icon="mdi-play"
                      :hide-details="hideDetails"
                    />
                  </v-col>
                </v-row>
              </v-form>
              <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card flat outlined>
                <copyable-code :code="code" />
              </v-card>
              <v-btn color="primary" class="mt-3" @click="e6 = 3">Copy</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-img
                contain
                height="400"
                src="https://hiscores.shmup.com/assets/images/shmup.png"
              />
              <v-btn
                class="mt-5"
                color="primary"
                @click="e6 = 4"
                :href="
                  game.thread.replace(
                    'viewtopic.php?',
                    'posting.php?mode=reply&f=20&'
                  )
                "
                >Open Forum</v-btn
              >
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import CopyableCode from "@/components/atoms/CopyableCode";
import GameInformations from "@/components/organisms/GameInformations";

export default {
  components: {
    CopyableCode,
    GameInformations,
  },
  data() {
    return {
      hideDetails: false,
      e6: 1,
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
  created() {
    this.$store.dispatch("fetchGame", this.$route.params.id);
  },
  mounted() {
    const { mode, difficulty, platform, ship } = this.$route.query;
    this.form.mode = parseInt(mode);
    this.form.difficulty = parseInt(difficulty);
    this.form.platform = parseInt(platform);
    this.form.ship = parseInt(ship);
  },
  computed: {
    ...mapGetters(["game"]),
    code: function () {
      return `Mode: [b]${this.form.mode}[/b]
Score: [b][color=#0000FF]${this.form.value}[/color][/b]
Stage: [b][color=#BF4000]${this.form.stage}[/color][/b]
Difficulté: [b]${this.form.difficulty}[/b]
Vaisseau: [b]${this.form.ship}[/b]
Support: [b]${this.form.platform}[/b]
Position : [b]${this.form.progression}[/b]
Commentaire: [b]${this.form.comment}[/b]
[img]${this.form.photo} [/img]
${this.form.replay}

[size=85]Message généré depuis [url=http://hiscores.shmup.com]hiscores.shmup.com[/url].[/size]
_______________________________________________`;
    },
  },
};
</script>
