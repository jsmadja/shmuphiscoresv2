<template>
  <add-game-template
    :platforms="platformsSortedByGamesDesc"
    :user="user"
    @createGame="createGame"
  />
</template>

<script>
import AddGameTemplate from "@/components/templates/AddGameTemplate";
import Vue from "vue";
import { mapGetters } from "vuex";
import _ from "lodash";

export default Vue.extend({
  name: "AddGame",
  components: { AddGameTemplate },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("fetchPlatforms");
  },
  computed: {
    ...mapGetters(["platforms", "user"]),
    platformsSortedByGamesDesc: function () {
      return _(this.platforms)
        .orderBy(["games"], ["desc"])
        .map((p) => p.title)
        .value();
    },
  },
  methods: {
    createGame(game) {
      this.$store
        .dispatch("createGame", game)
        .then((game) => this.$router.push(`/games/${game.id}/edit`));
    },
  },
});
</script>
