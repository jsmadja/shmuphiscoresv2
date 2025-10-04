<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Players</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12>
        <shmup-table
          :headers="headers"
          :item-class="rowClasses"
          :items="players"
          @click:row="(item) => $emit('goToPlayer', item)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import ShmupTable from "@/components/molecules/ShmupTable";

export default defineComponent({
  name: "PlayersTemplate",
  components: { ShmupTable },
  props: ["players", "currentPlayerId"],
  data() {
    return {
      headers: [{ title: "Player", value: "name" }],
    };
  },
  methods: {
    rowClasses(item) {
      if (item.id == this.currentPlayerId) {
        return "orange lighten-5";
      }
    },
  },
});
</script>
