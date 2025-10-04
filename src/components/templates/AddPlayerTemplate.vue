<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>Add Player</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-card class="pa-5" tile>
          <v-form ref="formRef" v-model="valid">
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formModel.name"
                  label="Name"
                  placeholder="Mickey"
                  :rules="nameRules"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="formModel.shmupUserId"
                  label="Shmup User Id"
                  hint="Technical Id like in http://forum.shmup.com/memberlist.php?mode=viewprofile&u=312"
                  placeholder="312"
                  :rules="isNumeric"
                  required
                  outlined
                ></v-text-field>
                <v-btn
                  :disabled="!valid"
                  @click="validate"
                  color="primary"
                  class="mr-4"
                >
                  Create
                </v-btn>
                <v-btn color="error" class="mr-4" @click="reset">
                  Reset Form
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface PlayerFormType {
  name: string;
  shmupUserId: number;
}

type Rule = (v: string) => string | boolean;

export default defineComponent({
  data(): {
    valid: boolean;
    formModel: PlayerFormType;
    nameRules: Array<Rule>;
    isNumeric: any;
  } {
    return {
      valid: false,
      formModel: {
        name: "",
        shmupUserId: 0,
      },
      isNumeric: [
        (v: string) => {
          return Number.isInteger(parseInt(v)) || "Numeric Value is required";
        },
      ],
      nameRules: [
        (v: string): string | boolean => {
          return (v && v.trim().length > 0) || "Name is required";
        },
      ],
    };
  },

  methods: {
    validate: function () {
      const formRef = this.$refs.formRef as HTMLFormElement;
      formRef.validate();
      const formModel = this.$data.formModel;
      const player = JSON.parse(JSON.stringify(formModel));
      this.$emit("createPlayer", player);
    },
    reset: function () {
      const formRef = this.$refs.formRef as HTMLFormElement;
      formRef.reset();
    },
  },
});
</script>
