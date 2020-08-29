import { Score, toForumCode } from "@/models/score";

test("generate mandatory fields message", () => {
  const score = {
    rank: 1,
    value: 99,
    platform: {
      id: 1,
      name: "NG",
    },
  } as Score;
  expect(toForumCode(score))
    .toBe(`Score : [b][color=#0000FF]99::[TODO:FORMATER] points[/color][/b]
Support : [b]NG[/b]
Position : [b]1[/b]

[size=85]Message généré depuis [url=http://hiscores.shmup.com]hiscores.shmup.com[/url].[/size]
_______________________________________________`);
});

test("generate all fields message", () => {
  const score = {
    rank: 1,
    value: 99,
    mode: {
      id: 1,
      name: "ARCADE",
    },
    difficulty: {
      id: 1,
      name: "EASY",
    },
    ship: {
      id: 1,
      name: "Type A",
    },
    stage: {
      id: 1,
      name: "1-ALL",
    },
    platform: {
      id: 1,
      name: "NG",
    },
    photo: "http://my.img.png",
    inp: "http://my.inp",
    progression: 3,
    comment: "my comment",
    replay: "https://youtube.com/12345",
  } as Score;
  expect(toForumCode(score)).toBe(`Mode : [b]ARCADE[/b]
Score : [b][color=#0000FF]99::[TODO:FORMATER] points[/color][/b]
Stage : [b][color=#BF4000]1-ALL[/color][/b]
Difficulté : [b]EASY[/b]
Vaisseau : [b]Type A[/b]
Support : [b]NG[/b]
Position : [b]1 (+3)[/b]

Commentaire : [b]my comment[/b]

[img]http://my.img.png[/img]

https://youtube.com/12345

[size=85]Message généré depuis [url=http://hiscores.shmup.com]hiscores.shmup.com[/url].[/size]
_______________________________________________`);
});
