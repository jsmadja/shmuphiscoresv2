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
import { defineComponent } from "vue";

export default defineComponent({ name: "PlatformButton", props: ["name"] });
</script>
