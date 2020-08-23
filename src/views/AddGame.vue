<template>
  <AddGameTemplate
    :platforms="platformsSortedByGamesDesc"
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
    ...mapGetters(["platforms"]),
    platformsSortedByGamesDesc: function () {
      return _(this.platforms)
        .orderBy(["games"], ["desc"])
        .map((p) => p.title)
        .value();
    },
  },
  methods: {
    createGame(game) {
      this.$store.dispatch("createGame", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
      });
    },
  },
});
</script>
