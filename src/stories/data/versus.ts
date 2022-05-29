import { Versus } from "@/models/versus";

const versus: Versus = {
  player1: {
    id: 1,
    createdAt: "2013-11-29T19:13:32.000+00:00",
    name: "anzymus",
    shmupUserId: 33489,
    hideMedals: false,
    vip: true,
    superAdministrator: true,
    administrator: true,
    authenticated: true,
  },
  player2: {
    id: 42,
    createdAt: "2013-11-30T16:59:00.000+00:00",
    name: "Mickey",
    shmupUserId: 312,
    hideMedals: false,
    vip: true,
    superAdministrator: false,
    administrator: true,
    authenticated: true,
  },
  comparisons: [
    {
      game: {
        id: 59,
        createdAt: "2013-12-27T21:34:26.000+00:00",
        thread: "http://forum.shmup.com/viewtopic.php?t=9571",
        cover: "/covers/59.jpg",
        title: "Andro Dunos",
        platforms: [
          {
            id: 126,
            createdAt: "2013-12-27T21:34:26.000+00:00",
            name: "MAME",
          },
          {
            id: 125,
            createdAt: "2013-12-27T21:34:26.000+00:00",
            name: "NG",
          },
        ],
        difficulties: [
          {
            id: 114,
            createdAt: "2013-12-27T21:34:26.000+00:00",
            name: "MVS",
            sortOrder: 114,
          },
        ],
        modes: [],
        ships: [],
        stages: [],
      },
      difficulty: {
        id: 114,
        createdAt: "2013-12-27T21:34:26.000+00:00",
        name: "MVS",
        sortOrder: 114,
      },
      mode: null,
      score1: {
        id: 5356,
        createdAt: "2014-02-20T22:21:20.000+00:00",
        game: {
          id: 59,
          createdAt: "2013-12-27T21:34:26.000+00:00",
          thread: "http://forum.shmup.com/viewtopic.php?t=9571",
          cover: "/covers/59.jpg",
          title: "Andro Dunos",
          platforms: [
            {
              id: 126,
              createdAt: "2013-12-27T21:34:26.000+00:00",
              name: "MAME",
            },
            {
              id: 125,
              createdAt: "2013-12-27T21:34:26.000+00:00",
              name: "NG",
            },
          ],
          difficulties: [
            {
              id: 114,
              createdAt: "2013-12-27T21:34:26.000+00:00",
              name: "MVS",
              sortOrder: 114,
            },
          ],
          modes: [],
          ships: [],
          stages: [],
        },
        player: {
          id: 1,
          createdAt: "2013-11-29T19:13:32.000+00:00",
          name: "anzymus",
          shmupUserId: 33489,
          hideMedals: false,
          vip: true,
          superAdministrator: true,
          administrator: true,
          authenticated: true,
        },
        stage: {
          id: 993,
          createdAt: "2013-12-27T21:34:26.000+00:00",
          name: "1ALL",
          sortOrder: 9930,
        },
        mode: null,
        difficulty: {
          id: 114,
          createdAt: "2013-12-27T21:34:26.000+00:00",
          name: "MVS",
          sortOrder: 114,
        },
        ship: null,
        platform: {
          id: 125,
          createdAt: "2013-12-27T21:34:26.000+00:00",
          name: "NG",
        },
        comment: "1CC ! Mon premier sur un shmup !",
        photo: "http://i.imgur.com/moFEgRa.jpg",
        inp: null,
        replay: "",
        value: 1190470,
        onecc: true,
        progression: null,
        rank: 2,
        gapWithPreviousScore: null,
        timeScore: false,
        gameTitle: "Andro Dunos MVS",
        "1CC": true,
        stageName: "1ALL",
        vip: true,
        createdSinceInFrench: "il y a 7 ans",
      },
      score2: {
        id: 8276,
        createdAt: "2014-11-30T18:48:57.000+00:00",
        game: {
          id: 59,
          createdAt: "2013-12-27T21:34:26.000+00:00",
          thread: "http://forum.shmup.com/viewtopic.php?t=9571",
          cover: "/covers/59.jpg",
          title: "Andro Dunos",
          platforms: [
            {
              id: 126,
              createdAt: "2013-12-27T21:34:26.000+00:00",
              name: "MAME",
            },
            {
              id: 125,
              createdAt: "2013-12-27T21:34:26.000+00:00",
              name: "NG",
            },
          ],
          difficulties: [
            {
              id: 114,
              createdAt: "2013-12-27T21:34:26.000+00:00",
              name: "MVS",
              sortOrder: 114,
            },
          ],
          modes: [],
          ships: [],
          stages: [],
        },
        player: {
          id: 42,
          createdAt: "2013-11-30T16:59:00.000+00:00",
          name: "Mickey",
          shmupUserId: 312,
          hideMedals: false,
          vip: true,
          superAdministrator: false,
          administrator: true,
          authenticated: true,
        },
        stage: {
          id: 987,
          createdAt: "2013-12-27T21:34:26.000+00:00",
          name: "1-5",
          sortOrder: 9870,
        },
        mode: null,
        difficulty: {
          id: 114,
          createdAt: "2013-12-27T21:34:26.000+00:00",
          name: "MVS",
          sortOrder: 114,
        },
        ship: null,
        platform: {
          id: 126,
          createdAt: "2013-12-27T21:34:26.000+00:00",
          name: "MAME",
        },
        comment: "",
        photo: "",
        inp: null,
        replay: "",
        value: 510150,
        onecc: false,
        progression: null,
        rank: 7,
        gapWithPreviousScore: null,
        timeScore: false,
        gameTitle: "Andro Dunos MVS",
        "1CC": false,
        stageName: "1-5",
        vip: true,
        createdSinceInFrench: "il y a 6 ans",
      },
      lostByPlayer1: false,
      scoreGap: 133,
      wonByPlayer1: true,
    },
  ],
};
export default versus;
