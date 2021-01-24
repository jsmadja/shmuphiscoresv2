import { Difficulty, Mode } from "@/models/ranking";
import { Game } from "@/models/game";

interface Recommendation {
  game: Game;
  mode: Mode | undefined;
  difficulty: Difficulty | undefined;
}

export interface Recommendations {
  unplayedMode: Recommendation;
  unplayedDifficulty: Recommendation;
  unplayedGame: Recommendation;
  oldestScoredGame: Recommendation;
  latestScoredGame: Recommendation;
  nearestScoredGame: Recommendation;
  farestScoredGame: Recommendation;
}
