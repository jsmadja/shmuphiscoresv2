<template>
  <games-template
    title="My Games"
    :games="myGames"
    @selectGame="onSelectGame"
  />
</template>

<script>
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import GamesTemplate from "@/components/templates/GamesTemplate";

export default defineComponent({
  title: "MyGames",
  components: { GamesTemplate },
  created() {
    this.$store.dispatch("fetchMyGames");
  },
  computed: {
    ...mapGetters(["myGames"]),
  },
  methods: {
    onSelectGame(game) {
      this.$router.push(`/games/${game.id}`);
    },
  },
});
</script>
