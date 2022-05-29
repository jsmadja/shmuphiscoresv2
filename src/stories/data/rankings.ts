import { Ranking } from "@/models/ranking";

const ranking: Ranking = {
  mode: {
    id: 1,
    name: "Version 1.5",
    scoreType: "",
  },
  difficulty: {
    id: 4,
    name: "Original",
  },
  scores: [
    {
      rank: 1,
      value: 425027421,
      player: {
        id: 146,
        name: "Rechiku",
      },
      photo:
        "http://www.hostingpics.net/viewer.php?id=813400futari15Original351746382.jpg",
      inp: "http",
      replay: "http://www.youtube.com/watch?v=cFnEqP_UP_A&feature=youtu.be",
      stage: "ALL",
      id: 4,
      comment: "All(Lx4) Reco Normal",
      oneCC: true,
    },
    {
      rank: 2,
      value: 375804585,
      player: {
        id: 12,
        name: "kawaijb",
      },
      photo: null,
      inp: null,
      replay: null,
      stage: "ALL",
      id: 5,
      comment: "Reco normal ALL (Lx2)",
      oneCC: true,
    },
    {
      rank: 3,
      value: 351746382,
      player: {
        id: 150,
        name: "Undef",
      },
      photo:
        "http://www.hostingpics.net/viewer.php?id=813400futari15Original351746382.jpg",
      inp: null,
      replay: "",
      stage: "ALL",
      id: 8894,
      comment: "Reco Normale",
      oneCC: true,
    },
    {
      rank: 4,
      value: 326813672,
      player: {
        id: 354,
        name: "HUU",
      },
      photo: null,
      inp: null,
      replay: null,
      stage: "ALL",
      id: 6,
      comment: "Reco Normal",
      oneCC: true,
    },
    {
      rank: 5,
      value: 277218745,
      player: {
        id: 14,
        name: "Aliquantic",
      },
      photo: null,
      inp: null,
      replay: null,
      stage: "5",
      id: 7,
      comment: "Reco normal stage 5 Boss",
      oneCC: false,
    },
    {
      rank: 6,
      value: 276836578,
      player: {
        id: 161,
        name: "KAB",
      },
      photo: null,
      inp: null,
      replay: null,
      stage: "ALL",
      id: 8,
      comment: "Palm normal",
      oneCC: true,
    },
  ],
};
export default [ranking] as Ranking[];
