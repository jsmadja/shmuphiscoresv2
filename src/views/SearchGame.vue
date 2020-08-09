<template>
  <v-container no-gutters fluid>
    <v-layout>
      <h1>Search Game</h1>
    </v-layout>
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
    <v-layout row>
      <v-flex xs6 sm4 lg2 xl2 class="pa-2" v-for="n in 6" :key="n">
        <v-skeleton-loader type="card"></v-skeleton-loader>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SearchGame",
  components: {}
};
</script>
