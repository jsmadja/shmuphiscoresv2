import { Player } from "./player";

export interface Score {
  player: Player;
  id: number;
  photo: string;
  value: number;
  inp: string;
}
