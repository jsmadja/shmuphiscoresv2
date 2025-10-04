<template>
  <my-profile-template :user="user" @copy="onCopy" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyProfileTemplate from "../components/templates/MyProfileTemplate.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "MyProfile",
  components: { MyProfileTemplate },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
  methods: {
    onCopy: function () {
      this.$store.dispatch("showSuccessToast", "Copied!");
    },
  },
});
</script>
