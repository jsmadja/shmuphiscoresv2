<template>
  <v-card @click="doCopy" flat>
    <v-card-text>
      <h2 class="mb-5" v-if="title">{{ title }}</h2>
      <v-card flat class="copyable">
        <pre>{{ code }}</pre>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CopyableCode",
  props: ["title", "code"],
  methods: {
    doCopy: function () {
      this.$copyText(this.code);
      this.$emit("copy");
    },
  },
});
</script>

<style lang="scss" scoped>
.copyable {
  cursor: pointer;
}

pre {
  white-space: normal;
}
</style>
