import { VueStory } from "@/shims-vue";
import { action } from "@storybook/addon-actions";
import Ranking from "../../../src/components/organisms/Ranking.vue";
import rankings from "../data/rankings";

const ranking = rankings[0];

const noScoreRanking = {
  mode: { id: 1, name: "Version 1.5", scoreType: "" },
  difficulty: { id: 4, name: "Original" },
  scores: [],
};

const timerScoreRanking = {
  mode: { id: 1, name: "Version 1.5", scoreType: "timer" },
  difficulty: { id: 4, name: "Original" },
  scores: [
    {
      rank: 1,
      value: -62167219534946,
      player: { id: 146, name: "Rechiku" },
      photo:
        "http://www.hostingpics.net/viewer.php?id=813400futari15Original351746382.jpg",
      inp: "http",
      replay: "http://www.youtube.com/watch?v=cFnEqP_UP_A&feature=youtu.be",
      stage: "ALL",
      id: 4,
      comment: "All(Lx4) Reco Normal",
      oneCC: true,
    },
  ],
};

export default {
  title: "Organism/Ranking",
};

const methods = { onAddScore: action("onAddScore") };

export const DefaultRanking = (): VueStory => ({
  components: { Ranking },
  template: `
      <ranking current-player-id="1" :ranking="ranking" @addScore="onAddScore" />`,
  data: () => ({ ranking }),
  methods,
});

export const EmptyRanking = (): VueStory => ({
  components: { Ranking },
  template: `
      <ranking current-player-id="1" :ranking="ranking" @addScore="onAddScore" />`,
  data: () => ({ ranking: noScoreRanking }),
  methods,
});

export const TimerRanking = (): VueStory => ({
  components: { Ranking },
  template: `
      <ranking current-player-id="1" :ranking="ranking" @addScore="onAddScore" />`,
  data: () => ({ ranking: timerScoreRanking }),
  methods,
});
