<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <shmup-table
          :headers="headers"
          :items="games"
          :disable-mobile-breakpoint="true"
          @click:row="(row) => $emit('selectGame', row)"
          :loading="loading"
        >
          <template v-slot:item.cover="{ item }">
            <Cover
              :url="item.cover"
              :alt="item.title"
              width="50"
              :contain="true"
              class="ma-1"
            />
          </template>
        </shmup-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Cover from "../atoms/Cover.vue";
import ShmupTable from "@/components/molecules/ShmupTable.vue";

export default Vue.extend({
  name: "GamesTemplate",
  props: ["title", "games", "loading"],
  components: { Cover, ShmupTable },
  data() {
    return {
      headers: [
        {
          text: "",
          value: "cover",
          hide: "smAndDown",
          width: 100,
        },
        {
          text: "Title",
          value: "title",
        },
      ],
    };
  },
});
</script>
