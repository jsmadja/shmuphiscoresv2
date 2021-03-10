<template>
  <add-player-template @createPlayer="createPlayer" />
</template>

<script lang="ts">
import AddPlayerTemplate from "@/components/templates/AddPlayerTemplate.vue";
import Vue from "vue";
import { Player } from "@/models/player";

export default Vue.extend({
  name: "AddPlayer",
  components: { AddPlayerTemplate },
  methods: {
    async createPlayer(player) {
      const createdPlayer: Player = await this.$store.dispatch(
        "createPlayer",
        player
      );
      return this.$router.push(`/players/${createdPlayer.id}`);
    },
  },
});
</script>
