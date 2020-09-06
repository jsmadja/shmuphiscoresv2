import { Difficulty, Mode, Platform, Ship, Stage } from "@/models/ranking";

export interface Game {
  id: number;
  title: string;
  cover: string;
  thread: string;
  platforms: Platform[];
  difficulties: Difficulty[];
  modes: Mode[];
  ships: Ship[];
  stages: Stage[];
}

export function getPostThreadUrl(game: Game): string {
  return game.thread.replace("viewtopic.php?", "posting.php?mode=reply&f=20&");
}
