<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Mickey</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="scores"
          :search="search"
          @click:row="handleClick"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Players",
  components: {},
  data() {
    return {
      search: "",
      headers: [
        { text: "Game", value: "game" },
        { text: "Mode", value: "mode" },
        { text: "Difficulty", value: "difficulty" },
        { text: "Stage", value: "stage" },
        { text: "Score", value: "score" },
        { text: "Rank", value: "rank" },
        { text: "1CC", value: "onecc" },
        { text: "Tier", value: "tier" },
        { text: "Platform", value: "platform" }
      ],
      scores: [
        {
          score: 216028846,
          game: "Espgaluda II",
          stage: "3 BOSS",
          rank: "1st",
          tier: "Top",
          platform: "PCB"
        },
        {
          score: 858200,
          game: "Darius Twin",
          difficulty: "HARD",
          stage: "ALL",
          rank: "3rd",
          tier: "Top",
          platform: "SNES"
        },
        {
          score: 35130488,
          game: "Akai Katana",
          mode: "Slash",
          stage: "5",
          rank: "5th",
          tier: "Middle",
          platform: "X360"
        },
        {
          score: 1013570,
          game: "Darius 2",
          onecc: "1CC",
          stage: "2-1",
          rank: "5th",
          tier: "Low",
          platform: "MD"
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

<style lang="scss" scoped></style>
