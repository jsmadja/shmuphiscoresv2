import { Score } from "@/models/score";
import _ from "lodash";
import { Player } from "@/models/player";

export interface Mode {
  id: number;
  name: string;
  scoreType?: string;
}

export interface Difficulty {
  id: number;
  name: string;
}

export interface Ship {
  id: number;
  name: string;
}

export interface Platform {
  id: number;
  name: string;
}

export interface Stage {
  id: number;
  name: string;
}

export interface Ranking {
  mode?: Mode;
  difficulty?: Difficulty;
  scores: Score[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function cartesianProductOf(a, b) {
  return _.reduce(
    // eslint-disable-next-line prefer-rest-params
    arguments,
    function (a, b) {
      return _.flatten(
        _.map(a, function (x) {
          return _.map(b, function (y) {
            return x.concat(y);
          });
        })
      );
    },
    [[]]
  );
}

function toMode(params) {
  return params[1]
    ? {
        id: Math.random(),
        name: params[1],
      }
    : undefined;
}

function toDifficulty(params) {
  return params[0]
    ? {
        id: Math.random(),
        name: params[0],
      }
    : undefined;
}

function toRanking(stages: string[], ships: string[]): (params) => Ranking {
  return (params): Ranking => ({
    mode: toMode(params),
    difficulty: toDifficulty(params),
    scores: [1, 2, 3].map((rank) => {
      const stage = _.sample(stages);
      return {
        rank: rank,
        player: { id: Math.random(), name: `player${rank}` } as Player,
        value: (4 - rank) * 100000,
        stage: stage,
        ship: { id: 0, name: _.sample(ships) } as Ship,
        comment: `With ${_.sample(ships)} ship`,
        oneCC: stage === "ALL",
        inp: _.sample(["http://", null]),
        replay: _.sample(["https://www.youtube.com/watch?v=AxzNFPLstwQ", null]),
        photo: _.sample([
          "https://hiscores.shmup.com/photos/1562457741219-0004.png",
          null,
        ]),
      };
    }) as Score[],
  });
}

export function generateRankings(
  difficulties: string[],
  modes: string[],
  stages: string[],
  ships: string[]
): Ranking[] {
  return cartesianProductOf(difficulties, modes).map(toRanking(stages, ships));
}
