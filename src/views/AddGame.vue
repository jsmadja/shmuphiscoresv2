<template>
  <v-container>
    <v-layout>
      <h1>Add Game</h1>
    </v-layout>
    <v-layout row>
      <v-col
              cols="12"
              md="6">
        <v-form>
          <v-container>
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
                    'ZX SPECTRUM'
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
          </v-container>
        </v-form>
      </v-col>
      <v-col>
        <v-container>
          <v-row>
            TEMPLATE PREVIEW
          </v-row>
        </v-container>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SearchGame",
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
        platforms: []
      }
    };
  }
};
</script>
