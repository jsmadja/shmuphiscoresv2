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
          <v-data-table :headers="headers" :items="desserts" :search="search">
            <template v-slot:item.cover="{ item }">
              <v-img
                width="100"
                class="grey lighten-3"
                :src="'https://hiscores.shmup.com/' + item.cover"
              ></v-img>
            </template>
            <template v-slot:item.title="{ item }">
              <router-link to="/game">{{ item.title }}</router-link>
            </template>
            <template v-slot:item.platforms="{}">
              <div>
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
              </div>
            </template>
            <template v-slot:item.players>
              <div>
                {{ Math.ceil(Math.random() * 100) }}
              </div>
            </template>
            <template v-slot:item.scores>
              <div>
                {{ Math.ceil(Math.random() * 100) }}
              </div>
            </template>
            <template v-slot:item.onecc>
              <div>
                {{ Math.ceil(Math.random() * 100) }}
              </div>
            </template>
            <template v-slot:item.lastScoreDate>
              <div>
                3 days ago
              </div>
            </template>
            <template v-slot:item.actions="{}">
              <v-icon small class="mr-2" @click="alert('edit')">
                mdi-pencil
              </v-icon>
            </template>
          </v-data-table>
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
        {
          title: "Batsugun",
          cover: "/covers/55.jpg",
        },
        {
          title: "Battle Bakraid",
          cover: "/covers/81.jpg",
        },
        {
          title: "Battle Garegga",
          cover: "/covers/95.jpg",
        },
        {
          title: "Battle Garegga Rev.2016",
          cover: "/covers/568.jpg",
        },
        {
          title: "Battle Mania / Trouble Shooter",
          cover: "/covers/328.jpg",
        },
        {
          title: "Battle Mania Daiginjou / Trouble Shooter Vintage",
          cover: "/covers/440.png",
        },
        {
          title: "Battle Traverse",
          cover: "/covers/307.jpg",
        },
        {
          title: "Battle Unit Zeoth",
          cover: "/covers/582.jpg",
        },
        {
          title: "Bermuda Triangle / World Wars",
          cover: "/covers/481.png",
        },
        {
          title: "Bike Banditz",
          cover: "/covers/446.jpg",
        },
        {
          title: "Bio Hazard Battle",
          cover: "/covers/124.jpg",
        },
        {
          title: "Bio Metal",
          cover: "/covers/111.jpg",
        },
        {
          title: "Biometal Gust (Dezaemon 2)",
          cover: "/covers/463.jpg",
        },
        {
          title: "Black Bird",
          cover: "/covers/611.jpg",
        },
        {
          title: "Blade Buster - New Version",
          cover: "/covers/176.jpg",
        },
        {
          title: "Blast Wind",
          cover: "/covers/34.jpg",
        },
        {
          title: "BlaZeon : The Bio-Cyborg Challenge",
          cover: "/covers/483.jpg",
        },
        {
          title: "Blazing Star",
          cover: "/covers/108.jpg",
        },
        {
          title: "Blue Hawk",
          cover: "/covers/469.png",
        },
        {
          title: "Blue Revolver",
          cover: "/covers/550.jpg",
        },
        {
          title: "Blue Wish Resurrection Plus",
          cover: "/covers/146.jpg",
        },
        {
          title: "Bomber Raid",
          cover: "/covers/438.jpg",
        },
        {
          title: "Border Down",
          cover: "/covers/48.jpg",
        },
        {
          title: "Brave Blade",
          cover: "/covers/109.jpg",
        },
        {
          title: "Break Force",
          cover:
            "http://shmup.com/wp-content/themes/shmup/images/v2_thumbs/img_fiche_4_1405.png",
        },
        {
          title: "Broken Pearl ",
          cover: "/covers/433.jpg",
        },
        {
          title: "Bug Princess ",
          cover: "/covers/280.jpg",
        },
        {
          title: "Bug Princess 2",
          cover: "/covers/168.jpg",
        },
        {
          title: "Bullet Soul",
          cover: "/covers/50.jpg",
        },
        {
          title: "Bullet Soul Infinite Burst",
          cover: "/covers/162.jpg",
        },
        {
          title: "Burai Fighter",
          cover: "/covers/384.jpg",
        },
        {
          title: "Burning Dragon / Burning Dragon Plus",
          cover: "/covers/532.jpg",
        },
        {
          title: "Caladrius",
          cover: "/covers/298.jpg",
        },
        {
          title: "Caladrius Blaze",
          cover: "/covers/299.jpg",
        },
        {
          title: "Cardinal Sins Recycle Edition ",
          cover: "/covers/227.png",
        },
        {
          title: "Carrier Air Wing / U.S. Navy",
          cover: "/covers/241.jpg",
        },
        {
          title: "CD Denjin: Rockabilly Tengoku",
          cover: "/covers/383.jpg",
        },
        {
          title: "Change Air Blade",
          cover: "/covers/104.jpg",
        },
        {
          title: "Chaos Field",
          cover: "/covers/112.jpg",
        },
        {
          title: "Chikyuu Kaihou Gun ZAS",
          cover: "/covers/110.jpg",
        },
        {
          title: "Chimera Beast",
          cover: "/covers/488.jpg",
        },
        {
          title: "Chô Aniki",
          cover: "https://i.imgur.com/VYWaNXa.png",
        },
        {
          title: "Cho Ren Sha 68K",
          cover: "/covers/418.png",
        },
        {
          title: "Chopper I : The Legend of Air Cavalry",
          cover: "/covers/529.jpg",
        },
        {
          title: "Chronoblast",
          cover: "/covers/320.jpg",
        },
        {
          title: "Chuka Taisen",
          cover: "/covers/655.jpg",
        },
        {
          title: "Cobra Command",
          cover: "/covers/487.jpg",
        },
        {
          title: "Combat Zeal",
          cover: "/covers/300.jpg",
        },
        {
          title: "Concours Every Extend Extra Trial",
          cover: "/covers/306.jpg",
        },
        {
          title: "Coryoon Child of Dragon",
          cover: "/covers/191.jpg",
        },
        {
          title: "Cotton 2",
          cover: "/covers/658.jpg",
        },
        {
          title: "Crimzon Clover",
          cover: "/covers/20.jpg",
        },
        {
          title: "Crimzon Clover - World Ignition",
          cover: "/covers/158.jpg",
        },
        {
          title: "Crisis Force",
          cover: "/covers/101.jpg",
        },
        {
          title: "Curse",
          cover: "/covers/561.jpg",
        },
        {
          title: "Cybattler",
          cover: "/covers/494.png",
        },
        {
          title: "Cyber Core",
          cover: "/covers/203.jpg",
        },
        {
          title: "Cyvern : The Dragon Weapon",
          cover: "/covers/86.jpg",
        },
        {
          title: "Daioh",
          cover: "/covers/249.jpg",
        },
        {
          title: "Daioh Gale",
          cover: "/covers/645.jpg",
        },
        {
          title: "Daioh Gale Ver. 2",
          cover: "/covers/646.png",
        },
        {
          title: "Dangerous Seed",
          cover: "/covers/365.jpg",
        },
        {
          title: "Dangun Feveron /  Fever SOS",
          cover: "/covers/84.jpg",
        },
        {
          title: "Danmaku Unlimited 2",
          cover: "/covers/149.jpg",
        },
        {
          title: "Danmaku Unlimited 3 ",
          cover: "/covers/570.jpg",
        },
        {
          title: "Darius",
          cover: "/covers/292.jpg",
        },
        {
          title: "Darius 2",
          cover: "/covers/73.jpg",
        },
        {
          title: "Darius Burst",
          cover: "/covers/151.jpg",
        },
        {
          title: "Darius Burst Another Chronicle EX",
          cover: "/covers/451.jpg",
        },
        {
          title: "Darius Burst Second Prologue",
          cover: "/covers/304.jpg",
        },
        {
          title: "Darius Force",
          cover: "/covers/651.jpg",
        },
        {
          title: "Darius Gaiden",
          cover: "/covers/67.jpg",
        },
        {
          title: "Darius Twin",
          cover: "/covers/160.jpg",
        },
        {
          title: "Darwin 4078",
          cover: "/covers/495.png",
        },
        {
          title: "Dead Moon",
          cover: "/covers/202.jpg",
        },
        {
          title: "Deathsmiles",
          cover: "/covers/16.jpg",
        },
        {
          title: "Deathsmiles (Smartphone)",
          cover: "/covers/391.png",
        },
        {
          title: "Deathsmiles II Makai No Merry Christmas",
          cover: "/covers/119.jpg",
        },
        {
          title: "Demolition Gunner in Seek & Destroy",
          cover: "/covers/415.jpg",
        },
        {
          title: "Dennin Aleste : Nobunaga and his Ninja Force / Robo Aleste",
          cover: "/covers/540.jpg",
        },
        {
          title: "Desert War",
          cover: "/covers/490.jpg",
        },
        {
          title: "Detana !! TwinBee / Bells & Whistles",
          cover: "/covers/366.jpg",
        },
        {
          title: "Devil Engine",
          cover: "/covers/612.jpg",
        },
        {
          title: "Dimahoo / Great Mahou Daisakusen",
          cover: "/covers/79.jpg",
        },
        {
          title: "Divine Sealing",
          cover: "/covers/648.png",
        },
        {
          title: "Dodonpachi",
          cover: "/covers/6.jpg",
        },
        {
          title: "Dodonpachi Arrange",
          cover: "/covers/194.jpg",
        },
        {
          title: "Dodonpachi Blissful Death",
          cover: "/covers/266.jpg",
        },
        {
          title: "Dodonpachi Daifukkatsu",
          cover: "/covers/7.jpg",
        },
        {
          title: "Dodonpachi DaiOuJou",
          cover: "/covers/5.jpg",
        },
        {
          title: "Dodonpachi II Bee Storm",
          cover: "/covers/98.jpg",
        },
        {
          title: "Dodonpachi Maximum ",
          cover: "/covers/284.jpg",
        },
        {
          title: "Dodonpachi Resurrection (Smartphone)",
          cover: "/covers/275.jpg",
        },
        {
          title: "Dodonpachi SaiDaiOuJou",
          cover: "/covers/4.jpg",
        },
        {
          title: "Dogyuun",
          cover: "/covers/57.jpg",
        },
        {
          title: "Don'Yoku",
          cover: "/covers/406.jpg",
        },
        {
          title: "Donpachi",
          cover: "/covers/72.jpg",
        },
        {
          title: "Double Wings",
          cover: "/covers/489.jpg",
        },
        {
          title: "Download",
          cover: "/covers/629.jpg",
        },
        {
          title: "Download 2",
          cover: "/covers/308.jpg",
        },
        {
          title: "Dr. Toppel's Adventure / Dr. Toppel's Takentai",
          cover: "/covers/496.png",
        },
        {
          title: "Dragon Blaze",
          cover: "/covers/29.jpg",
        },
        {
          title: "Dragon Breed",
          cover: "/covers/230.jpg",
        },
        {
          title: "Dragon Saber : After Story of Dragon Spirit",
          cover: "/covers/396.jpg",
        },
        {
          title: "Dragon Spirit ",
          cover: "/covers/447.jpg",
        },
        {
          title: "Dux : Version 1.5",
          cover: "/covers/548.jpg",
        },
        {
          title: "Dyger",
          cover: "/covers/498.png",
        },
        {
          title: "Earth Defense Force",
          cover: "/covers/575.jpg",
        },
        {
          title: "Eco Fighters",
          cover: "/covers/267.jpg",
        },
        {
          title: "Eden's Aegis",
          cover: "/covers/3.jpg",
        },
        {
          title: "Eight Forces ",
          cover: "/covers/500.jpg",
        },
        {
          title: "Einhänder",
          cover: "/covers/87.jpg",
        },
        {
          title: "Elemental Master",
          cover: "/covers/102.jpg",
        },
        {
          title: "Eliminate Down",
          cover: "/covers/199.jpg",
        },
        {
          title: "Equites",
          cover: "/covers/501.png",
        },
        {
          title: "Eschatos",
          cover: "/covers/152.jpg",
        },
        {
          title: "ESP Ra.De",
          cover: "/covers/143.jpg",
        },
        {
          title: "Espgaluda",
          cover: "/covers/9.jpg",
        },
        {
          title: "Espgaluda II",
          cover: "/covers/25.jpg",
        },
        {
          title: "Espgaluda II (Smartphone)",
          cover: "/covers/390.jpg",
        },
        {
          title: "Espial",
          cover: "/covers/502.jpg",
        },
        {
          title: "EXceed 2nd Vampire REX",
          cover: "/covers/290.jpg",
        },
        {
          title: "Exed Exes / Savage Bees",
          cover: "/covers/503.png",
        },
        {
          title: "Exerion",
          cover: "/covers/585.png",
        },
        {
          title: "Exzeal",
          cover: "/covers/301.jpg",
        },
        {
          title: "Exzisus",
          cover: "/covers/445.png",
        },
        {
          title: "Fantastic Night Dreams : Cotton",
          cover: "/covers/442.jpg",
        },
        {
          title: "Fantasy Zone",
          cover: "/covers/566.jpg",
        },
        {
          title: "Fast Striker",
          cover: "/covers/133.jpg",
        },
        {
          title: "Fighter and Attacker - F/A",
          cover: "/covers/505.png",
        },
        {
          title: "Fighting Hawk",
          cover: "/covers/74.jpg",
        },
        {
          title: "Final Blaster",
          cover: "/covers/621.jpg",
        },
        {
          title: "Final Boss: Raw Label",
          cover: "/covers/426.png",
        },
        {
          title: "Final Soldier",
          cover: "/covers/159.jpg",
        },
        {
          title: "Final Star Force",
          cover: "/covers/504.png",
        },
        {
          title: "Finalizer - Super Transformation",
          cover: "/covers/506.jpg",
        },
        {
          title: "Fire Barrel / Air Assault ",
          cover: "/covers/420.jpg",
        },
        {
          title: "Fire Battle",
          cover: "/covers/513.jpg",
        },
        {
          title: "Fire Hawk",
          cover: "/covers/512.jpg",
        },
        {
          title: "Fire Lancer",
          cover: "/covers/610.png",
        },
        {
          title: "Fixeight ",
          cover: "/covers/571.jpg",
        },
        {
          title: "Flak Attack / MX 5000",
          cover: "/covers/511.png",
        },
        {
          title: "Flame Zapper Kotsujin",
          cover: "/covers/125.jpg",
        },
        {
          title: "Flight of Pigarus",
          cover: "/covers/609.png",
        },
        {
          title: "Flying Hero",
          cover: "/covers/615.jpg",
        },
        {
          title: "Flying Shark / Sky Shark / Hishozame",
          cover: "/covers/76.jpg",
        },
        {
          title: "Flying Tiger",
          cover: "/covers/510.jpg",
        },
        {
          title: "Forgotten Worlds / Lost Worlds",
          cover: "/covers/436.png",
        },
        {
          title: "Formation Armed F",
          cover: "/covers/477.jpg",
        },
        {
          title: "G-Darius",
          cover: "/covers/69.jpg",
        },
        {
          title: "G-Stream 2020 / ΔZEAL",
          cover: "/covers/294.jpg",
        },
        {
          title: "Gaia Seed - Project Seed Trap",
          cover: "/covers/345.jpg",
        },
        {
          title: "Gaiares",
          cover: "/covers/214.jpg",
        },
        {
          title: "Galaga",
          cover: "/covers/423.jpg",
        },
        {
          title: "Galaga 88",
          cover: "/covers/361.jpg",
        },
        {
          title: "Galaxy Force II",
          cover: "/covers/147.jpg",
        },
        {
          title: "Galmedes",
          cover: "/covers/507.png",
        },
        {
          title: "Galshell : Blood Red Skies",
          cover: "/covers/587.jpg",
        },
        {
          title: "Gardia",
          cover: "/covers/508.png",
        },
        {
          title: "Gate of Thunder",
          cover: "/covers/385.jpg",
        },
        {
          title: "Gekirindan",
          cover: "/covers/75.jpg",
        },
        {
          title: "Gemini Wing",
          cover: "/covers/509.jpg",
        },
        {
          title: "Geometry Wars 3: Dimensions",
          cover: "/covers/229.jpg",
        },
        {
          title: "Geometry Wars: Retro Evolved ",
          cover: "/covers/563.jpg",
        },
        {
          title: "Geometry Wars: Retro Evolved 2",
          cover: "/covers/564.jpg",
        },
        {
          title: "GG Aleste",
          cover: "/covers/310.jpg",
        },
        {
          title: "GG Aleste II",
          cover: "/covers/312.jpg",
        },
        {
          title: "Ghost Blade ",
          cover: "/covers/399.jpg",
        },
        {
          title: "Ghost Pilots",
          cover: "/covers/333.jpg",
        },
        {
          title: "Gigandes",
          cover: "/covers/516.jpg",
        },
        {
          title: "Gigawing",
          cover: "/covers/243.jpg",
        },
        {
          title: "Gigawing 2",
          cover: "/covers/63.jpg",
        },
        {
          title: "Gigawing Generations",
          cover: "/covers/302.jpg",
        },
        {
          title: "Ginga Force",
          cover: "/covers/339.jpg",
        },
        {
          title: "Ginga Fukei Densetsu Sapphire",
          cover: "/covers/555.jpg",
        },
        {
          title: "GleyLancer",
          cover: "/covers/164.jpg",
        },
        {
          title: "Gokujo Parodius",
          cover: "/covers/338.jpg",
        },
        {
          title: "Gondomania - Makyou Senshi",
          cover: "/covers/519.jpg",
        },
        {
          title: "Gradius ",
          cover: "/covers/264.jpg",
        },
        {
          title: "Gradius Advance / Generation / Galaxies",
          cover: "/covers/262.jpg",
        },
        {
          title: "Gradius Gaiden ",
          cover: "/covers/222.jpg",
        },
        {
          title: "Gradius II",
          cover: "/covers/100.jpg",
        },
        {
          title: "Gradius III",
          cover: "/covers/250.jpg",
        },
        {
          title: "Gradius IV Fukkatsu",
          cover: "/covers/228.jpg",
        },
        {
          title: "Gradius Rebirth",
          cover: "/covers/221.jpg",
        },
        {
          title: "Gradius V",
          cover: "/covers/107.jpg",
        },
        {
          title: "Gratia - Second Earth",
          cover: "/covers/520.png",
        },
        {
          title: "Grid Seeker : Project Storm Hammer",
          cover: "/covers/291.jpg",
        },
        {
          title: "Guardian Force",
          cover: "/covers/377.jpg",
        },
        {
          title: "Guardian Storm - Sen Jin",
          cover: "/covers/518.png",
        },
        {
          title: "Guerilla Strike",
          cover: "/covers/617.jpg",
        },
        {
          title: "Gulf Storm",
          cover: "/covers/515.jpg",
        },
        {
          title: "Gulf War 2",
          cover: "/covers/517.jpg",
        },
        {
          title: "Gun Duel",
          cover: "/covers/327.jpg",
        },
        {
          title: "Gun Frontier",
          cover: "/covers/260.jpg",
        },
        {
          title: "Gun Nac",
          cover: "/covers/269.jpg",
        },
        {
          title: "Gun.Smoke",
          cover: "/covers/427.png",
        },
        {
          title: "Gunbird 1 & 2",
          cover: "/covers/17.jpg",
        },
        {
          title: "Gunhed",
          cover: "/covers/192.jpg",
        },
        {
          title: "Gunnail",
          cover: "/covers/514.png",
        },
        {
          title: "Gunspike / Cannon Spike",
          cover: "/covers/329.jpg",
        },
        {
          title: "Guwange",
          cover: "/covers/13.jpg",
        },
        {
          title: "Gynoug",
          cover: "/covers/195.jpg",
        },
        {
          title: "Gyruss",
          cover: "/covers/523.jpg",
        },
        {
          title: "Hacha Mecha Fighter",
          cover: "/covers/325.jpg",
        },
        {
          title: "Hal 21",
          cover: "/covers/525.jpg",
        },
        {
          title: "Halley Wars",
          cover: "/covers/457.png",
        },
        {
          title: "Halley's Comet",
          cover: "/covers/526.jpg",
        },
        {
          title: "Harmful Park",
          cover: "/covers/363.jpg",
        },
        {
          title: "Hatenkou",
          cover: "/covers/360.jpg",
        },
        {
          title: "Heavy Unit",
          cover: "/covers/144.jpg",
        },
        {
          title: "Hellfire",
          cover: "/covers/247.jpg",
        },
        {
          title: "Homura",
          cover: "/covers/293.jpg",
        },
        {
          title: "Horizon",
          cover: "/covers/527.jpg",
        },
        {
          title: "Hotdog Storm",
          cover: "/covers/137.jpg",
        },
        {
          title: "Hudson Selection Vol. 2 - Star Soldier",
          cover: "/covers/153.jpg",
        },
        {
          title: "Hydorah",
          cover: "/covers/407.jpg",
        },
        {
          title: "Hyper Duel",
          cover: "/covers/35.jpg",
        },
        {
          title: "Ibara",
          cover: "/covers/196.jpg",
        },
        {
          title: "Ibara Kuro Black Label",
          cover: "/covers/197.jpg",
        },
        {
          title: "Ice Cream Surfer",
          cover: "https://i.imgur.com/9jooLsy.jpg",
        },
        {
          title: "Ikaruga",
          cover: "/covers/154.jpg",
        },
        {
          title: "IKUSAAAAAAAN!",
          cover: "/covers/567.jpg",
        },
        {
          title: "Illvelo",
          cover: "/covers/114.jpg",
        },
        {
          title: "Image Fight ",
          cover: "/covers/453.jpg",
        },
        {
          title: "Image Fight II : Operation Deepstriker ",
          cover: "/covers/456.jpg",
        },
        {
          title: "Image Striker 2",
          cover: "/covers/632.jpg",
        },
        {
          title: "Imperium / Kidou Soukou Dion",
          cover: "/covers/581.png",
        },
        {
          title: "In The Hunt",
          cover: "/covers/148.jpg",
        },
        {
          title: "Infinos Gaiden ",
          cover: "/covers/598.jpg",
        },
        {
          title: "Insector X",
          cover: "/covers/449.jpg",
        },
        {
          title: "Iridion 3D",
          cover: "/covers/558.png",
        },
        {
          title: "Iridion II",
          cover: "/covers/584.jpg",
        },
        {
          title: "Ironclad / Chôtetsu Brikin'ger",
          cover: "/covers/223.jpg",
        },
        {
          title: "Jamestown: Legend of the Lost Colony",
          cover: "/covers/414.png",
        },
        {
          title: "Jigoku Kisetsukan: Sense of the Seasons ",
          cover: "/covers/412.jpg",
        },
        {
          title: "Jikkyo Oshaberi Parodius",
          cover: "/covers/369.jpg",
        },
        {
          title: "Judgement Silversword Rebirth Edition",
          cover: "/covers/226.jpg",
        },
        {
          title: "Juno First",
          cover: "/covers/528.png",
        },
        {
          title: "Kaikan",
          cover: "/covers/173.jpg",
        },
        {
          title: "Kamui",
          cover: "/covers/256.jpg",
        },
        {
          title: "Karous",
          cover: "/covers/115.jpg",
        },
        {
          title: "Keio Flying Squadron / Keio Yuugekitai ",
          cover: "/covers/435.jpg",
        },
        {
          title: "Ketsui",
          cover: "/covers/10.jpg",
        },
        {
          title: "Ketsui Death Label",
          cover: "/covers/123.jpg",
        },
        {
          title: "KiKi KaiKai : Nazo no Kuro Manto / Pocky and Rocky",
          cover: "/covers/381.jpg",
        },
        {
          title: "Knightmare / Majyo Densetsu",
          cover: "/covers/324.jpg",
        },
        {
          title: "KOF Sky Stage",
          cover: "/covers/522.jpeg",
        },
        {
          title: "Koutetsu Yousai Strahl",
          cover: "/covers/397.jpg",
        },
        {
          title: "L-Dis",
          cover: "/covers/265.jpg",
        },
        {
          title: "Last Duel : Inter Planet War 2012",
          cover: "/covers/524.jpg",
        },
        {
          title: "Last Hope : Pink Bullets",
          cover: "/covers/258.jpg",
        },
        {
          title: "Last Resort",
          cover: "/covers/61.jpg",
        },
        {
          title: "Layer Section",
          cover: "/covers/150.jpg",
        },
        {
          title: "Legendary Wings",
          cover: "/covers/474.jpg",
        },
        {
          title: "Legion - Spinner-87",
          cover: "/covers/485.jpg",
        },
        {
          title: "Leiria - Stargazer",
          cover: "/covers/565.jpg",
        },
        {
          title: "Lethal Excess",
          cover: "/covers/362.jpg",
        },
        {
          title: "Liberation / Dual Assault",
          cover: "/covers/497.png",
        },
        {
          title: "M.U.S.H.A Aleste",
          cover: "/covers/28.jpg",
        },
        {
          title: "Macross Plus",
          cover: "/covers/654.jpg",
        },
        {
          title: "Mad Shark",
          cover: "/covers/428.png",
        },
        {
          title: "Mahou Daisakusen / Sorcer Striker",
          cover: "/covers/80.jpg",
        },
        {
          title: "Märchen Adventure Cotton 100%",
          cover: "/covers/121.jpg",
        },
        {
          title: "Mars Matrix",
          cover: "/covers/259.jpg",
        },
        {
          title: "Master of Weapon",
          cover: "/covers/619.jpg",
        },
        {
          title: "Mazinger Z",
          cover: "/covers/422.jpg",
        },
        {
          title: "Mecha Ritz",
          cover: "/covers/452.jpg",
        },
        {
          title: "Megablast",
          cover: "/covers/437.jpg",
        },
        {
          title: "Mercenary Force / Tenjin Kaisen",
          cover: "/covers/400.jpg",
        },
        {
          title: "Metal Black",
          cover: "/covers/129.jpg",
        },
        {
          title: "Metal Torrent",
          cover: "/covers/116.jpg",
        },
        {
          title: "Mission Craft",
          cover: "/covers/531.png",
        },
        {
          title: "Mr. Heli no Daibōken / Battle Chopper",
          cover: "/covers/353.png",
        },
        {
          title: "Muchi Muchi Pork !",
          cover: "/covers/11.jpg",
        },
        {
          title: "Mushihimesama",
          cover: "/covers/14.jpg",
        },
        {
          title: "Mushihimesama Futari",
          cover: "/covers/2.jpg",
        },
        {
          title: "Mystic Riders / Mahou Keibitai Gun Hohki",
          cover: "/covers/439.jpg",
        },
        {
          title: "Natsuki Chronicle",
          cover: "/covers/637.jpg",
        },
        {
          title: "Nebulas Ray",
          cover: "/covers/542.jpg",
        },
        {
          title: "Nemesis",
          cover: "/covers/261.jpg",
        },
        {
          title: "Nemesis II -The Return of the Hero ",
          cover: "/covers/231.jpg",
        },
        {
          title: "Neo Geo Heroes : Ultimate Shooting",
          cover: "/covers/521.jpg",
        },
        {
          title: "NEO XYX",
          cover: "/covers/163.jpg",
        },
        {
          title: "Nex Machina",
          cover: "/covers/576.png",
        },
        {
          title: "Nexzr & Nexzr Special",
          cover: "/covers/318.jpg",
        },
        {
          title: "Night Raid",
          cover: "/covers/272.jpg",
        },
        {
          title: "Nostradamus",
          cover: "/covers/607.gifv",
        },
        {
          title: "NYXX",
          cover: "/covers/556.jpg",
        },
        {
          title: "Omega Blast",
          cover: "/covers/606.png",
        },
        {
          title: "Omega Boost",
          cover: "/covers/370.jpg",
        },
        {
          title: "Omega Fighter",
          cover: "/covers/330.jpg",
        },
        {
          title: "Omega Five",
          cover: "/covers/553.jpg",
        },
        {
          title: "Ordyne",
          cover: "/covers/649.png",
        },
        {
          title: "Out Zone",
          cover: "/covers/278.jpg",
        },
        {
          title: "Overdriven Reloaded ",
          cover: "/covers/588.jpg",
        },
        {
          title: "Override",
          cover: "/covers/380.jpg",
        },
        {
          title: "P-47 Aces",
          cover: "/covers/251.jpg",
        },
        {
          title: "Pacific Wings",
          cover: "/covers/644.jpg",
        },
        {
          title: "Panorama Cotton",
          cover: "/covers/411.jpg",
        },
        {
          title: "Parodius",
          cover: "/covers/198.jpg",
        },
        {
          title: "Patriot Dark",
          cover: "/covers/455.png",
        },
        {
          title: "Pawarumi",
          cover: "/covers/626.jpg",
        },
        {
          title: "PC Denjin Punkic Cyborg!",
          cover: "/covers/371.jpg",
        },
        {
          title: "Phalanx : The Enforce Fighter A-144",
          cover: "/covers/444.jpg",
        },
        {
          title: "Phelios",
          cover: "/covers/357.jpg",
        },
        {
          title: "Phoenix",
          cover: "/covers/538.jpg",
        },
        {
          title: "Pilot Kids ",
          cover: "/covers/560.jpg",
        },
        {
          title: "Pink Sweets Ibara Sore Kara",
          cover: "/covers/120.jpg",
        },
        {
          title: "Platypus",
          cover: "/covers/580.png",
        },
        {
          title: "Pleasure Hearts",
          cover: "/covers/392.jpg",
        },
        {
          title: "Pollux",
          cover: "/covers/652.jpg",
        },
        {
          title: "Pop'n TwinBee",
          cover: "/covers/374.jpg",
        },
        {
          title: "Power Strike II",
          cover: "/covers/309.jpg",
        },
        {
          title: "Prehistoric Isle 2",
          cover: "/covers/82.jpg",
        },
        {
          title: "Prehistoric Isle in 1930",
          cover: "/covers/394.jpg",
        },
        {
          title: "Progear no Arashi",
          cover: "/covers/138.jpg",
        },
        {
          title: "Project S-11",
          cover: "/covers/573.jpg",
        },
        {
          title: "Psyche Metal - The Bleeding",
          cover: "/covers/421.jpg",
        },
        {
          title: "Psycho Chaser",
          cover: "/covers/354.jpg",
        },
        {
          title: "Psyvariar",
          cover: "/covers/337.png",
        },
        {
          title: "Pulstar",
          cover: "/covers/62.jpg",
        },
        {
          title: "Q-YO Blaster",
          cover: "/covers/623.jpg",
        },
        {
          title: "Q-YO Blaster",
          cover: "/covers/624.jpg",
        },
        {
          title: "QP Shooting Dangerous!!",
          cover: "/covers/287.jpg",
        },
        {
          title: "R-Type",
          cover: "/covers/314.jpg",
        },
        {
          title: "R-Type Delta",
          cover: "/covers/297.jpg",
        },
        {
          title: "R-Type Dimensions",
          cover: "/covers/235.jpg",
        },
        {
          title: "R-Type Final",
          cover: "/covers/323.jpg",
        },
        {
          title: "R-Type II",
          cover: "/covers/253.jpg",
        },
        {
          title: "R-Type III : The Third Lightning",
          cover: "/covers/586.jpg",
        },
        {
          title: "R-Type Leo",
          cover: "/covers/88.jpg",
        },
        {
          title: "Radiant Silvergun",
          cover: "/covers/536.jpg",
        },
        {
          title: "Radirgy",
          cover: "/covers/30.jpg",
        },
        {
          title: "Radirgy de Gojaru!",
          cover: "/covers/156.jpg",
        },
        {
          title: "Radirgy Noa",
          cover: "/covers/155.jpg",
        },
        {
          title: "Raiden ",
          cover: "/covers/281.jpg",
        },
        {
          title: "Raiden DX",
          cover: "/covers/220.jpg",
        },
        {
          title: "Raiden Fighters 2000-Operation Hell Dive",
          cover: "/covers/99.jpg",
        },
        {
          title: "Raiden Fighters Aces",
          cover: "/covers/23.jpg",
        },
        {
          title: "Raiden II",
          cover: "/covers/96.jpg",
        },
        {
          title: "Raiden III",
          cover: "/covers/47.jpg",
        },
        {
          title: "Raiden IV",
          cover: "/covers/24.jpg",
        },
        {
          title: "Raiden V",
          cover: "/covers/480.jpg",
        },
        {
          title: "Raiga - Strato Fighter",
          cover: "/covers/569.jpg",
        },
        {
          title: "Rapid Hero",
          cover: "/covers/132.jpg",
        },
        {
          title: "RayStorm",
          cover: "/covers/295.jpg",
        },
        {
          title: "RayStorm HD",
          cover: "/covers/296.jpg",
        },
        {
          title: "Rayxanber III",
          cover: "/covers/285.jpg",
        },
        {
          title: "Recca",
          cover: "/covers/157.jpg",
        },
        {
          title: "Red Hawk / Stagger 1 ",
          cover: "/covers/530.png",
        },
        {
          title: "ReDUX Dark Matters",
          cover: "/covers/465.png",
        },
        {
          title: "RefleX",
          cover: "/covers/589.jpeg",
        },
        {
          title: "Remote Weapon GunFencer v5.5",
          cover: "/covers/595.png",
        },
        {
          title: "Resogun",
          cover: "/covers/289.jpg",
        },
        {
          title: "Revolver360 Re:Actor",
          cover: "/covers/286.jpg",
        },
        {
          title: "Rez",
          cover: "/covers/217.jpg",
        },
        {
          title: "Rigid Force Alpha / Redux",
          cover: "/covers/634.jpg",
        },
        {
          title: "Ring^-27 ",
          cover: "/covers/238.jpg",
        },
        {
          title: "Rolling Gunner",
          cover: "/covers/625.jpg",
        },
        {
          title: "Rude Breaker",
          cover: "/covers/359.png",
        },
        {
          title: "Ryu Jin",
          cover: "/covers/89.jpg",
        },
        {
          title: "Saint Dragon",
          cover: "/covers/622.jpeg",
        },
        {
          title: "Salamander / Life Force",
          cover: "/covers/351.png",
        },
        {
          title: "Salamander 2",
          cover: "/covers/70.jpg",
        },
        {
          title: "Same! Same! Same! / Fire Shark",
          cover: "/covers/58.jpg",
        },
        {
          title: "Samurai Aces",
          cover: "/covers/27.jpg",
        },
        {
          title: "Sand Scorpion",
          cover: "/covers/600.jpg",
        },
        {
          title: "Satazius",
          cover: "/covers/213.png",
        },
        {
          title: "Score Rush",
          cover: "/covers/352.jpg",
        },
        {
          title: "Scramble",
          cover: "/covers/638.jpg",
        },
        {
          title: "Scramble Spirits",
          cover: "/covers/642.png",
        },
        {
          title: "SD Gundam 2",
          cover: "/covers/618.jpg",
        },
        {
          title: "Search & Destroy",
          cover: "/covers/636.jpg",
        },
        {
          title: "Seirei Senshi Spriggan",
          cover: "/covers/204.jpg",
        },
        {
          title: "Seisou Kouki Strania",
          cover: "/covers/349.jpg",
        },
        {
          title: "Sengoku Blade: Sengoku Ace Episode II / Tengai",
          cover: "/covers/254.jpg",
        },
        {
          title: "Sengoku Cannon: Sengoku Ace Episode III",
          cover: "/covers/358.jpg",
        },
        {
          title: "Sexy Parodius",
          cover: "/covers/244.jpg",
        },
        {
          title: "Shienryu",
          cover: "/covers/273.jpg",
        },
        {
          title: "Shienryu Explosion",
          cover: "/covers/479.jpg",
        },
        {
          title: "Shikhondo : Soul Eater",
          cover: "/covers/599.jpg",
        },
        {
          title: "Shikigami no Shiro",
          cover: "/covers/134.jpg",
        },
        {
          title: "Shikigami no Shiro 2",
          cover: "/covers/135.jpg",
        },
        {
          title: "Shikigami no Shiro 3",
          cover: "/covers/136.jpg",
        },
        {
          title: "Shippu Mahou Daisakusen",
          cover: "/covers/32.jpg",
        },
        {
          title: "Shogun : Rise of the Renegade",
          cover: "/covers/535.jpg",
        },
        {
          title: "Shoot 1UP",
          cover: "/covers/321.jpg",
        },
        {
          title: "Side Arms Hyper Dyne ",
          cover: "/covers/379.png",
        },
        {
          title: "Silpheed",
          cover: "/covers/470.jpg",
        },
        {
          title: "Silpheed : The Lost Planet",
          cover: "/covers/462.jpg",
        },
        {
          title: "Silver Surfer ",
          cover: "/covers/282.jpg",
        },
        {
          title: "Sin & Punishment",
          cover: "/covers/117.jpg",
        },
        {
          title: "Sin & Punishment 2",
          cover: "/covers/161.jpg",
        },
        {
          title: "Sine Mora",
          cover: "/covers/559.jpg",
        },
        {
          title: "Sisters Royale",
          cover: "/covers/640.jpg",
        },
        {
          title: "Sky Jaguar",
          cover: "/covers/647.png",
        },
        {
          title: "Slap Fight / Alcon",
          cover: "/covers/450.jpg",
        },
        {
          title: "Snops Attack! Zombie Defense Squadron",
          cover: "/covers/326.jpg",
        },
        {
          title: "Sôkyûgurentai",
          cover: "/covers/66.jpg",
        },
        {
          title: "Sol Divide",
          cover: "/covers/368.jpg",
        },
        {
          title: "Sol-Feace / Sol-Deace",
          cover: "/covers/237.jpg",
        },
        {
          title: "Solar Striker",
          cover: "/covers/106.jpg",
        },
        {
          title: "Soldier Blade ",
          cover: "/covers/212.jpg",
        },
        {
          title: "Solid State Survivor",
          cover: "/covers/539.jpg",
        },
        {
          title: "Sonic Wings Limited",
          cover: "/covers/141.jpg",
        },
        {
          title: "Sonic Wings Special",
          cover: "/covers/142.jpg",
        },
        {
          title: "Space Bomber",
          cover: "/covers/210.jpg",
        },
        {
          title: "Space Harrier 2",
          cover: "/covers/350.png",
        },
        {
          title: "Space Invaders Extreme 2",
          cover: "/covers/393.jpg",
        },
        {
          title: "Space Moth DX",
          cover: "/covers/467.jpeg",
        },
        {
          title: "SRD : Super Real Darwin",
          cover: "/covers/491.jpg",
        },
        {
          title: "Star Hawk",
          cover: "/covers/630.jpg",
        },
        {
          title: "Star Parodier",
          cover: "/covers/236.jpg",
        },
        {
          title: "Star Prince",
          cover: "/covers/130.jpg",
        },
        {
          title: "Star Saviors",
          cover: "/covers/430.jpg",
        },
        {
          title: "Star Soldier R",
          cover: "/covers/118.jpg",
        },
        {
          title: "Steel Empire",
          cover: "/covers/128.jpg",
        },
        {
          title: "Steredenn",
          cover: "/covers/402.jpg",
        },
        {
          title: "Storm Blade / Zero Fighter",
          cover: "/covers/653.jpg",
        },
        {
          title: "Strike Gunner STG",
          cover: "/covers/657.jpg",
        },
        {
          title: "Strike Witches: Shirogane no Tsubasa",
          cover: "/covers/546.jpg",
        },
        {
          title: "Strikers 1945",
          cover: "/covers/51.jpg",
        },
        {
          title: "Strikers 1945 II",
          cover: "/covers/53.jpg",
        },
        {
          title: "Strikers 1945 PLUS",
          cover: "/covers/172.jpg",
        },
        {
          title: "Strikers 1999",
          cover: "/covers/26.jpg",
        },
        {
          title: "Sturmwind",
          cover: "/covers/52.jpg",
        },
        {
          title: "Submarine Attack",
          cover: "/covers/614.jpg",
        },
        {
          title: "Super Aleste",
          cover: "/covers/313.jpg",
        },
        {
          title: "Super Dimension Fortress Macross - Scrambled Valkyrie ",
          cover: "/covers/443.jpg",
        },
        {
          title: "Super Fantasy Zone",
          cover: "/covers/375.jpg",
        },
        {
          title: "Super Hydorah",
          cover: "/covers/583.jpg",
        },
        {
          title: "Super R-Type",
          cover: "/covers/317.jpg",
        },
        {
          title: "Super Raiden ",
          cover: "/covers/205.jpg",
        },
        {
          title: "Super Spacefortress Macross / Chou-Jikuu Yousai Macross ",
          cover: "/covers/364.png",
        },
        {
          title: "Super Star Soldier",
          cover: "/covers/211.jpg",
        },
        {
          title: "Super Stardust HD",
          cover: "/covers/602.jpg",
        },
        {
          title: "Super Stardust Portable",
          cover: "/covers/419.png",
        },
        {
          title: "Super Stardust Ultra",
          cover: "/covers/608.jpeg",
        },
        {
          title: "Super Swiv",
          cover: "/covers/557.jpg",
        },
        {
          title: "Super XYX",
          cover: "http://shmup.com/wp-content/uploads/2020/08/SuperXYX.jpg",
        },
        {
          title: "Super-X",
          cover: "/covers/549.png",
        },
        {
          title: "Supercharged Robot Vulkaiser",
          cover: "/covers/577.jpg",
        },
        {
          title: "Sylphia",
          cover: "/covers/193.jpg",
        },
        {
          title: "Task Force Harrier",
          cover: "/covers/395.jpg",
        },
        {
          title: "Terra Cresta",
          cover: "/covers/429.png",
        },
        {
          title: "Terra Cresta II",
          cover: "/covers/460.jpg",
        },
        {
          title: "Terra Force",
          cover: "/covers/97.jpg",
        },
        {
          title: "Terraforming",
          cover: "/covers/356.jpg",
        },
        {
          title: "The Hurricane Of The Varstray",
          cover: "/covers/464.jpeg",
        },
        {
          title: "The Hurricane Of The Varstray v2",
          cover: "/covers/544.jpeg",
        },
        {
          title: "They Came From Verminest",
          cover: "/covers/274.jpg",
        },
        {
          title: "Three Wonders - Chariot ",
          cover: "/covers/240.jpg",
        },
        {
          title: "Thunder Blaster / Lethal Thunder",
          cover: "/covers/218.jpg",
        },
        {
          title: "Thunder Cross",
          cover: "/covers/277.jpg",
        },
        {
          title: "Thunder Cross II",
          cover: "/covers/239.jpg",
        },
        {
          title: "Thunder Dragon 2",
          cover: "/covers/127.jpg",
        },
        {
          title: "Thunder Force AC",
          cover: "/covers/268.jpg",
        },
        {
          title: "Thunder Force II",
          cover: "/covers/376.jpg",
        },
        {
          title: "Thunder Force III",
          cover: "/covers/171.jpg",
        },
        {
          title: "Thunder Force IV",
          cover: "/covers/322.jpg",
        },
        {
          title: "Thunder Force V (PS1)",
          cover: "/covers/33.jpg",
        },
        {
          title: "Thunder Force V (SATURN)",
          cover: "/covers/36.jpg",
        },
        {
          title: "Thunder Force VI",
          cover: "/covers/215.jpg",
        },
        {
          title: "Time Pilot",
          cover: "/covers/417.png",
        },
        {
          title: "Tokio / Scramble Formation ",
          cover: "/covers/593.jpg",
        },
        {
          title: "Touhou 02 : Story of Eastern Wonderland",
          cover: "/covers/37.jpg",
        },
        {
          title: "Touhou 03 : Phantasmagoria of Dim.Dream",
          cover: "/covers/103.jpg",
        },
        {
          title: "Touhou 04 : Lotus Land Story",
          cover: "/covers/341.jpg",
        },
        {
          title: "Touhou 05 : Mystic Square",
          cover: "/covers/342.jpg",
        },
        {
          title: "Touhou 06 : The Embodiment of Scarlet Devil",
          cover: "/covers/18.jpg",
        },
        {
          title: "Touhou 07 : Perfect Cherry Blossom",
          cover: "/covers/38.jpg",
        },
        {
          title: "Touhou 08 : Imperishable Night",
          cover: "/covers/39.jpg",
        },
        {
          title: "Touhou 09 : Phantasmagoria of Flower View",
          cover: "/covers/41.jpg",
        },
        {
          title: "Touhou 09.5 : Shoot the Bullet",
          cover: "/covers/40.jpg",
        },
        {
          title: "Touhou 10 : Mountain of Faith",
          cover: "/covers/42.jpg",
        },
        {
          title: "Touhou 11 : Subterranean Animism",
          cover: "/covers/43.jpg",
        },
        {
          title: "Touhou 12 : Undefined Fantastic Object",
          cover: "/covers/44.jpg",
        },
        {
          title: "Touhou 12.8 : Great Fairy Wars",
          cover: "/covers/628.jpg",
        },
        {
          title: "Touhou 13 : Ten Desires",
          cover: "/covers/45.jpg",
        },
        {
          title: "Touhou 14 : Double Dealing Character",
          cover: "/covers/46.jpg",
        },
        {
          title: "Touhou 15 : Legacy of Lunatic Kingdom",
          cover: "/covers/340.jpg",
        },
        {
          title: "Touhou 16 : Hidden Star in Four Seasons",
          cover: "/covers/574.jpg",
        },
        {
          title: "Touhou 17 : Wily Beast and Weakest Creature",
          cover: "/covers/627.jpg",
        },
        {
          title: "Touhou Fantastic Danmaku Festival 2",
          cover: "/covers/616.jpg",
        },
        {
          title: "Transbot / Astro Flash",
          cover: "/covers/578.jpg",
        },
        {
          title: "Trigger Heart Exelica",
          cover: "/covers/303.jpg",
        },
        {
          title: "Trigon / Lightening Fighters",
          cover: "/covers/331.jpg",
        },
        {
          title: "Trizeal",
          cover: "/covers/216.jpg",
        },
        {
          title: "Trouble Witches Neo / Trouble Witches Origin",
          cover: "/covers/21.jpg",
        },
        {
          title: "Truxton / Tatsujin",
          cover: "/covers/71.jpg",
        },
        {
          title: "Truxton II / Tatsujin Oh",
          cover: "/covers/201.jpg",
        },
        {
          title: "Twin Cobra / Kyuukyoku Tiger",
          cover: "/covers/200.jpg",
        },
        {
          title: "Twin Cobra II / Kyokyoku Tiger II",
          cover: "/covers/105.jpg",
        },
        {
          title: "Twin Eagle - Revenge Joe's Brother",
          cover: "/covers/245.jpg",
        },
        {
          title: "Twin Hawk / Daisenpu",
          cover: "/covers/78.jpg",
        },
        {
          title: "Twin Seeds DX",
          cover: "/covers/534.png",
        },
        {
          title: "Twin Tiger Shark ",
          cover: "/covers/434.png",
        },
        {
          title: "TwinBee Da!! / Pop'n TwinBee",
          cover: "/covers/597.jpg",
        },
        {
          title: "TwinBee Yahho ! ",
          cover: "/covers/378.png",
        },
        {
          title: "Twinkle Star Sprites",
          cover: "/covers/85.jpg",
        },
        {
          title: "Twinkle Tale",
          cover: "/covers/232.jpg",
        },
        {
          title: "Two-Tenkaku",
          cover: "/covers/641.jpg",
        },
        {
          title: "U.N. Squadron",
          cover: "/covers/473.jpg",
        },
        {
          title: "Ufo Robo Dangar",
          cover: "/covers/492.jpg",
        },
        {
          title: "Undead Line ",
          cover: "/covers/398.jpg",
        },
        {
          title: "Under Defeat",
          cover: "/covers/49.jpg",
        },
        {
          title: "USAAF Mustang",
          cover: "/covers/478.png",
        },
        {
          title: "Uzu Keobukseon Space Turtle Ship",
          cover: "/covers/404.jpg",
        },
        {
          title: "V-Five",
          cover: "/covers/56.jpg",
        },
        {
          title: "Valhellio",
          cover: "/covers/458.jpg",
        },
        {
          title:
            "Vapor Trail: Hyper Offense Formation / Kuhga – Operation Code Vapor Trail",
          cover: "/covers/270.jpg",
        },
        {
          title: "Varth Operation Thunderstorm",
          cover: "/covers/145.jpg",
        },
        {
          title: "Vasara & Vasara 2 ",
          cover: "/covers/209.jpg",
        },
        {
          title: "Vattle Giuce",
          cover: "/covers/620.jpg",
        },
        {
          title: "Verytex",
          cover: "/covers/355.jpg",
        },
        {
          title: "Viewpoint",
          cover: "/covers/12.jpg",
        },
        {
          title: "Vimana",
          cover: "/covers/603.jpg",
        },
        {
          title: "Viper Phase 1 ",
          cover: "/covers/169.jpg",
        },
        {
          title: "Vulgus",
          cover: "/covers/441.gif",
        },
        {
          title: "W Ring - The Double Ring",
          cover: "/covers/405.jpg",
        },
        {
          title: "Warhawk",
          cover: "/covers/454.png",
        },
        {
          title: "Warning Forever",
          cover: "/covers/537.jpg",
        },
        {
          title: "Whip Rush",
          cover: "/covers/347.jpg",
        },
        {
          title: "Winds of Thunder / Lords of Thunder ",
          cover: "/covers/208.jpg",
        },
        {
          title: "Wing Force",
          cover: "/covers/572.png",
        },
        {
          title: "Wings Of Death",
          cover: "/covers/401.gif",
        },
        {
          title: "Wolflame",
          cover: "/covers/656.jpg",
        },
        {
          title: "Wyvern Wings ",
          cover: "/covers/590.jpg",
        },
        {
          title: "X Multiply",
          cover: "/covers/382.jpg",
        },
        {
          title: "Xenon 2: Megablast",
          cover: "/covers/604.jpg",
        },
        {
          title: "Xevious",
          cover: "/covers/348.png",
        },
        {
          title: "Xevious 3D/G",
          cover: "/covers/372.jpg",
        },
        {
          title: "Xevious Resurrection",
          cover: "/covers/413.jpg",
        },
        {
          title: "Xexex",
          cover: "/covers/219.jpg",
        },
        {
          title: "XII Stag / XII Zeal",
          cover: "/covers/305.jpg",
        },
        {
          title: "Xmas Shooting - Scramble!!",
          cover: "/covers/554.png",
        },
        {
          title: "Yalkina",
          cover: "/covers/533.png",
        },
        {
          title: "Zanac",
          cover: "/covers/424.gif",
        },
        {
          title: "Zanac Neo",
          cover: "/covers/263.jpg",
        },
        {
          title: "Zed Blade / Operation Ragnarok",
          cover: "/covers/334.jpg",
        },
        {
          title: "Zen-Ichi",
          cover: "/covers/288.jpg",
        },
        {
          title: "Zero Gunner 2",
          cover: "/covers/31.jpg",
        },
        {
          title: "Zero Wing",
          cover: "/covers/319.jpg",
        },
        {
          title: "ZeroRanger",
          cover: "/covers/601.jpg",
        },
      ],
    };
  },
};
</script>
