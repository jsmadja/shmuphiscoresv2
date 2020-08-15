<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>My Profile</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>Preferences</h2>
      </v-col>
      <v-col cols="12">
        <v-switch label="Show medals on shmup.com"></v-switch>
      </v-col>
      <v-col cols="12">
        <h2>My Arch Enemy</h2>
      </v-col>
      <v-col>
        <router-link to="/player">Mickey</router-link>
        <router-link to="/compare-scores">Show 38 versus</router-link>
        (ratio: 5/33)
      </v-col>
      <v-col cols="12">
        <h2>HTML Integration</h2>
      </v-col>
      <v-col cols="12">
        <h3>Share my medals on forums</h3>
      </v-col>
      <v-col>
        <v-card light>
          <v-img src="https://hiscores.shmup.com/player/33489/medals.png" />
        </v-card>
      </v-col>
      <v-col>
        <v-card light>
          <v-card-title>
            Forum BBCode
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <blockquote class="blockquote">
              [IMG]https://hiscores.shmup.com/player/33489/medals.png[/IMG]
            </blockquote>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12"><h3>Share my last score on forums</h3></v-col>
      <v-col>
        <v-card light>
          <v-img
            position="top left"
            src="https://hiscores.shmup.com/player/1/signature.png"
          />
        </v-card>
      </v-col>
      <v-col>
        <v-card light>
          <v-card-title>
            Forum BBCode
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <blockquote class="blockquote">
              [IMG]https://hiscores.shmup.com/player/1/signature.png[/IMG]
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
  components: {}
};
</script>
