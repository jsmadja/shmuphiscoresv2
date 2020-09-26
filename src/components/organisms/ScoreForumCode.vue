<template>
  <div>
    <v-card flat outlined>
      <copyable-code :code="code" @copy="onCopy" />
    </v-card>
    <v-btn color="primary" class="mt-3" @click="onCopy">Copy</v-btn>
  </div>
</template>

<script lang="ts">
import CopyableCode from "../atoms/CopyableCode.vue";
import Vue from "vue";
import { Score, toForumCode } from "@/models/score";
import { PropValidator } from "vue/types/options";

export default Vue.extend({
  components: {
    CopyableCode,
  },
  props: {
    score: { type: Object } as PropValidator<Score>,
  },
  computed: {
    code: function () {
      return this.score ? toForumCode(this.score) : "";
    },
  },
  methods: {
    onCopy: function () {
      this.$copyText(toForumCode((this as any).score));
      this.$emit("copy");
    },
  },
});
</script>
