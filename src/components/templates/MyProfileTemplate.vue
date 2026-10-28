<template>
  <div class="k-container k-page">
    <div>
      <h1>Share on forums</h1>
      <p class="k-page__lead">
        Images that update themselves. Paste the code in your forum.shmup.com
        signature or posts.
      </p>
    </div>

    <template v-if="user && user.id">
      <section v-for="share in shares" :key="share.id" class="k-panel share">
        <div class="share__intro">
          <span class="share__label">{{ share.label }}</span>
          <h2 class="share__title">{{ share.title }}</h2>
        </div>
        <div class="share__body">
          <div class="share__preview">
            <img :src="share.image" :alt="share.title" />
          </div>
          <div class="share__code">
            <label :for="share.id" class="k-sr-only"
              >{{ share.title }} forum code</label
            >
            <input
              :id="share.id"
              readonly
              :value="share.code"
              class="share__input"
              @focus="$event.target.select()"
            />
            <button
              type="button"
              class="k-btn k-btn--cta"
              @click="copy(share.code)"
            >
              Copy
            </button>
          </div>
        </div>
      </section>
    </template>
    <v-skeleton-loader v-else type="card"></v-skeleton-loader>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const BASE = "https://hiscores.shmup.com/player";

export default Vue.extend({
  name: "MyProfileTemplate",
  props: ["user"],
  computed: {
    shares(): Array<{
      id: string;
      label: string;
      title: string;
      image: string;
      code: string;
    }> {
      const medals = `${BASE}/${this.user.shmupUserId}/medals.png`;
      const signature = `${BASE}/${this.user.id}/signature.png`;
      const versus = `${BASE}/${this.user.id}/versus.png`;
      return [
        {
          id: "code-medals",
          label: "IMG 01",
          title: "My medals",
          image: medals,
          code: `[IMG]${medals}[/IMG]`,
        },
        {
          id: "code-last",
          label: "IMG 02",
          title: "My last score",
          image: signature,
          code: `[IMG]${signature}[/IMG]`,
        },
        {
          id: "code-versus",
          label: "IMG 03",
          title: "My arch enemy",
          image: versus,
          code: `[IMG]${versus}[/IMG]`,
        },
      ];
    },
  },
  methods: {
    copy(code: string) {
      this.$copyText(code);
      this.$emit("copy");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../custom.scss";

.share {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 22px 24px;

  &__intro {
    flex: 1 1 220px;
  }

  &__label {
    font-family: $font-score;
    font-size: 20px;
    letter-spacing: 0.1em;
    color: var(--k-accent);
  }

  &__title {
    font-size: 26px;
    margin: 4px 0 0;
  }

  &__body {
    flex: 3 1 520px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__preview {
    padding: 16px;
    border-radius: 8px;
    background: #f2f2f2;
    min-height: 48px;
    overflow-x: auto;

    img {
      display: block;
      max-width: none;
    }
  }

  &__code {
    display: flex;
    gap: 8px;
  }

  &__input {
    flex: 1 1 auto;
    min-width: 0;
    height: 44px;
    padding: 0 12px;
    border-radius: 6px;
    border: 1px solid var(--k-border2);
    background: var(--k-inset);
    color: var(--k-accent);
    font-family: $font-score;
    font-size: 20px;
  }
}
</style>
