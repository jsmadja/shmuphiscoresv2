<template>
  <button type="button" class="k-tag" @click="() => $emit('click')">
    {{ name }}
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({ name: "PlatformButton", props: ["name"] });
</script>
