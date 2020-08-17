<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Games</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
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
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="(item, i) in desserts" :key="i" cols="12" lg="6">
        <v-card to="/game">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>
              <v-card-subtitle>
                <p>{{ Math.ceil(Math.random() * 100) }} players</p>
                <v-btn
                  v-for="i in platforms"
                  to="/platform"
                  color="green"
                  dark
                  x-small
                  flat
                  tile
                  depressed
                  :key="i"
                  class="mr-1"
                  >{{ i }}</v-btn
                >
              </v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="'https://hiscores.shmup.com/' + item.cover"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  title: "Games",
  components: {},
  data() {
    return {
      platforms: ["PS1", "PCE", "XONE", "PCE", "PS4"],
      search: "",
      headers: [
        {
          text: "",
          value: "cover",
        },
        {
          text: "Title",
          value: "title",
        },
        {
          text: "Platforms",
          value: "platforms",
        },
        {
          text: "Players",
          value: "players",
        },
        {
          text: "Scores",
          value: "scores",
        },
        {
          text: "1CC",
          value: "onecc",
        },
        {
          text: "Last Score Date",
          value: "lastScoreDate",
        },
        {
          text: "Actions",
          value: "actions",
        },
      ],
      desserts: [
        {
          title: "[Concours CAVE CARNIVAL] Dangun Feveron - Time Attack",
          cover: "/covers/386.jpg",
        },
        {
          title: "[Concours] Blade Buster - New Version (terminé)",
          cover: "/covers/182.jpg",
        },
        {
          title: "[Otoko Dama]",
          cover: "/covers/594.png",
        },
        {
          title: "1941 Counter Attack",
          cover: "/covers/92.jpg",
        },
        {
          title: "1942",
          cover: "/covers/416.jpeg",
        },
        {
          title: "1943 The battle of Midway",
          cover: "/covers/90.jpg",
        },
        {
          title: "1944 The Loop Master",
          cover: "/covers/93.jpg",
        },
        {
          title: "1945k III",
          cover: "/covers/122.jpg",
        },
        {
          title: "19XX : The War against Destiny",
          cover: "/covers/68.jpg",
        },
        {
          title: "Acrobat Mission",
          cover: "/covers/471.jpg",
        },
        {
          title: "Aerial Assault",
          cover: "/covers/591.png",
        },
        {
          title: "Aero Blasters / Air Buster",
          cover: "/covers/242.jpg",
        },
        {
          title: "Aero Fighters / Sonic Wings",
          cover: "/covers/139.jpg",
        },
        {
          title: "Aero Fighters 2 / Sonic Wings 2",
          cover: "/covers/60.jpg",
        },
        {
          title: "Aero Fighters 3 / Sonic Wings 3",
          cover: "/covers/140.jpg",
        },
        {
          title: "Aerostar",
          cover: "/covers/631.png",
        },
        {
          title: "After Burner Climax",
          cover: "/covers/486.png",
        },
        {
          title: "Agony",
          cover: "/covers/613.jpg",
        },
        {
          title: "Air Duel ",
          cover: "/covers/468.png",
        },
        {
          title: "Air Gallet",
          cover: "/covers/83.jpg",
        },
        {
          title: "Airwolf",
          cover: "/covers/472.png",
        },
        {
          title: "Aka To Blue",
          cover: "/covers/596.jpg",
        },
        {
          title: "Akai Katana",
          cover: "/covers/8.jpg",
        },
        {
          title: "Aldynes ",
          cover: "/covers/279.jpg",
        },
        {
          title: "Aleste",
          cover: "/covers/459.jpg",
        },
        {
          title: "Aleste 2",
          cover: "/covers/541.png",
        },
        {
          title: "Alltynex Second",
          cover: "/covers/448.png",
        },
        {
          title: "Alpha Mission II / ASO II",
          cover: "/covers/332.jpg",
        },
        {
          title: "Alzadick - Summer Carnival 92",
          cover: "/covers/335.jpg",
        },
        {
          title: "Anaru Dansyaku : Galaxy Hero Another Episode",
          cover: "/covers/425.png",
        },
        {
          title: "Andro Dunos",
          cover: "/covers/59.jpg",
        },
        {
          title: "AngerForce: Reloaded",
          cover: "/covers/633.jpg",
        },
        {
          title: "Arbalester",
          cover: "/covers/432.jpg",
        },
        {
          title: "Argus",
          cover: "/covers/475.jpg",
        },
        {
          title: "Ark Area",
          cover: "/covers/476.jpg",
        },
        {
          title: "Armed 7",
          cover: "http://shmup.com/wp-content/uploads/2020/08/Armed7.jpg",
        },
        {
          title: "Armed Police Batrider",
          cover: "/covers/54.jpg",
        },
        {
          title: "Armed Police Unit Gallop / Cosmic Cop",
          cover: "/covers/562.jpg",
        },
        {
          title: "Arrow Flash",
          cover: "/covers/592.jpg",
        },
        {
          title: "Ashura Blaster",
          cover: "/covers/233.jpg",
        },
        {
          title: "ASO :  Armored Scrum Object / Alpha Mission",
          cover: "/covers/466.png",
        },
        {
          title: "Astebreed",
          cover: "/covers/461.png",
        },
        {
          title: "Atomic Robo-Kid",
          cover: "/covers/431.jpg",
        },
        {
          title: "Axelay",
          cover: "/covers/346.jpg",
        },
        {
          title: "B-Wings / Battle Wings ",
          cover: "/covers/484.jpg",
        },
        {
          title: "Bakuretsu Breaker / Explosive Breaker ",
          cover: "/covers/482.png",
        },
        {
          title: "Bari-Arm",
          cover: "/covers/605.png",
        },
        {
          title: "Baroque Shooting",
          cover: "/covers/113.jpg",
        },
      ],
    };
  },
};
</script>
