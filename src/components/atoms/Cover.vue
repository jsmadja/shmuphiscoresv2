<template>
  <v-img
    :src="coverUrl()"
    :alt="alt"
    :width="width"
    :max-height="max - height"
    :height="height"
    :max="max"
    :contain="contain"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Cover",
  props: ["url", "alt", "width", "max-height", "height", "max", "contain"],
  methods: {
    coverUrl() {
      if (this.url && this.url.indexOf("/") === 0) {
        return "https://hiscores.shmup.com/" + this.url;
      }
      return this.url;
    },
  },
});
</script>
