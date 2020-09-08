<template>
  <v-btn
    x-small
    dark
    depressed
    color="green"
    tile
    class="pl-1 pr-1"
    @click="() => $emit('click')"
    >{{ name }}
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({ name: "PlatformButton", props: ["name"] });
</script>
