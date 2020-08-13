<template>
  <v-container>
    <v-layout>
      <v-row>
        <h1>Compare Scores</h1>
      </v-row>
    </v-layout>
    <v-layout>
      <v-row>
        <v-autocomplete
          :items="['Anzymus']"
          color="white"
          hide-no-data
          hide-selected
          label="Player 1"
          placeholder="Start typing to Search"
          outlined
        ></v-autocomplete>
        <v-autocomplete
          :items="['Mickey']"
          color="white"
          hide-no-data
          hide-selected
          label="Player 2"
          placeholder="Start typing to Search"
          outlined
        ></v-autocomplete>
      </v-row>
    </v-layout>
    <v-layout>
      <v-row>
        <v-flex xs12>
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
          ></v-data-table>
        </v-flex>
      </v-row>
    </v-layout>
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
  }
};
</script>

<style scoped></style>
