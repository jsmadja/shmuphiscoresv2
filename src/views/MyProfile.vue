<template>
  <div>
    <h1>My Profile</h1>
    <v-divider></v-divider>

    <h2 class="mt-10">Preferences</h2>
    <v-container>
      <v-row>
        <v-flex xs12>
          <v-switch label="Show medals on shmup.com"></v-switch>
        </v-flex>
      </v-row>
    </v-container>

    <h2 class="mt-10">My Arch Enemy</h2>
    <v-container>
      <v-row>
        <router-link to="/player/1">Mickey</router-link> <router-link to="/versus/1/2">Show 38 versus</router-link> (ratio: 5/33)
      </v-row>
    </v-container>

    <h2 class="mt-10">Share my medals on forums</h2>
    <v-container>
      <v-row>
        <v-flex xs4 class="grey lighten-5">
          <v-img src="https://hiscores.shmup.com/player/33489/medals.png" />
        </v-flex>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-flex xs12>
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
        </v-flex>
      </v-row>
    </v-container>

    <h2>Share my last score on forums</h2>
    <v-container>
      <v-row>
        <v-img
          width="100%"
          style="background: white"
          position="top left"
          src="https://hiscores.shmup.com/player/1/signature.png"
        />
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-flex xs12>
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
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MyProfile",
  components: {}
};
</script>
