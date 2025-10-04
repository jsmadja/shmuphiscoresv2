<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ platformName }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12>
        <shmup-table
          :headers="headers"
          :items="games"
          @click:row="(row) => $emit('selectGame', row)"
          :loading="games.length === 0"
        >
          <template v-slot:item.cover="{ item }">
            <cover
              :url="item.cover"
              :alt="item.title"
              :contain="true"
              width="50"
            />
          </template>
          <template
            v-slot:item.title="{ item }"
            @click="(row) => $emit('selectGame', row)"
          >
            {{ item.title }}
          </template>
          <template v-slot:item.platforms="{ item }">
            <platform-button
              @click="() => onSelectPlatform(platform)"
              :name="platform.name"
              v-for="platform in item.platforms"
              :key="platform.id"
            />
          </template>
        </shmup-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cover from "../atoms/Cover.vue";
import { platformNames } from "@/models/platforms";
import PlatformButton from "@/components/atoms/PlatformButton.vue";
import ShmupTable from "@/components/molecules/ShmupTable.vue";

export default defineComponent({
  name: "PlatformTemplate",
  props: ["platformTitle", "games"],
  components: { Cover, PlatformButton, ShmupTable },
  data() {
    return {
      headers: [
        {
          text: "",
          value: "cover",
          hide: "smAndDown",
          width: 100,
        },
        {
          text: "Title",
          value: "title",
        },
        {
          text: "All Platforms",
          value: "platforms",
          hide: "smAndDown",
        },
      ],
    };
  },
  computed: {
    platformName() {
      return platformNames.get(this.platformTitle);
    },
  },
  methods: {
    onSelectPlatform(platform) {
      this.$emit("selectPlatform", platform);
    },
  },
});
</script>
