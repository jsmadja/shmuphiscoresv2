<template>
  <v-form ref="form" v-model="valid">
    <v-card>
      <v-card-text>
        <h2 class="mb-5">Add {{ settingName }}</h2>
        <v-row>
          <v-col
            ><v-text-field
              v-model="value"
              :name="settingName"
              :label="settingName"
              outlined
              required
              :rules="notEmptyRules"
              hide-details="auto"
            ></v-text-field
          ></v-col>
          <v-col
            ><v-select
              v-if="values && values.length > 0"
              v-model="afterValue"
              outlined
              :items="values"
              item-text="name"
              item-value="id"
              :label="`After ${settingName}`"
              hide-details="auto"
            ></v-select
          ></v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn :disabled="!valid" @click="validate()" text color="primary"
          >Add</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GameSettingForm",
  props: ["settingName", "values"],
  data() {
    return {
      valid: false,
      value: "",
      afterValue: null,
      notEmptyRules: [
        (v: string) =>
          (v && v.trim().length > 0) || `${this.settingName} is required`,
      ],
    };
  },
  methods: {
    validate() {
      (this.$refs.form as any).validate();
      this.$emit("create", {
        value: this.value,
        afterValue: this.afterValue,
      });
    },
  },
});
</script>
