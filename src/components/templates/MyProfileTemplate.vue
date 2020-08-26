<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>My Profile</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-switch label="Show medals on shmup.com"></v-switch>
      </v-col>
      <v-col cols="12">
        <h3>Share my medals on forums</h3>
      </v-col>
      <v-col cols="6" xs="6" sm="4" md="3" lg="3">
        <v-card light tile>
          <v-img src="https://hiscores.shmup.com/player/33489/medals.png" />
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="9" lg="9">
        <copyable-code
          title="Code"
          :code="`[IMG]https://hiscores.shmup.com/player/${user.shmupUserId}/medals.png[/IMG]`"
          @copy="$emit('copy')"
        />
      </v-col>
      <v-col cols="12"><h3>Share my last score on forums</h3></v-col>
      <v-col>
        <v-card light tile>
          <v-img
            position="top left"
            src="https://hiscores.shmup.com/player/1/signature.png"
          />
        </v-card>
      </v-col>
      <v-col>
        <copyable-code
          title="Code"
          :code="`[IMG]https://hiscores.shmup.com/player/${user.id}/signature.png[/IMG]`"
          @copy="$emit('copy')"
        />
      </v-col>
      <v-col cols="12"><h3>Share my arch enemy</h3></v-col>
      <v-col>
        <v-card light tile>
          <v-img
            position="top left"
            src="http://hiscores.shmup.com/player/1/versus.png"
          />
        </v-card>
      </v-col>
      <v-col>
        <copyable-code
          title="Code"
          :code="`[IMG]https://hiscores.shmup.com/player/${user.id}/versus.png[/IMG]`"
          @copy="$emit('copy')"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CopyableCode from "../atoms/CopyableCode";
import Vue from "vue";

export default Vue.extend({
  name: "MyProfileTemplate",
  components: {
    CopyableCode,
  },
  props: ["user"],
});
</script>
