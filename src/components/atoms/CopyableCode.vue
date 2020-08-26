<template>
  <v-card>
    <v-card-text>
      <h2 class="mb-5">Forum Code</h2>
      <v-card flat class="copyable" @click="doCopy">
        {{ code }}
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CopyableCode",
  props: ["title", "code"],
  methods: {
    doCopy: function () {
      this.$copyText((this as any).code);
      this.$emit("copy");
    },
  },
});
</script>

<style lang="scss" scoped>
.copyable {
  cursor: pointer;
}
</style>
