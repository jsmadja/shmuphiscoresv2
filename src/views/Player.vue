<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ scores[0].player.name }}'s Scores</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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
          <v-card-text>
            <v-data-table
              :headers="computedHeaders"
              :items="scores"
              :search="search"
              @click:row.self="goToGame"
              :loading="loading"
              :sort-by="['rank']"
              :sort-desc="[false]"
              :dense="$vuetify.breakpoint.smAndDown"
              mobile-breakpoint="0"
            >
              <template v-slot:item.game.cover="{ item }">
                <cover
                  :url="item.game.cover"
                  :alt="item.game.title"
                  width="50"
                  :contain="true"
                  class="ma-1"
                />
              </template>
              <template v-slot:item.game.title="{ item }">
                <span class="game-title">{{ item.game.title }}</span>
              </template>
              <template v-slot:item.platform.name="{ item }">
                <v-btn
                  x-small
                  dark
                  depressed
                  color="green"
                  tile
                  class="pl-1 pr-1"
                  @click="() => goToPlatform(item)"
                  >{{ item.platform ? item.platform.name : "" }}</v-btn
                >
              </template>
              <template v-slot:item.rank="{ item }">
                {{ item.rank | formatRank }}
              </template>
              <template v-slot:item.createdAt="{ item }">
                {{ item.createdAt | formatDateFromNow }}
              </template>
              <template v-slot:item.value="{ item }">
                <span v-if="item.mode && item.mode.scoreType === 'timer'">{{
                  item.value | formatTime
                }}</span>
                <span v-else>{{ item.value | formatNumber }}</span>
              </template>
              <template v-slot:item.onecc="{ item }">
                <v-chip
                  class="ml-1 pl-2 pr-2"
                  v-if="item.onecc"
                  dark
                  x-small
                  tile
                  depressed
                  color="orange"
                  >1CC</v-chip
                >
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { getScoresByPlayer } from "@/repository";
import Vue from "vue";
import Cover from "@/components/atoms/Cover.vue";

export default Vue.extend({
  name: "Players",
  components: { Cover },
  async created() {
    this.loading = true;
    this.scores = await getScoresByPlayer(this.$route.params.id);
    this.loading = false;
  },
  data() {
    return {
      loading: true,
      scores: [],
      search: "",
      headers: [
        { text: "", value: "game.cover", hide: "smAndDown" },
        { text: "Game", value: "game.title" },
        { text: "Mode", value: "mode.name", hide: "smAndDown" },
        { text: "Difficulty", value: "difficulty.name", hide: "smAndDown" },
        {
          text: "Stage",
          value: "stage.name",
          align: "right",
          hide: "smAndDown",
        },
        { text: "Score", value: "value", align: "right" },
        { text: "Rank", value: "rank", align: "right" },
        { text: "1CC", value: "onecc", hide: "smAndDown" },
        { text: "Platform", value: "platform.name", hide: "smAndDown" },
        { text: "Date", value: "createdAt", hide: "smAndDown" },
      ],
    };
  },
  computed: {
    computedHeaders() {
      return (this as any).headers.filter(
        (h: any) => !h.hide || !this.$vuetify.breakpoint[h.hide]
      );
    },
  },
  methods: {
    goToGame(row) {
      this.$router.push(`/game/${row.game.id}`);
    },
    goToPlatform(row) {
      this.$router.push(`/platform/${row.platform.name}`);
    },
  },
});
</script>

<style lang="scss" scoped>
.game-title:hover {
  cursor: pointer;
}
</style>
