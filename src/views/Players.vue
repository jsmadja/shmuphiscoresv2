<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Players</h1>
      </v-col>
    </v-row>
    <!-- Rankings -->
    <v-row>
      <v-col xs12 id="v15original">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="players"
            :search="search"
            @click:row="handleClick"
          ></v-data-table>
        </v-card>
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
        { text: "Player", value: "playerName" },
        { text: "1st", value: "firstRankCount" },
        { text: "2nd", value: "secondRankCount" },
        { text: "3rd", value: "thirdRankCount" },
        { text: "1CC", value: "oneccCount" },
        { text: "Scores", value: "scoreCount" },
      ],
      players: [
        {
          playerName: "anzymus",
          firstRankCount: 66,
          secondRankCount: 66,
          thirdRankCount: 66,
          oneccCount: 66,
          scoreCount: 658,
        },
        {
          playerName: "yace",
          firstRankCount: 13,
          secondRankCount: 13,
          thirdRankCount: 13,
          oneccCount: 13,
          scoreCount: 129,
        },
        {
          playerName: "-S.L-",
          firstRankCount: 67,
          secondRankCount: 67,
          thirdRankCount: 67,
          oneccCount: 67,
          scoreCount: 670,
        },
        {
          playerName: "YannHuitNeuf",
          firstRankCount: 97,
          secondRankCount: 97,
          thirdRankCount: 97,
          oneccCount: 97,
          scoreCount: 965,
        },
        {
          playerName: "niluge",
          firstRankCount: 82,
          secondRankCount: 82,
          thirdRankCount: 82,
          oneccCount: 82,
          scoreCount: 815,
        },
        {
          playerName: "tam",
          firstRankCount: 18,
          secondRankCount: 18,
          thirdRankCount: 18,
          oneccCount: 18,
          scoreCount: 177,
        },
        {
          playerName: "kawaijb",
          firstRankCount: 45,
          secondRankCount: 45,
          thirdRankCount: 45,
          oneccCount: 45,
          scoreCount: 441,
        },
        {
          playerName: "Aliquantic",
          firstRankCount: 68,
          secondRankCount: 68,
          thirdRankCount: 68,
          oneccCount: 68,
          scoreCount: 674,
        },
        {
          playerName: "Sezi",
          firstRankCount: 5,
          secondRankCount: 5,
          thirdRankCount: 5,
          oneccCount: 5,
          scoreCount: 44,
        },
        {
          playerName: "Zapbranisac",
          firstRankCount: 20,
          secondRankCount: 20,
          thirdRankCount: 20,
          oneccCount: 20,
          scoreCount: 199,
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.$router.push("/player");
    },
  },
};
</script>

<style lang="scss" scoped>
.ranking-name {
  cursor: pointer;
  &.selected {
    border-left: solid 3px orange;
    padding-left: 5px;
  }
}
</style>
