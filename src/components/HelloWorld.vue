<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>My last scores</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12" lg="6">
        <v-card dark to="/game">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-html="item.artist"></v-card-subtitle>
              <v-card-actions>
                <v-btn text to="/add-score">ADD SCORE</v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>Community last scores</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12" lg="6">
        <v-card dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-html="item.artist"></v-card-subtitle>
              <v-card-actions>
                <v-btn text>ADD SCORE</v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({
    items: [
      {
        src: "http://hiscores.shmup.com/covers/385.jpg",
        title: "Gate of Thunder",
        artist: "123.456 pts"
      },
      {
        src: "http://hiscores.shmup.com/covers/2.jpg",
        title: "Mushihimesama Futari",
        artist:
          "123.456 pts - Mode <b>Version 1.5</b> Difficulté <b>Original</b>."
      },
      {
        src: "http://hiscores.shmup.com/covers/192.jpg",
        title: "Gunhed",
        artist: "123.456 pts - Mode <b>Takai 2 min</b>."
      },
      {
        src: "http://hiscores.shmup.com/covers/7.jpg",
        title: "Dodonpachi Daiffukatsu",
        artist: "123.456 pts - Difficulté <b>ARRANGE A</b></b>."
      },
      {
        src: "http://hiscores.shmup.com/covers/141.jpg",
        title: "Sonic Wings Limited",
        artist: "123.456 pts"
      }
    ]
  })
});
</script>
