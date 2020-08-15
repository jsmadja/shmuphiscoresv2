<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Mishihimesama Futari</h1>
      </v-col>
    </v-row>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-select
            id="platform"
            label="Platform"
            :items="mappedPlatforms"
            outlined
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4">
          <v-select
            id="mode"
            label="Mode"
            :items="mappedModes"
            outlined
            lg="2"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4">
          <v-select
            id="difficulty"
            label="Difficulty"
            :items="mappedDifficulties"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-select id="ship" label="Ship" :items="mappedShips" outlined />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            id="score_points"
            label="Score"
            outlined
            placeholder="123456"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-select id="stage" label="Stage" :items="mappedStages" outlined />
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-textarea id="comment" label="Comment" outlined />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-file-input label="Photo" outlined></v-file-input>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-file-input label="INP" outlined />
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="4">
          <v-text-field
            id="replay"
            label="Replay URL"
            type="url"
            placeholder="http://"
            outlined
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn to="/post-score">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
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
        ship: null
      }
    };
  },
  computed: {
    mappedStages: function() {
      return [
        {
          text: "1",
          value: "stage.id"
        },
        {
          text: "2",
          value: "stage.id2"
        }
      ];
    },
    mappedPlatforms: function() {
      return [
        {
          text: "PCB",
          value: "platform.id"
        },
        {
          text: "X360",
          value: "x"
        }
      ];
    },
    mappedModes: function() {
      return [
        { text: "1.5", value: "mode.id" },
        { text: "Arrange", value: "mode.id" }
      ];
    },
    mappedDifficulties: function() {
      return [
        {
          text: "Original",
          value: "difficulties.id"
        },
        {
          text: "Ultra",
          value: "difficulties.id"
        }
      ];
    },
    mappedShips: function() {
      return [
        { text: "Palm", value: "ship.id" },
        { text: "Recco", value: "ship.id" }
      ];
    }
  }
};
</script>
