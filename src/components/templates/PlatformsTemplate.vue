<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Platforms</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12>
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
              hide-default-footer
              :headers="computedHeaders"
              :items="platformRows"
              :search="search"
              :dense="$vuetify.breakpoint.smAndDown"
              :sort-by="['title']"
              :sort-desc="[false]"
              @click:row="handleClick"
              mobile-breakpoint="0"
              :loading="platforms.length === 0"
              :footer-props="{
                disableItemsPerPage: true,
                itemsPerPageOptions: [-1],
              }"
            >
              <template v-slot:item.games="{ item }">
                <div class="text-end">{{ item.games }} games</div>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { PlatformWithGameCount } from "@/models/platforms.ts";

const platformNames = {
  PCE: "NEC PC Engine",
  "3DS": "Nintendo 3DS",
  Amiga: "Commodore Amiga",
  "Amiga 500": "Commodore Amiga 500",
  "AMSTRAD CPC": "Amstrad CPC",
  C64: "Commodore 64",
  DC: "SEGA Dreamcast",
  DS: "Nintendo DS",
  FDS: "Nintendo Famicom Disk System",
  "FM TOWNS": "Fujitsu FM Towns Marty",
  GB: "Nintendo Game Boy",
  GBA: "Nintendo Game Boy Advance",
  MD: "SEGA Megadrive",
  "MD MINI": "SEGA Megadrive Mini",
  "MEGA CD": "SEGA Mega CD",
  MS: "SEGA Master System",
  MSX: "Microsoft MSX",
  N64: "Nintendo 64",
  NES: "Nintendo NES",
  NG: "SNK NEO·GEO",
  NGCD: "SNK NEO·GEO CD",
  NGPC: "SNK NEO·GEO Pocket Color",
  "PC-88": "NEC PC-88",
  "PC-98": "NEC PC-98",
  PCECD: "NEC PC Engine CD",
  PS1: "Sony PlayStation",
  PS2: "Sony PlayStation 2",
  PS3: "Sony PlayStation 3",
  PS4: "Sony PlayStation 4",
  PS5: "Sony PlayStation 5",
  PSN: "Sony PlayStation Network",
  PSP: "Sony PlayStation Portable",
  SAT: "SEGA Saturn",
  SNES: "Nintendo Super NES",
  SWITCH: "Nintendo Switch",
  VC: "Nintendo Virtual Console",
  Vectrex: "Smith Engineering Vectrex",
  VITA: "Sony Playstation Vita",
  WII: "Nintendo Wii",
  WIIU: "Nintendi Wii U",
  WONDERSWAN: "Bandai WonderSwan",
  X360: "Microsoft Xbox 360",
  X68000: "Sharp X68000",
  XBOX: "Microsoft Xbox",
  XONE: "Microsoft Xbox One",
  "ZX SPECTRUM": "Sinclair Research ZX Spectrum",
  iOS: "Apple iOS",
  GG: "SEGA Game Gear",
  GC: "Nintendo GameCube",
  SGX: "NEC Supergrafx",
};

export default Vue.extend({
  name: "PlatformsTemplate",
  props: ["platforms"],
  data: () => ({
    search: "",
    headers: [
      { value: "code", text: "Code", hide: "smAndDown" },
      { value: "title", text: "Title" },
      { value: "games", text: "# Games", align: "right", hide: "smAndDown" },
    ],
  }),
  computed: {
    platformRows: function () {
      return (this as any).platforms.map((p) => ({
        code: p.title,
        title: platformNames[p.title] || p.title,
        games: p.games,
      }));
    },
    computedHeaders() {
      return (this as any).headers.filter(
        (h: any) => !h.hide || !this.$vuetify.breakpoint[h.hide]
      );
    },
  },
  methods: {
    handleClick(row: PlatformWithGameCount) {
      this.$emit("selectPlatform", row);
    },
  },
});
</script>
