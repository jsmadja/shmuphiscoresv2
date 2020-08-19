<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Add Game</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="6">
        <v-form>
          <v-row>
            <v-col>
              <v-text-field
                v-model="form.title"
                label="Title"
                required
                outlined
              ></v-text-field>
              <v-text-field
                v-model="form.cover"
                label="Hosted Game Cover"
                required
                outlined
              ></v-text-field>
              <v-text-field
                v-model="form.thread"
                label="Shmup Forum Thread link"
                required
                outlined
              ></v-text-field>
              <v-select
                outlined
                :items="[
                  '3DS',
                  'AMIGA',
                  'AMIGA 500',
                  'AMSTRAD CPC',
                  'ANDROID',
                  'ARCADE',
                  'ATARI ST',
                  'C64',
                  'DC',
                  'DS',
                  'FDS',
                  'FM TOWNS',
                  'GB',
                  'GBA',
                  'GC',
                  'GG',
                  'IOS',
                  'MAME',
                  'MD',
                  'MD MINI',
                  'MEGA CD',
                  'MS',
                  'MSX',
                  'N64',
                  'NES',
                  'NG',
                  'NGCD',
                  'NGPC',
                  'OUYA',
                  'PC',
                  'PC-88',
                  'PC-98',
                  'PCB',
                  'PCE',
                  'PCECD',
                  'PS1',
                  'PS2',
                  'PS3',
                  'PS4',
                  'PSN',
                  'PSP',
                  'SAT',
                  'SGX',
                  'SMS',
                  'SNES',
                  'SWITCH',
                  'TAITO G-NET',
                  'VC',
                  'VECTREX',
                  'VITA',
                  'WII',
                  'WIIU',
                  'WINDOWS PHONE',
                  'WONDERSWAN',
                  'X360',
                  'X68000',
                  'XBOX',
                  'XONE',
                  'ZX SPECTRUM',
                ]"
                multiple
                label="Platforms"
              ></v-select>
              <v-textarea
                name="difficulties"
                label="Difficultés"
                outlined
                hint="Mettre une difficulté par ligne"
              ></v-textarea>
              <v-textarea
                name="modes"
                label="Modes"
                outlined
                hint="Mettre un mode par ligne"
              ></v-textarea>
              <v-textarea
                name="stages"
                label="Stages"
                outlined
                hint="Mettre un stage par ligne"
              ></v-textarea>
              <v-textarea
                name="ships"
                label="Vaisseaux"
                outlined
                hint="Mettre un vaisseau par ligne"
              ></v-textarea>
              <v-btn color="success" class="mr-4">
                Validate
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col cols="12" md="6" lg="6">
        <v-row>
          <v-col class="pt-0">
            <v-row>
              <v-col>
                <h1>Mushihimesama Futari</h1>
              </v-col>
            </v-row>
            <!-- Infos -->
            <v-row>
              <v-col cols="12" sm="12" md="4" lg="4">
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
                  </v-col>
                </v-row>
              </v-col>
              <!-- Rankings -->
              <v-col cols="12" sm="12" md="8" lg="8">
                <v-row>
                  <v-col cols="12" id="v15original">
                    <v-card>
                      <v-card-title>
                        Version 1.5 - Original
                      </v-card-title>
                      <v-data-table
                        :headers="headers"
                        :items="desserts"
                        hide-default-footer
                      ></v-data-table>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" id="v15maniac">
                    <v-card>
                      <v-card-title>
                        Version 1.5 - Maniac
                      </v-card-title>
                      <v-data-table
                        :headers="headers"
                        :items="desserts"
                        hide-default-footer
                      ></v-data-table>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AddGame",
  components: {},
  data() {
    return {
      form: {
        title: "",
        cover: "",
        ships: "",
        stages: "",
        modes: "",
        difficulties: "",
        thread: "",
        platforms: [],
      },

      selectedRanking: "",
      search: "",
      headers: [
        { text: "Rank", value: "rank" },
        { text: "Player", value: "playerName" },
        { text: "Score", value: "value" },
        { text: "Stage", value: "stageName" },
      ],
      desserts: [
        {
          id: 4,
          value: 425027421,
          playerName: "Rechiku",
          playerId: 146,
          rank: 1,
          stageName: "ALL",
        },
        {
          id: 5,
          value: 375804585,
          playerName: "kawaijb",
          playerId: 12,
          rank: 2,
          stageName: "ALL",
        },
        {
          id: 8894,
          value: 351746382,
          playerName: "Undef",
          playerId: 150,
          rank: 3,
          stageName: "ALL",
        },
      ],
    };
  },
};
</script>
