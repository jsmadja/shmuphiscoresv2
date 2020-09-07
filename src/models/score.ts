import { Player } from "./player";
import { Mode, Stage, Difficulty, Ship, Platform } from "@/models/ranking";
import { formatTime, formatNumber } from "../formaters";
import { Game } from "@/models/game";

export interface Score {
  createdAt?: string;
  player: Player;
  id: number;
  photo?: string | null;
  value: number;
  inp?: string | null;
  mode?: Mode;
  difficulty?: Difficulty;
  isTimeScore?: boolean;
  stage?: Stage | null | undefined;
  rank: number;
  progression?: number | null;
  comment?: string;
  replay?: string | null;
  ship?: Ship | null;
  platform?: Platform;
  game?: Game;
  oneCC?: boolean;
  onecc?: boolean;
  "1CC"?: boolean;
  gapWithPreviousScore?: number | null;
  timeScore?: boolean;
  gameTitle?: string;
  stageName?: string;
  vip?: boolean;
  createdSinceInFrench?: string;
}

export function toForumCode(score: Score): string {
  let message = "";

  if (score.mode != null) {
    message += `Mode : [b]${score.mode.name}[/b]\n`;
  }
  message += `Score : [b][color=#0000FF]${
    score.mode && score.mode.scoreType === "timer"
      ? formatTime(score.value)
      : formatNumber(score.value)
  } ${score.isTimeScore ? "" : "points"}[/color][/b]\n`;

  if (score.stage != null) {
    message += `Stage : [b][color=#BF4000]${score.stage.name}[/color][/b]\n`;
  }

  if (score.difficulty != null) {
    message += `Difficulté : [b]${score.difficulty.name}[/b]\n`;
  }

  if (score.ship != null) {
    message += `Vaisseau : [b]${score.ship.name}[/b]\n`;
  }
  if (score.platform) {
    message += `Support : [b]${score.platform.name}[/b]\n`;
  }
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
