<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>Community last scores</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(score, i) in lastScores" :key="i" cols="12" sm="6" lg="6">
        <v-card tile>
          <v-card-text>
            <v-row dense>
              <v-col cols="12" lg="3">
                <Cover
                  :url="score.game.cover"
                  height="177"
                  :contain="false"
                  class="elevation-5"
                />
              </v-col>
              <v-col cols="12" lg="9" class="pl-2">
                <v-row dense>
                  <v-col cols="12"
                    ><span class="title">{{ score.game.title }}</span></v-col
                  >
                  <v-col cols="12" lg="12">
                    <span class="score"
                      >{{ score.value | formatNumber }} pts</span
                    >
                  </v-col>
                  <v-col>
                    <span class="category">PLAYER</span>
                    <span class="category-value">{{ score.player.name }}</span>
                  </v-col>
                  <v-col>
                    <span class="category">RANK</span>
                    <span class="category-value">{{
                      score.rank | formatRank
                    }}</span>
                  </v-col>
                  <v-col>
                    <span class="category">PLATFORM</span>
                    <span class="category-value">{{
                      score.platform.name
                    }}</span>
                  </v-col>
                  <v-col v-if="score.difficulty">
                    <span class="category">DIFFICULTY</span>
                    <span class="category-value">{{
                      score.difficulty.name
                    }}</span>
                  </v-col>
                  <v-col v-if="score.mode">
                    <span class="category">MODE</span>
                    <span class="category-value">{{ score.mode.name }}</span>
                  </v-col>
                  <v-col v-if="score.ship">
                    <span class="category">SHIP</span>
                    <span class="category-value">{{ score.ship.name }}</span>
                  </v-col>
                  <v-col v-if="score.stage">
                    <span class="category">STAGE</span>
                    <span class="category-value">{{ score.stage.name }}</span>
                  </v-col>
                  <v-col cols="12">
                    <v-chip x-small outlined class="mr-1 pl-1 pr-1"
                      ><v-icon small>mdi-camera</v-icon></v-chip
                    >
                    <v-chip
                      x-small
                      class="pl-1 pr-1"
                      dark
                      tile
                      target="_blank"
                      color="red"
                    >
                      <v-icon x-small>mdi-play</v-icon>
                    </v-chip>
                    <v-chip
                      class="ml-1 pl-2 pr-2"
                      x-small
                      :href="score.inp"
                      target="_blank"
                    >
                      INP
                    </v-chip>
                  </v-col>
                  <v-col cols="12" v-if="i < 6">
                    <v-btn x-small tile dark color="orange" class="mr-1">
                      <v-icon left small>mdi-plus</v-icon>
                      NEW
                    </v-btn>
                    <v-btn x-small tile depressed>
                      <v-icon left small>mdi-pencil</v-icon>
                      EDIT
                    </v-btn>
                    <span class="float-right">{{
                      score.createdSinceInFrench
                    }}</span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Cover from "@/components/atoms/Cover.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "HelloWorld",
  components: { Cover },
  created() {
    this.$store.dispatch("fetchLastScores");
  },
  computed: {
    ...mapGetters(["lastScores"]),
  },
});
</script>
<style lang="scss" scoped>
.title {
  font-size: 1.8rem !important;
  line-height: 1.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  display: block;
}

.score {
  font-size: 1.3rem;
  font-weight: bold;
  color: orange;
}

.category {
  font-size: 0.7rem;
  line-height: 0.7rem;
  font-weight: normal;
  display: block;
  padding-bottom: 0.2rem;
}

.category-value {
  font-weight: bold;
  white-space: nowrap;
  font-size: 0.9rem;
  line-height: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  display: block;
}
</style>
