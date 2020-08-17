<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>My Profile</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-switch label="Show medals on shmup.com"></v-switch>
      </v-col>
      <v-col cols="12">
        <h3>Share my medals on forums</h3>
      </v-col>
      <v-col cols="6" xs="6" sm="4" md="3" lg="3">
        <v-card light tile>
          <v-img src="https://hiscores.shmup.com/player/33489/medals.png" />
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="9" lg="9">
        <v-card light>
          <v-card-text>
            <blockquote class="blockquote">
              [IMG]https://hiscores.shmup.com/player/33489/medals.png[/IMG]
            </blockquote>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12"><h3>Share my last score on forums</h3></v-col>
      <v-col>
        <v-card light tile>
          <v-img
            position="top left"
            src="https://hiscores.shmup.com/player/1/signature.png"
          />
        </v-card>
      </v-col>
      <v-col>
        <v-card light>
          <v-card-text>
            <blockquote class="blockquote">
              [IMG]https://hiscores.shmup.com/player/1/signature.png[/IMG]
            </blockquote>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12"><h3>Share my arch enemy</h3></v-col>
      <v-col>
        <v-card light tile>
          <v-img
            position="top left"
            src="http://hiscores.shmup.com/player/1/versus.png"
          />
        </v-card>
      </v-col>
      <v-col>
        <v-card light>
          <v-card-text>
            <blockquote class="blockquote">
              [IMG]https://hiscores.shmup.com/player/1/versus.png[/IMG]
            </blockquote>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyProfile",
  components: {},
};
</script>
