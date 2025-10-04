<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Compare Scores</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="players"
                  v-model="selectedPlayer1"
                  item-value="id"
                  item-text="name"
                  hide-no-data
                  hide-selected
                  hide-details
                  label="Player 1"
                  placeholder="Start typing to Search"
                  outlined
                  @change="() => $emit('selectPlayer1', this.selectedPlayer1)"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="players"
                  item-value="id"
                  item-text="name"
                  v-model="selectedPlayer2"
                  hide-no-data
                  hide-selected
                  hide-details
                  label="Player 2"
                  placeholder="Start typing to Search"
                  outlined
                  @change="() => $emit('selectPlayer2', this.selectedPlayer2)"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col xs12>
                <shmup-table
                  :headers="headers"
                  :items="versus"
                  :sort-by="['scoreGap']"
                  :sort-desc="[true]"
                  @click:row="(row) => $emit('goToGame', row)"
                  :loading="loading"
                >
                  <template v-slot:item.score1.rank="{ item }">
                    <span
                      :class="{
                        win: item.wonByPlayer1,
                        lose: !item.wonByPlayer1,
                      }"
                      >{{ item.score1.rank | formatRank }}</span
                    >
                  </template>
                  <template v-slot:item.score2.rank="{ item }">
                    <span
                      :class="{
                        win: !item.wonByPlayer1,
                        lose: item.wonByPlayer1,
                      }"
                      >{{ item.score2.rank | formatRank }}</span
                    >
                  </template>
                  <template v-slot:item.scoreGap="{ item }">
                    <span
                      :class="{
                        win: item.wonByPlayer1,
                        lose: !item.wonByPlayer1,
                      }"
                      >{{ item.scoreGap }}%</span
                    >
                  </template>
                </shmup-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShmupTable from "@/components/molecules/ShmupTable.vue";

export default defineComponent({
  name: "CompareScoresTemplate",
  props: ["players", "versus", "currentUserId", "loading"],
  components: { ShmupTable },
  data() {
    return {
      selectedPlayer1: null,
      selectedPlayer2: null,
      headers: [
        { text: "Game", value: "game.title" },
        { text: "Mode", value: "mode.name" },
        { text: "Difficulty", value: "difficulty.name" },
        { text: "Player 1", value: "score1.rank", align: "right" },
        { text: "Player 2", value: "score2.rank", align: "right" },
        { text: "Score Gap", value: "scoreGap", align: "right" },
      ],
    };
  },
  mounted() {
    this.selectedPlayer1 = this.currentUserId;
  },
});
</script>

<style scoped lang="scss">
.win {
  color: green;
}
.lose {
  color: red;
}
</style>
