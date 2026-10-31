import { api } from "@/api";
import axios, { AxiosResponse } from "axios";
import { PlatformWithGameCount } from "@/models/platforms";
import { Game } from "./models/game";
import { Platform, Ranking } from "@/models/ranking";
import { Score } from "@/models/score";
import { Player } from "@/models/player";
import { RecommendationType, Recommendations } from "@/models/recommendations";
import { GameConfigurationOption } from "@/store";

export async function getScoresByPlayer(playerId: number): Promise<Score[]> {
  return fetch(`${api}/players/${playerId}/scores`).then((response) =>
    response.json()
  );
}

export async function getScoresByShmupPlayer(
  playerId: number
): Promise<Score[]> {
  return fetch(`${api}/shmup-players/${playerId}/scores`).then((response) =>
    response.json()
  );
}

// Each recommendation type has its own endpoint, so that the fast ones are not
// held back by the slow ones. Nearest and farest scored games share theirs as
// they are computed together.
const recommendationEndpoints: Array<{
  path: string;
  types: RecommendationType[];
}> = [
  { path: "unplayed-mode", types: ["unplayedMode"] },
  { path: "unplayed-difficulty", types: ["unplayedDifficulty"] },
  { path: "unplayed-game", types: ["unplayedGame"] },
  { path: "oldest-scored-game", types: ["oldestScoredGame"] },
  { path: "latest-scored-game", types: ["latestScoredGame"] },
  { path: "score-gaps", types: ["nearestScoredGame", "farestScoredGame"] },
];

async function getMyRecommendationsFrom(endpoint: {
  path: string;
  types: RecommendationType[];
}): Promise<Partial<Recommendations>> {
  const response = await fetch(`${api}/me/recommendations/${endpoint.path}`);
  // A missing recommendation comes back as an empty body
  const text = response.ok ? await response.text() : "";
  const body = text ? JSON.parse(text) : null;
  if (endpoint.types.length === 1) {
    return body ? { [endpoint.types[0]]: body } : {};
  }
  return body || {};
}

/**
 * Fetches every recommendation type in parallel, calling onLoaded as soon as
 * each one answers, with the types it settled (found or not).
 */
export function fetchMyRecommendations(
  onLoaded: (
    recommendations: Partial<Recommendations>,
    types: RecommendationType[]
  ) => void
): void {
  recommendationEndpoints.forEach((endpoint) =>
    getMyRecommendationsFrom(endpoint)
      .catch(() => ({}))
      .then((recommendations) => onLoaded(recommendations, endpoint.types))
  );
}

export async function fetchUser(): Promise<Player> {
  return fetch(`${api}/me`).then((response) => response.json());
}

export async function fetchPlatforms(): Promise<PlatformWithGameCount> {
  return fetch(`${api}/platforms`).then((response) => response.json());
}

export async function fetchPlayers(): Promise<Player[]> {
  return fetch(`${api}/players`).then((response) => response.json());
}

export async function fetchGames(): Promise<Game[]> {
  return fetch(`${api}/games`).then((response) => response.json());
}

export async function fetchMyGames(): Promise<Game[]> {
  return fetch(`${api}/me/games`).then((response) => response.json());
}

export async function fetchGame(id: number): Promise<Game> {
  return fetch(`${api}/games/${id}`).then((response) => response.json());
}

export async function fetchRankings(id: number): Promise<Ranking[]> {
  return fetch(`${api}/games/${id}/rankings`).then((response) =>
    response.json()
  );
}

export async function fetchLastScores(): Promise<Score[]> {
  return fetch(`${api}/scores`).then((response) => response.json());
}

export async function fetchScore(id: Score["id"]): Promise<Score> {
  return fetch(`${api}/scores/${id}`).then((response) => response.json());
}

export async function fetchMyLastScores(): Promise<Score[]> {
  return fetch(`${api}/me/scores`).then((response) => response.json());
}

export async function createGame(game: Partial<Game>): Promise<Response> {
  return fetch(`${api}/games`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });
}

export async function createPlayer(player: Partial<Player>): Promise<Response> {
  return fetch(`${api}/players`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });
}

function toForm(score: Partial<Score>) {
  const form = new FormData();
  Object.entries(score)
    .filter((e) => !!e[1])
    .forEach((e) => form.append(e[0], <string>e[1]));
  if (score.photo) form.append("photo", score.photo);
  if (score.inp) form.append("inp", score.inp);
  return form;
}

export async function createScore(
  score: Partial<Score>
): Promise<AxiosResponse> {
  return axios.post(`${api}/me/scores`, toForm(score), {
    headers: { "content-type": "multipart/form-data" },
  });
}

export async function editScore(score: Score): Promise<AxiosResponse> {
  return axios.post(`${api}/me/scores/${score.id}`, toForm(score), {
    headers: { "content-type": "multipart/form-data" },
  });
}

export async function deleteScore(id: Score["id"]): Promise<AxiosResponse> {
  return axios.delete(`${api}/me/scores/${id}`);
}

export async function createMode({
  game,
  mode,
}: {
  game: Game;
  mode: GameConfigurationOption;
}): Promise<AxiosResponse> {
  return axios.post(`${api}/games/${game.id}/modes`, mode);
}

export async function createDifficulty({
  game,
  difficulty,
}: {
  game: Game;
  difficulty: GameConfigurationOption;
}): Promise<AxiosResponse> {
  return axios.post(`${api}/games/${game.id}/difficulties`, difficulty);
}

export async function createStage({
  game,
  stage,
}: {
  game: Game;
  stage: GameConfigurationOption;
}): Promise<AxiosResponse> {
  return axios.post(`${api}/games/${game.id}/stages`, stage);
}

export async function createShip({
  game,
  ship,
}: {
  game: Game;
  ship: GameConfigurationOption;
}): Promise<AxiosResponse> {
  return axios.post(`${api}/games/${game.id}/ships`, ship);
}

export async function fetchPreviousUserScoreOfGames(
  gameId: number
): Promise<Score[]> {
  return fetch(`${api}/me/games/${gameId}/scores`).then((response) =>
    response.json()
  );
}

export async function createPlatforms({
  game,
  platforms,
}: {
  game: Game;
  platforms: Partial<Platform>[];
}): Promise<AxiosResponse> {
  return axios.post(`${api}/games/${game.id}/platforms`, platforms);
}
