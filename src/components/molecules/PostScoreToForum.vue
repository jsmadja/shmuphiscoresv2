<template>
  <div>
    <a :href="postThreadUrl" @click="loading = true">
      <v-img contain height="400" src="/img/forum.png" />
    </a>
    <v-btn
      class="mt-5"
      color="primary"
      :href="postThreadUrl"
      @click="loading = true"
      :disabled="loading"
      :loading="loading"
      >Open Forum</v-btn
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getPostThreadUrl } from "@/models/game";

export default defineComponent({
  props: ["game"],
  data: () => ({
    loading: false,
  }),
  computed: {
    postThreadUrl: function () {
      return getPostThreadUrl(this.game);
    },
  },
});
</script>
