<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Mushihimesama Futari</h1>
      </v-col>
    </v-row>
    <!-- Ranking Menu -->
    <v-row class="d-none d-sm-flex">
      <v-navigation-drawer
        clipped
        fixed
        right
        class="mt-14"
        permanent
        expand-on-hover
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Rankings
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <v-list-item-title
              class="ranking-name"
              :class="{ selected: isActive('#v15original') }"
              @click="
                selectedRanking = '#v15original';
                $vuetify.goTo('#v15original');
              "
            >
              Version 1.5 - Original
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              class="ranking-name"
              :class="{ selected: isActive('#v15maniac') }"
              @click="
                selectedRanking = '#v15maniac';
                $vuetify.goTo('#v15maniac');
              "
              >Version 1.5 - Maniac
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-row>
    <!-- Infos -->
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="2">
        <v-row>
          <v-col cols="12">
            <v-img src="https://hiscores.shmup.com/covers/2.jpg" />
          </v-col>
          <v-col>
            <v-chip class="ma-2" color="green" text-color="white">
              <v-avatar left class="green darken-4">
                3
              </v-avatar>
              Platforms
            </v-chip>
            <v-chip class="ma-2" color="amber" text-color="white">
              <v-avatar left class="amber darken-4">
                4
              </v-avatar>
              Difficulties
            </v-chip>
            <v-chip class="ma-2" color="grey" text-color="white">
              <v-avatar left class="grey darken-4">
                4
              </v-avatar>
              Modes
            </v-chip>
          </v-col>
          <v-col>
            <v-btn tile small class="mr-1 mb-1">Read Forum</v-btn>
            <v-btn tile small class="mr-1 mb-1">Ranking Picture</v-btn>
            <v-btn tile small class="mr-1 mb-1">Import Scores</v-btn>
            <v-btn tile small class="mr-1 mb-1">Create Event</v-btn>
            <v-btn tile small>Edit</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <!-- Rankings -->
      <v-col cols="12" sm="12" md="8" lg="10">
        <v-row>
          <v-col cols="12" id="v15original">
            <v-card>
              <v-card-title>
                Version 1.5 - Original
                <v-spacer></v-spacer>
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
                :items="desserts"
                :search="search"
                @click:row="handleClick"
              ></v-data-table>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" id="v15maniac">
            <v-card>
              <v-card-title>
                Version 1.5 - Maniac
                <v-spacer></v-spacer>
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
                :items="desserts"
                :search="search"
                @click:row="handleClick"
              ></v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Game",
  components: {},
  data() {
    return {
      selectedRanking: "",
      search: "",
      headers: [
        { text: "Rank", value: "rank" },
        { text: "Player", value: "playerName" },
        { text: "Score", value: "value" },
        { text: "Stage", value: "stageName" },
        { text: "Comment", value: "comment" }
      ],
      desserts: [
        {
          id: 4,
          value: 425027421,
          playerName: "Rechiku",
          playerId: 146,
          rank: 1,
          stageName: "ALL",
          comment: "All(Lx4) Reco Normal",
          onecc: true
        },
        {
          id: 5,
          value: 375804585,
          playerName: "kawaijb",
          playerId: 12,
          rank: 2,
          stageName: "ALL",
          comment: "Reco normal ALL (Lx2)",
          onecc: true
        },
        {
          id: 8894,
          value: 351746382,
          playerName: "Undef",
          playerId: 150,
          rank: 3,
          stageName: "ALL",
          comment: "Reco Normale",
          onecc: true
        },
        {
          id: 6,
          value: 326813672,
          playerName: "HUU",
          playerId: 354,
          rank: 4,
          stageName: "ALL",
          comment: "Reco Normal",
          onecc: true
        },
        {
          id: 7,
          value: 277218745,
          playerName: "Aliquantic",
          playerId: 14,
          rank: 5,
          stageName: "5",
          comment: "Reco normal stage 5 Boss",
          onecc: false
        },
        {
          id: 8,
          value: 276836578,
          playerName: "KAB",
          playerId: 161,
          rank: 6,
          stageName: "ALL",
          comment: "Palm normal",
          onecc: true
        },
        {
          id: 9,
          value: 275250788,
          playerName: "Sezi",
          playerId: 16,
          rank: 7,
          stageName: "5",
          comment: "palm abnormal stage 5boss",
          onecc: false
        },
        {
          id: 10,
          value: 257262671,
          playerName: "neo90",
          playerId: 284,
          rank: 8,
          stageName: "ALL",
          comment: "Reco normal",
          onecc: true
        },
        {
          id: 11,
          value: 241314692,
          playerName: "Y'om",
          playerId: 171,
          rank: 9,
          stageName: "ALL",
          comment: "Reco Normal ALL(lx1)",
          onecc: true
        },
        {
          id: 14494,
          value: 241163346,
          playerName: "anzymus",
          playerId: 1,
          rank: 10,
          stageName: "ALL",
          comment: "",
          onecc: true
        },
        {
          id: 12,
          value: 231207990,
          playerName: "E.T.E",
          playerId: 586,
          rank: 11,
          stageName: "ALL",
          comment: "Palm Abnormal",
          onecc: true
        },
        {
          id: 4762,
          value: 230076101,
          playerName: "Zapbranisac",
          playerId: 21,
          rank: 12,
          stageName: "ALL",
          comment: "Reco normal",
          onecc: true
        },
        {
          id: 13,
          value: 226914045,
          playerName: "back",
          playerId: 157,
          rank: 13,
          stageName: "ALL",
          comment: "Reco normal",
          onecc: true
        },
        {
          id: 9139,
          value: 224546201,
          playerName: "otaku",
          playerId: 67,
          rank: 14,
          stageName: "5 BOSS",
          comment: "",
          onecc: false
        },
        {
          id: 9012,
          value: 219068718,
          playerName: "danmaker",
          playerId: 125,
          rank: 15,
          stageName: "5 BOSS",
          comment: "Reco, normal",
          onecc: false
        },
        {
          id: 9901,
          value: 218461085,
          playerName: "thetricker24",
          playerId: 781,
          rank: 16,
          stageName: "ALL",
          comment: "Reco normal",
          onecc: true
        },
        {
          id: 15,
          value: 217488950,
          playerName: "buddy",
          playerId: 22,
          rank: 17,
          stageName: "5",
          comment: "Reco Normal  Boss",
          onecc: false
        },
        {
          id: 16,
          value: 209028910,
          playerName: "skateinmars",
          playerId: 23,
          rank: 18,
          stageName: "ALL",
          comment: "Reco normal",
          onecc: true
        },
        {
          id: 17,
          value: 208408686,
          playerName: "Vincere",
          playerId: 24,
          rank: 19,
          stageName: "ALL",
          comment: "Palm Abnormal ALL (Lx2)",
          onecc: true
        },
        {
          id: 18,
          value: 205172869,
          playerName: "David333",
          playerId: 25,
          rank: 20,
          stageName: "ALL",
          comment: "Reco normal",
          onecc: true
        },
        {
          id: 19,
          value: 195175742,
          playerName: "Squidhead",
          playerId: 26,
          rank: 21,
          stageName: "5",
          comment: "Reco normal Boss",
          onecc: false
        },
        {
          id: 20,
          value: 191145742,
          playerName: "MLeJazz",
          playerId: 27,
          rank: 22,
          stageName: "5",
          comment: "Reco normal",
          onecc: false
        },
        {
          id: 21,
          value: 187898361,
          playerName: "Erhune",
          playerId: 28,
          rank: 23,
          stageName: "ALL",
          comment: "Reco normal",
          onecc: true
        },
        {
          id: 22,
          value: 186838385,
          playerName: "FEB",
          playerId: 29,
          rank: 24,
          stageName: "5",
          comment: "Reco Normal  stage 5 boss",
          onecc: false
        },
        {
          id: 5133,
          value: 185248619,
          playerName: "Yami9999",
          playerId: 269,
          rank: 25,
          stageName: "ALL",
          comment: "Reco Normal",
          onecc: true
        },
        {
          id: 23,
          value: 180705508,
          playerName: "Shadow gallery",
          playerId: 30,
          rank: 26,
          stageName: "5",
          comment: "Reco normal",
          onecc: false
        },
        {
          id: 24,
          value: 176806114,
          playerName: "Radegou",
          playerId: 31,
          rank: 27,
          stageName: "5",
          comment: "palm abnormal",
          onecc: false
        },
        {
          id: 8757,
          value: 171004726,
          playerName: "Shardik",
          playerId: 52,
          rank: 28,
          stageName: "5",
          comment: "Reco / Normal",
          onecc: false
        },
        {
          id: 25,
          value: 166949057,
          playerName: "Gatts",
          playerId: 32,
          rank: 29,
          stageName: "ALL",
          comment: "Reco Normal",
          onecc: true
        },
        {
          id: 27,
          value: 162532434,
          playerName: "Vanal",
          playerId: 33,
          rank: 30,
          stageName: "5",
          comment: "Reco Normal Boss",
          onecc: false
        },
        {
          id: 28,
          value: 159861095,
          playerName: "Colas",
          playerId: 34,
          rank: 31,
          stageName: "5",
          comment: "Palm abnormal",
          onecc: false
        },
        {
          id: 29,
          value: 145344959,
          playerName: "Dan",
          playerId: 35,
          rank: 32,
          stageName: "ALL",
          comment: "Palm Abnormal",
          onecc: true
        },
        {
          id: 30,
          value: 137252757,
          playerName: "GYO",
          playerId: 36,
          rank: 33,
          stageName: "5",
          comment: "palm normal",
          onecc: false
        },
        {
          id: 4785,
          value: 134832851,
          playerName: "Lyv",
          playerId: 141,
          rank: 34,
          stageName: "ALL",
          comment: "Palm abnormal",
          onecc: true
        },
        {
          id: 31,
          value: 127733870,
          playerName: "Gabranth",
          playerId: 37,
          rank: 35,
          stageName: "5",
          comment: "palm abnormal",
          onecc: false
        },
        {
          id: 32,
          value: 124236290,
          playerName: "Dias Paddle",
          playerId: 38,
          rank: 36,
          stageName: "5",
          comment: "Reco",
          onecc: false
        },
        {
          id: 8874,
          value: 123493539,
          playerName: "Aldherrian",
          playerId: 728,
          rank: 37,
          stageName: "5",
          comment: "Palm Abnormal",
          onecc: false
        },
        {
          id: 33,
          value: 117715931,
          playerName: "Vince2",
          playerId: 39,
          rank: 38,
          stageName: "5",
          comment: "Palm abnormal",
          onecc: false
        },
        {
          id: 15432,
          value: 117458292,
          playerName: "GameOver",
          playerId: 1649,
          rank: 39,
          stageName: "5",
          comment: "",
          onecc: false
        },
        {
          id: 34,
          value: 112531595,
          playerName: "Fairyliar",
          playerId: 40,
          rank: 40,
          stageName: "4",
          comment: "reco normal",
          onecc: false
        },
        {
          id: 35,
          value: 110302226,
          playerName: "Agalnarok",
          playerId: 41,
          rank: 41,
          stageName: "4",
          comment: "Palm Abnormal",
          onecc: false
        },
        {
          id: 36,
          value: 109548225,
          playerName: "Mickey",
          playerId: 42,
          rank: 42,
          stageName: "5",
          comment: "Reco Normal",
          onecc: false
        },
        {
          id: 13495,
          value: 101516851,
          playerName: "mutmut02",
          playerId: 1462,
          rank: 43,
          stageName: "ALL",
          comment: "Recco Abnormal",
          onecc: true
        },
        {
          id: 37,
          value: 99730296,
          playerName: "coven",
          playerId: 163,
          rank: 44,
          stageName: "5",
          comment: "Palm abnormal",
          onecc: false
        },
        {
          id: 38,
          value: 94315348,
          playerName: "dodonpasim",
          playerId: 44,
          rank: 45,
          stageName: "4",
          comment: "Reco normal",
          onecc: false
        },
        {
          id: 39,
          value: 94159914,
          playerName: "snkpowa",
          playerId: 45,
          rank: 46,
          stageName: "5",
          comment: "Palm Normal",
          onecc: false
        },
        {
          id: 40,
          value: 92606069,
          playerName: "ixi",
          playerId: 46,
          rank: 47,
          stageName: "5",
          comment: "Palm Abnormal",
          onecc: false
        },
        {
          id: 41,
          value: 89396631,
          playerName: "ALFARABI",
          playerId: 47,
          rank: 48,
          stageName: "5",
          comment: "Reco Normal",
          onecc: false
        },
        {
          id: 42,
          value: 82608434,
          playerName: "Bestio",
          playerId: 48,
          rank: 49,
          stageName: "4",
          comment: "normal Reco",
          onecc: false
        },
        {
          id: 43,
          value: 80410775,
          playerName: "Kibo",
          playerId: 49,
          rank: 50,
          stageName: "4",
          comment: "palm normal",
          onecc: false
        },
        {
          id: 15875,
          value: 79961270,
          playerName: "Crashdown",
          playerId: 236,
          rank: 51,
          stageName: "4",
          comment: "Reco Normal",
          onecc: false
        },
        {
          id: 44,
          value: 77708224,
          playerName: "Sulf'",
          playerId: 50,
          rank: 52,
          stageName: "4",
          comment: "Reco normal",
          onecc: false
        },
        {
          id: 45,
          value: 74909634,
          playerName: "Prométherion",
          playerId: 51,
          rank: 53,
          stageName: "4",
          comment: "Palm  Boss",
          onecc: false
        },
        {
          id: 47,
          value: 73272481,
          playerName: "Jehuda",
          playerId: 53,
          rank: 54,
          stageName: "3",
          comment: "Reco normal  Boss",
          onecc: false
        },
        {
          id: 48,
          value: 71190653,
          playerName: "yace",
          playerId: 6,
          rank: 55,
          stageName: "4",
          comment: "Palm  Boss",
          onecc: false
        },
        {
          id: 49,
          value: 67483163,
          playerName: "BAD",
          playerId: 54,
          rank: 56,
          stageName: "4",
          comment: "Reco Normal",
          onecc: false
        },
        {
          id: 50,
          value: 66968182,
          playerName: "Arsene",
          playerId: 55,
          rank: 57,
          stageName: "3",
          comment: "Palm normal Boss",
          onecc: false
        },
        {
          id: 51,
          value: 64347047,
          playerName: "Johnny_Crypt",
          playerId: 56,
          rank: 58,
          stageName: "4",
          comment: "Palm normal",
          onecc: false
        },
        {
          id: 52,
          value: 64134632,
          playerName: "Akaimakai",
          playerId: 57,
          rank: 59,
          stageName: "4",
          comment: "Recco normal",
          onecc: false
        },
        {
          id: 16665,
          value: 58606636,
          playerName: "Prickly Angler",
          playerId: 1520,
          rank: 60,
          stageName: "4",
          comment: "Palm Abnormal",
          onecc: false
        },
        {
          id: 53,
          value: 58048852,
          playerName: "Drunkenietzschigo",
          playerId: 58,
          rank: 61,
          stageName: "4",
          comment: "Reco Normal",
          onecc: false
        },
        {
          id: 54,
          value: 55153250,
          playerName: "Lone Rider",
          playerId: 94,
          rank: 62,
          stageName: "3",
          comment: "Reco normal  Boss",
          onecc: false
        },
        {
          id: 55,
          value: 49692952,
          playerName: "GaMeS",
          playerId: 60,
          rank: 63,
          stageName: "4",
          comment: "palm abnormal",
          onecc: false
        },
        {
          id: 12137,
          value: 43069442,
          playerName: "Alptraum",
          playerId: 169,
          rank: 64,
          stageName: "3 BOSS",
          comment: "",
          onecc: false
        },
        {
          id: 14098,
          value: 16397006,
          playerName: "rentonl",
          playerId: 1571,
          rank: 65,
          stageName: "3",
          comment: "",
          onecc: false
        },
        {
          id: 3903,
          value: 14622560,
          playerName: "banjo",
          playerId: 468,
          rank: 66,
          stageName: "2",
          comment: "reco\r\n",
          onecc: false
        }
      ]
    };
  },
  methods: {
    isActive(ranking) {
      return this.selectedRanking === ranking;
    },
    handleClick() {
      this.$router.push('/player');
    }
  }
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
