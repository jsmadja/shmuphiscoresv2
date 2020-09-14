<template>
  <v-card tile>
    <v-card-text>
      <v-row dense>
        <v-col cols="12" lg="3">
          <Cover
            @click="$emit('goToGame', score.game)"
            :url="score.game.cover"
            height="177"
            :contain="false"
            class="elevation-5 clickable"
          />
        </v-col>
        <v-col cols="12" lg="9" class="pl-2">
          <v-row dense>
            <v-col cols="12"
              ><span class="title" @click="$emit('goToGame', score.game)">{{
                score.game.title
              }}</span></v-col
            >
            <v-col cols="12" lg="12">
              <span
                class="score"
                @click="$emit('goToScore', score)"
                v-if="score.mode && score.mode.scoreType === 'timer'"
                >{{ score.value | formatTime }}</span
              >
              <span class="score" @click="$emit('goToScore', score)" v-else
                >{{ score.value | formatNumber }} pts</span
              >
            </v-col>
            <v-col v-if="showPlayer">
              <span class="category">PLAYER</span>
              <span
                class="category-value clickable"
                @click="$emit('goToPlayer', score.player)"
                >{{ score.player.name }}</span
              >
            </v-col>
            <v-col>
              <span class="category">RANK</span>
              <span class="category-value">{{ score.rank | formatRank }}</span>
            </v-col>
            <v-col>
              <span class="category">PLATFORM</span>
              <span
                class="category-value clickable"
                @click="$emit('goToPlatform', score.platform.name)"
                >{{ score.platform.name }}</span
              >
            </v-col>
            <v-col v-if="score.difficulty">
              <span class="category">DIFFICULTY</span>
              <span class="category-value">{{ score.difficulty.name }}</span>
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
              <v-tooltip
                v-if="score.photo"
                top
                content-class="photo-tooltip-class"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    x-small
                    outlined
                    class="mr-1 pl-1 pr-1"
                    v-if="score.photo"
                    v-bind="attrs"
                    v-on="on"
                    ><v-icon small>mdi-camera</v-icon></v-chip
                  >
                </template>
                <v-img :src="score.photo" max-width="250" />
              </v-tooltip>

              <v-chip
                x-small
                class="pl-1 pr-1"
                dark
                tile
                target="_blank"
                color="red"
                v-if="score.replay"
                :href="score.replay"
              >
                <v-icon x-small>mdi-play</v-icon>
              </v-chip>
              <v-chip
                class="ml-1 pl-2 pr-2"
                x-small
                :href="score.inp"
                target="_blank"
                v-if="score.inp"
              >
                INP
              </v-chip>
              <v-chip
                class="ml-1 pl-2 pr-2"
                v-if="score.onecc"
                dark
                x-small
                tile
                depressed
                color="orange"
                >1CC</v-chip
              >
            </v-col>
            <v-col cols="12">
              <v-btn
                v-if="showAddButton"
                x-small
                tile
                dark
                color="orange"
                class="pl-0 mr-1"
                @click="$emit('addScore', score)"
              >
                <v-icon left small class="ml-0 mr-0">mdi-plus</v-icon>
                SCORE
              </v-btn>
              <v-btn
                v-if="showEditButton"
                x-small
                tile
                class="pl-0 mr-1"
                @click="$emit('editScore', score)"
              >
                <v-icon left small class="ml-0 mr-0">mdi-pencil</v-icon>
                EDIT
              </v-btn>
              <span class="float-right">{{ since(score.createdAt) }}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Cover from "../atoms/Cover.vue";
import moment from "moment";

export default Vue.extend({
  name: "ScoreCard",
  components: { Cover },
  props: {
    score: Object,
    showAddButton: {
      type: Boolean,
      default: true,
    },
    showEditButton: {
      type: Boolean,
      default: true,
    },
    showPlayer: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    since(date) {
      return moment(date).fromNow();
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../../custom.scss";
.clickable {
  cursor: pointer;
  &:hover {
    color: $primary;
  }
}

.title {
  font-size: 1.8rem !important;
  line-height: 2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  display: block;
  cursor: pointer;
}

.score {
  font-size: 1.3rem;
  font-weight: bold;
  color: orange;
  cursor: pointer;
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
