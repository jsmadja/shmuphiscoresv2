<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>PCE</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" xs="12" sm="12" md="12" lg="6">
        <v-card dark to="/game">
          <div class="d-flex justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>
              <v-card-subtitle>99 players</v-card-subtitle>
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
        title: "Gate of Thunder"
      },
      {
        src: "http://hiscores.shmup.com/covers/192.jpg",
        title: "Gunhed"
      }
    ]
  })
};
</script>

<style scoped></style>
