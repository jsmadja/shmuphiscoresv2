<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 v-if="scores.length > 0">{{ scores[0].player.name }}'s Scores</h1>
        <h1 v-else>This player has no scores</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <shmup-table
          :items="scores"
          :headers="headers"
          :sort-by="['rank']"
          :sort-desc="[false]"
        >
          <template v-slot:item.game.cover="{ item }">
            <cover
              @click="goToGame(item)"
              :url="item.game.cover"
              :alt="item.game.title"
              width="50"
              :contain="true"
              class="ma-1"
            />
          </template>
          <template v-slot:item.game.title="{ item }">
            <span class="game-title" @click="goToGame(item)">{{
              item.game.title
            }}</span>
          </template>
          <template v-slot:item.platform.name="{ item }">
            <platform-button
              :name="item.platform ? item.platform.name : ''"
              @click="() => goToPlatform(item)"
            />
          </template>
          <template v-slot:item.rank="{ item }">
            {{ item.rank | formatRank }}
          </template>
          <template v-slot:item.createdAt="{ item }">
            {{ item.createdAt | formatDateFromNow }}
          </template>
          <template v-slot:item.value="{ item }">
            <span
              @click.self="() => goToScore(item)"
              v-if="item.mode && item.mode.scoreType === 'timer'"
              >{{ item.value | formatTime }}</span
            >
            <span @click.self="() => goToScore(item)" v-else>{{
              item.value | formatNumber
            }}</span>
          </template>
          <template v-slot:item.onecc="{ item }">
            <one-c-c-chip v-if="item.onecc" />
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon v-if="canEdit" small class="mr-2" @click="editScore(item)">
              mdi-pencil
            </v-icon>
          </template>
        </shmup-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Cover from "../atoms/Cover.vue";
import ShmupTable from "@/components/molecules/ShmupTable.vue";
import OneCCChip from "@/components/atoms/OneCCChip.vue";
import PlatformButton from "@/components/atoms/PlatformButton.vue";

export default Vue.extend({
  name: "PlayerTemplate",
  components: { Cover, ShmupTable, OneCCChip, PlatformButton },
  props: ["loading", "scores", "canEdit"],
  data() {
    return {
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
        this.canEdit ? { text: "Actions", value: "actions" } : undefined,
      ].filter(Boolean),
    };
  },
  methods: {
    goToGame(row) {
      this.$emit("goToGame", row.game);
    },
    goToPlatform(row) {
      this.$emit("goToPlatform", row.platform);
    },
    goToScore(row) {
      this.$emit("goToScore", row);
    },
    editScore(row) {
      this.$emit("goToEditScore", row);
    },
  },
});
</script>

<style lang="scss" scoped>
.game-title:hover {
  cursor: pointer;
}
</style>
