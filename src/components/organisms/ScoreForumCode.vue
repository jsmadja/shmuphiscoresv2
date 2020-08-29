<template>
  <div>
    <v-card flat outlined>
      <copyable-code :code="code" @copy="onCopy" />
    </v-card>
    <v-btn color="primary" class="mt-3" @click="onCopy">Copy</v-btn>
  </div>
</template>

<script lang="ts">
import CopyableCode from "@/components/atoms/CopyableCode.vue";
import Vue from "vue";
import { toForumCode } from "@/models/score";

export default Vue.extend({
  components: {
    CopyableCode,
  },
  props: ["score"],
  computed: {
    code: function () {
      const _this = this as any;
      return _this.score ? toForumCode(_this.score) : "";
    },
  },
  methods: {
    onCopy() {
      this.$emit("copy");
    },
  },
});
</script>
