<template>
  <platforms-template
    :platforms="platforms"
    @selectPlatform="goToPlatformPage"
  />
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import PlatformsTemplate from "@/components/templates/PlatformsTemplate.vue";
import Vue from "vue";
import { PlatformWithGameCount } from "@/models/platforms";

export default Vue.extend({
  name: "Platforms",
  components: {
    PlatformsTemplate,
  },
  computed: {
    ...mapGetters(["platforms"]),
  },
  created() {
    this.$store.dispatch("fetchPlatforms");
  },
  methods: {
    goToPlatformPage(platform: PlatformWithGameCount) {
      this.$router.push(`/platform/${platform.title}`);
    },
  },
});
</script>
