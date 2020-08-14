<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>My Recommendations</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" xs="12" sm="12" md="12" lg="6">
        <v-card dark>
          <div class="d-flex justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-html="item.artist"></v-card-subtitle>
              <v-card-actions>
                <v-btn text>RANKING</v-btn>
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

<script>
export default {
  name: "MyRecommendations",
  data: () => ({
    items: [
      {
        src: "http://hiscores.shmup.com/covers/385.jpg",
        title: "Améliore ton score",
        artist:
          "Réduis l'écart entre toi et <b>mutmut02</b> sur <b>Gate of Thunder</b>, il y a un grand écart de points."
      },
      {
        src: "http://hiscores.shmup.com/covers/2.jpg",
        title: "Monte dans le classement",
        artist:
          "Prend la place de <b>Y'om</b> sur <b>Mushihimesama Futari</b> dans le mode <b>Version 1.5</b> et la difficulté <b>Original</b>."
      },
      {
        src: "http://hiscores.shmup.com/covers/192.jpg",
        title: "Teste un nouveau mode",
        artist: "Essaie le mode <b>Takai 2 min</b> de <b>Gunhed</b>."
      },
      {
        src: "http://hiscores.shmup.com/covers/7.jpg",
        title: "Teste une nouvelle difficulté",
        artist:
          "Essaie la difficulté <b>ARRANGE A</b> de <b>Dodonpachi Daiffukatsu</b>."
      },
      {
        src: "http://hiscores.shmup.com/covers/141.jpg",
        title: "Découvre un nouveau jeu",
        artist: "Fais un score sur <b>Sonic Wings Limited</b>."
      }
    ]
  })
};
</script>

<style scoped></style>
