<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Search Game</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          placeholder="Darius, R-Type, ..."
          hide-details
          outlined
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="4" class="pa-2" v-for="n in 6" :key="n">
        <router-link to="/game">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchGame",
  components: {}
};
</script>
