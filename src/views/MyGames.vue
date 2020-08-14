<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>My Games</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        v-for="card in items"
        :key="card.title"
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="6"
      >
        <v-card dark>
          <div class="d-flex justify-space-between">
            <div>
              <v-card-title class="headline" v-text="card.title"></v-card-title>
              <v-card-subtitle>12 personal scores</v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="card.cover"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyGames",
  data: () => ({
    items: [
      {
        id: 182,
        title: "[Concours] Blade Buster - New Version (terminé)",
        cover: "http://hiscores.shmup.com/covers/182.jpg"
      },
      {
        id: 60,
        title: "Aero Fighters 2 / Sonic Wings 2",
        cover: "http://hiscores.shmup.com/covers/60.jpg"
      },
      {
        id: 140,
        title: "Aero Fighters 3 / Sonic Wings 3",
        cover: "http://hiscores.shmup.com/covers/140.jpg"
      },
      {
        id: 8,
        title: "Akai Katana",
        cover: "http://hiscores.shmup.com/covers/8.jpg"
      },
      {
        id: 332,
        title: "Alpha Mission II / ASO II",
        cover: "http://hiscores.shmup.com/covers/332.jpg"
      },
      {
        id: 59,
        title: "Andro Dunos",
        cover: "http://hiscores.shmup.com/covers/59.jpg"
      },
      {
        id: 55,
        title: "Batsugun",
        cover: "http://hiscores.shmup.com/covers/55.jpg"
      },
      {
        id: 176,
        title: "Blade Buster - New Version",
        cover: "http://hiscores.shmup.com/covers/176.jpg"
      },
      {
        id: 108,
        title: "Blazing Star",
        cover: "http://hiscores.shmup.com/covers/108.jpg"
      },
      {
        id: 168,
        title: "Bug Princess 2",
        cover: "http://hiscores.shmup.com/covers/168.jpg"
      },
      {
        id: 191,
        title: "Coryoon Child of Dragon",
        cover: "http://hiscores.shmup.com/covers/191.jpg"
      },
      {
        id: 73,
        title: "Darius 2",
        cover: "http://hiscores.shmup.com/covers/73.jpg"
      },
      {
        id: 67,
        title: "Darius Gaiden",
        cover: "http://hiscores.shmup.com/covers/67.jpg"
      },
      {
        id: 160,
        title: "Darius Twin",
        cover: "http://hiscores.shmup.com/covers/160.jpg"
      },
      {
        id: 202,
        title: "Dead Moon",
        cover: "http://hiscores.shmup.com/covers/202.jpg"
      },
      {
        id: 6,
        title: "Dodonpachi",
        cover: "http://hiscores.shmup.com/covers/6.jpg"
      },
      {
        id: 7,
        title: "Dodonpachi Daifukkatsu",
        cover: "http://hiscores.shmup.com/covers/7.jpg"
      },
      {
        id: 98,
        title: "Dodonpachi II Bee Storm",
        cover: "http://hiscores.shmup.com/covers/98.jpg"
      },
      {
        id: 72,
        title: "Donpachi",
        cover: "http://hiscores.shmup.com/covers/72.jpg"
      },
      {
        id: 29,
        title: "Dragon Blaze",
        cover: "http://hiscores.shmup.com/covers/29.jpg"
      },
      {
        id: 447,
        title: "Dragon Spirit ",
        cover: "http://hiscores.shmup.com/covers/447.jpg"
      },
      {
        id: 102,
        title: "Elemental Master",
        cover: "http://hiscores.shmup.com/covers/102.jpg"
      },
      {
        id: 143,
        title: "ESP Ra.De",
        cover: "http://hiscores.shmup.com/covers/143.jpg"
      },
      {
        id: 9,
        title: "Espgaluda",
        cover: "http://hiscores.shmup.com/covers/9.jpg"
      },
      {
        id: 25,
        title: "Espgaluda II",
        cover: "http://hiscores.shmup.com/covers/25.jpg"
      },
      {
        id: 159,
        title: "Final Soldier",
        cover: "http://hiscores.shmup.com/covers/159.jpg"
      },
      {
        id: 504,
        title: "Final Star Force",
        cover: "http://hiscores.shmup.com/covers/504.png"
      },
      {
        id: 385,
        title: "Gate of Thunder",
        cover: "http://hiscores.shmup.com/covers/385.jpg"
      },
      {
        id: 310,
        title: "GG Aleste",
        cover: "http://hiscores.shmup.com/covers/310.jpg"
      },
      {
        id: 312,
        title: "GG Aleste II",
        cover: "http://hiscores.shmup.com/covers/312.jpg"
      },
      {
        id: 333,
        title: "Ghost Pilots",
        cover: "http://hiscores.shmup.com/covers/333.jpg"
      },
      {
        id: 164,
        title: "GleyLancer",
        cover: "http://hiscores.shmup.com/covers/164.jpg"
      },
      {
        id: 192,
        title: "Gunhed",
        cover: "http://hiscores.shmup.com/covers/192.jpg"
      },
      {
        id: 35,
        title: "Hyper Duel",
        cover: "http://hiscores.shmup.com/covers/35.jpg"
      },
      {
        id: 223,
        title: "Ironclad / Chôtetsu Brikin'ger",
        cover: "http://hiscores.shmup.com/covers/223.jpg"
      },
      {
        id: 10,
        title: "Ketsui",
        cover: "http://hiscores.shmup.com/covers/10.jpg"
      },
      {
        id: 123,
        title: "Ketsui Death Label",
        cover: "http://hiscores.shmup.com/covers/123.jpg"
      },
      {
        id: 61,
        title: "Last Resort",
        cover: "http://hiscores.shmup.com/covers/61.jpg"
      },
      {
        id: 80,
        title: "Mahou Daisakusen / Sorcer Striker",
        cover: "http://hiscores.shmup.com/covers/80.jpg"
      },
      {
        id: 14,
        title: "Mushihimesama",
        cover: "http://hiscores.shmup.com/covers/14.jpg"
      },
      {
        id: 2,
        title: "Mushihimesama Futari",
        cover: "http://hiscores.shmup.com/covers/2.jpg"
      },
      {
        id: 439,
        title: "Mystic Riders / Mahou Keibitai Gun Hohki",
        cover: "http://hiscores.shmup.com/covers/439.jpg"
      },
      {
        id: 198,
        title: "Parodius",
        cover: "http://hiscores.shmup.com/covers/198.jpg"
      },
      {
        id: 82,
        title: "Prehistoric Isle 2",
        cover: "http://hiscores.shmup.com/covers/82.jpg"
      },
      {
        id: 23,
        title: "Raiden Fighters Aces",
        cover: "http://hiscores.shmup.com/covers/23.jpg"
      },
      {
        id: 96,
        title: "Raiden II",
        cover: "http://hiscores.shmup.com/covers/96.jpg"
      },
      {
        id: 24,
        title: "Raiden IV",
        cover: "http://hiscores.shmup.com/covers/24.jpg"
      },
      {
        id: 212,
        title: "Soldier Blade ",
        cover: "http://hiscores.shmup.com/covers/212.jpg"
      },
      {
        id: 236,
        title: "Star Parodier",
        cover: "http://hiscores.shmup.com/covers/236.jpg"
      },
      {
        id: 172,
        title: "Strikers 1945 PLUS",
        cover: "http://hiscores.shmup.com/covers/172.jpg"
      },
      {
        id: 211,
        title: "Super Star Soldier",
        cover: "http://hiscores.shmup.com/covers/211.jpg"
      },
      {
        id: 322,
        title: "Thunder Force IV",
        cover: "http://hiscores.shmup.com/covers/322.jpg"
      },
      {
        id: 36,
        title: "Thunder Force V (SATURN)",
        cover: "http://hiscores.shmup.com/covers/36.jpg"
      },
      {
        id: 85,
        title: "Twinkle Star Sprites",
        cover: "http://hiscores.shmup.com/covers/85.jpg"
      },
      {
        id: 232,
        title: "Twinkle Tale",
        cover: "http://hiscores.shmup.com/covers/232.jpg"
      },
      {
        id: 209,
        title: "Vasara & Vasara 2 ",
        cover: "http://hiscores.shmup.com/covers/209.jpg"
      },
      {
        id: 12,
        title: "Viewpoint",
        cover: "http://hiscores.shmup.com/covers/12.jpg"
      },
      {
        id: 334,
        title: "Zed Blade / Operation Ragnarok",
        cover: "http://hiscores.shmup.com/covers/334.jpg"
      }
    ]
  })
};
</script>

<style scoped></style>
