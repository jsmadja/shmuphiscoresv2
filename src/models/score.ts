import { Player } from "./player";
import { Mode, Stage, Difficulty, Ship, Platform } from "@/models/ranking";

export interface Score {
  player: Player;
  id: number;
  photo?: string;
  value: number;
  inp?: string;
  mode?: Mode;
  difficulty?: Difficulty;
  isTimeScore?: boolean;
  stage?: Stage;
  rank: number;
  progression?: number;
  comment?: string;
  replay?: string;
  ship?: Ship;
  platform: Platform;
}

export function toForumCode(score: Score): string {
  let message = "";

  if (score.mode != null) {
    message += `Mode : [b]${score.mode.name}[/b]\n`;
  }
  message += `Score : [b][color=#0000FF]${score.value}::[TODO:FORMATER] ${
    score.isTimeScore ? "" : "points"
  }[/color][/b]\n`;

  if (score.stage != null) {
    message += `Stage : [b][color=#BF4000]${score.stage.name}[/color][/b]\n`;
  }

  if (score.difficulty != null) {
    message += `Difficulté : [b]${score.difficulty.name}[/b]\n`;
  }

  if (score.ship != null) {
    message += `Vaisseau : [b]${score.ship.name}[/b]\n`;
  }
  message += `Support : [b]${score.platform.name}[/b]\n`;
  message += `Position : [b]${score.rank}${
    score.progression != null && score.progression > 0
      ? ` (+${score.progression})`
      : ""
  }[/b]\n`;

  if (score.comment) {
    message += `\nCommentaire : [b]${score.comment}[/b]\n`;
  }

  if (score.photo) {
    message += `\n[img]${score.photo}[/img]\n`;
  }
  if (score.replay) {
    message += `\n${score.replay}\n`;
  }
  message += `\n[size=85]Message généré depuis [url=http://hiscores.shmup.com]hiscores.shmup.com[/url].[/size]
_______________________________________________`;

  return message;
}
