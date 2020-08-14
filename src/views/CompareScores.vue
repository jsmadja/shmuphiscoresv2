<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Compare Scores</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-autocomplete
          :items="['Anzymus']"
          color="white"
          hide-no-data
          hide-selected
          label="Player 1"
          value="Anzymus"
          placeholder="Start typing to Search"
          outlined
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          :items="['Mickey']"
          value="Mickey"
          color="white"
          hide-no-data
          hide-selected
          label="Player 2"
          placeholder="Start typing to Search"
          outlined
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          @click:row="handleClick"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CompareScores.vue",
  data() {
    return {
      search: "",
      headers: [
        { text: "Game", value: "game" },
        { text: "Mode", value: "mode" },
        { text: "Difficulty", value: "difficulty" },
        { text: "Anzymus", value: "player1Rank" },
        { text: "Mickey", value: "player2Rank" },
        { text: "Gap", value: "gap" }
      ],
      items: [
        {
          game: "Aero Fighters 3 / Sonic Wings 3",
          mode: "Version 1.5",
          difficulty: "MVS",
          player1Rank: 5,
          player2Rank: 9,
          gap: 151
        }
      ]
    };
  },
  methods: {
    handleClick() {
      this.$router.push('/game');
    }
  }
};
</script>

<style scoped></style>
