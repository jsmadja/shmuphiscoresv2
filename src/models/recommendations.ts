import { Difficulty, Mode } from "@/models/ranking";
import { Game } from "@/models/game";

export interface Recommendation {
  game: Game;
  mode?: Mode;
  difficulty?: Difficulty;
}

export interface Recommendations {
  unplayedMode: Recommendation;
  unplayedDifficulty: Recommendation;
  unplayedGame: Recommendation;
  predictedGame: Recommendation;
  latestScoredGame: Recommendation;
  nearestScoredGame: Recommendation;
  farestScoredGame: Recommendation;
}

export type RecommendationType = keyof Recommendations;

export const recommendationTypes: RecommendationType[] = [
  "predictedGame",
  "unplayedGame",
  "latestScoredGame",
  "unplayedMode",
  "unplayedDifficulty",
  "nearestScoredGame",
  "farestScoredGame",
];
