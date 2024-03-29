import { Game } from "@/models/game";

export default {
  id: 2,
  createdAt: "2013-11-29T19:12:15.000+00:00",
  thread: "http://forum.shmup.com/viewtopic.php?f=20&t=17554",
  cover: "/covers/2.jpg",
  title: "Mushihimesama Futari",
  platforms: [
    {
      id: 4,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "MAME",
    },
    {
      id: 2,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "PCB",
    },
    {
      id: 3,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "X360",
    },
  ],
  difficulties: [
    {
      id: 4,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "Original",
      sortOrder: 1,
    },
    {
      id: 5,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "Maniac",
      sortOrder: 2,
    },
    {
      id: 6,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "God",
      sortOrder: 3,
    },
    {
      id: 7,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "Ultra",
      sortOrder: 4,
    },
  ],
  modes: [
    {
      id: 1,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "Version 1.5",
      sortOrder: 1,
      scoreType: "",
    },
    {
      id: 2,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "Black Label",
      sortOrder: 2,
      scoreType: "",
    },
    {
      id: 3,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "Version arrange",
      sortOrder: 3,
      scoreType: "",
    },
    {
      id: 1048,
      createdAt: "2015-11-06T16:02:30.000+00:00",
      name: "Version 1.01",
      sortOrder: 4,
      scoreType: null,
    },
  ],
  ships: [
    {
      id: 1,
      name: "Type A",
    },
  ],
  stages: [
    {
      id: 5,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "1",
      sortOrder: 500,
    },
    {
      id: 274,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "1 BOSS",
      sortOrder: 550,
    },
    {
      id: 6,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "2",
      sortOrder: 600,
    },
    {
      id: 275,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "2 BOSS",
      sortOrder: 650,
    },
    {
      id: 7,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "3",
      sortOrder: 700,
    },
    {
      id: 276,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "3 BOSS",
      sortOrder: 750,
    },
    {
      id: 8,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "4",
      sortOrder: 800,
    },
    {
      id: 277,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "4 BOSS",
      sortOrder: 850,
    },
    {
      id: 9,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "5",
      sortOrder: 900,
    },
    {
      id: 278,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "5 BOSS",
      sortOrder: 950,
    },
    {
      id: 279,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "True Last Boss",
      sortOrder: 3000,
    },
    {
      id: 10,
      createdAt: "2013-11-29T19:12:15.000+00:00",
      name: "ALL",
      sortOrder: 3100,
    },
  ],
} as Game;
