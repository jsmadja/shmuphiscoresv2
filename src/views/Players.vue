<template>
  <players-template
    :players="players"
    :current-player-id="user.id"
    @goToPlayer="goToPlayer"
  />
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import PlayersTemplate from "../components/templates/PlayersTemplate";

export default Vue.extend({
  name: "Players",
  components: { PlayersTemplate },
  computed: {
    ...mapGetters(["players", "user"]),
  },
  created() {
    this.$store.dispatch("fetchPlayers");
    this.$store.dispatch("fetchUser");
  },
  methods: {
    goToPlayer: function (player) {
      this.$router.push(`/players/${player.id}`);
    },
  },
});
</script>

<style lang="scss" scoped>
.ranking-name {
  cursor: pointer;
  &.selected {
    border-left: solid 3px orange;
    padding-left: 5px;
  }
}
</style>
