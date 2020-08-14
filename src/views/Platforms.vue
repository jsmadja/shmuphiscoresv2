<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Platforms</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" xs="12" sm="12" md="12" lg="4">
        <v-card dark to="/platform">
          <div class="d-flex justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item"></v-card-title>
              <v-card-subtitle>9 games</v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img
                      aspect-ratio="1"
                :src="
                  `https://shmup-companion.firebaseapp.com/img/platforms/${item}.png`
                "
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Platforms",
  data: () => ({
    items: [
      "3DS",
      "AMIGA",
      "AMIGA 500",
      "AMSTRAD CPC",
      "ANDROID",
      "ARCADE",
      "ATARI ST",
      "C64",
      "DC",
      "DS",
      "FDS",
      "FM TOWNS",
      "GB",
      "GBA",
      "GC",
      "GG",
      "IOS",
      "MAME",
      "MD",
      "MD MINI",
      "MEGA CD",
      "MS",
      "MSX",
      "N64",
      "NES",
      "NG",
      "NGCD",
      "NGPC",
      "OUYA",
      "PC",
      "PC-88",
      "PC-98",
      "PCB",
      "PCE",
      "PCECD",
      "PS1",
      "PS2",
      "PS3",
      "PS4",
      "PSN",
      "PSP",
      "SAT",
      "SGX",
      "SMS",
      "SNES",
      "SWITCH",
      "TAITO G-NET",
      "VC",
      "VECTREX",
      "VITA",
      "WII",
      "WIIU",
      "WINDOWS PHONE",
      "WONDERSWAN",
      "X360",
      "X68000",
      "XBOX",
      "XONE",
      "ZX SPECTRUM"
    ]
  })
};
</script>

<style scoped></style>
