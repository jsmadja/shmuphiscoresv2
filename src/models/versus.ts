import { Game } from "@/models/game";
import { Difficulty, Mode } from "@/models/ranking";
import { Score } from "@/models/score";
import { Player } from "@/models/player";

export interface Comparison {
  game: Game;
  difficulty: Difficulty | null;
  mode: Mode | null;
  score1: Score;
  score2: Score;
  lostByPlayer1: boolean;
  scoreGap: number;
  wonByPlayer1: boolean;
}

export interface Versus {
  player1: Player;
  player2: Player;
  comparisons: Comparison[];
}
