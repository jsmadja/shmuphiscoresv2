import { api } from "@/api";
import axios, { AxiosResponse } from "axios";
import { PlatformWithGameCount } from "@/models/platforms";
import { Game } from "./models/game";
import { Ranking } from "@/models/ranking";
import { Score } from "@/models/score";
import { Player } from "@/models/player";
import { Recommendations } from "@/models/recommendations";

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

export async function getMyRecommendations(): Promise<Recommendations> {
  return fetch(`${api}/me/recommendations`).then((response) => response.json());
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

export async function fetchScore(id: number): Promise<Score> {
  return fetch(`${api}/scores/${id}`).then((response) => response.json());
}

export async function fetchMyLastScores(): Promise<Score[]> {
  return fetch(`${api}/me/scores`).then((response) => response.json());
}

export async function createGame(game): Promise<Response> {
  return fetch(`${api}/games`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });
}

export async function createPlayer(player): Promise<Response> {
  return fetch(`${api}/players`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });
}

export async function createScore(score): Promise<AxiosResponse> {
  const form = new FormData();
  Object.entries(score)
    .filter((e) => !!e[1])
    .forEach((e) => form.append(e[0], e[1] as any));
  if (score.photo) form.append("photo", score.photo);
  if (score.inp) form.append("inp", score.inp);
  return axios.post(`${api}/me/scores`, form, {
    headers: { "content-type": "multipart/form-data" },
  });
}

export async function editScore(score): Promise<AxiosResponse> {
  const form = new FormData();
  Object.entries(score)
    .filter((e) => !!e[1])
    .forEach((e) => form.append(e[0], e[1] as any));
  if (score.photo) form.append("photo", score.photo);
  if (score.inp) form.append("inp", score.inp);
  return axios.post(`${api}/me/scores/${score.id}`, form, {
    headers: { "content-type": "multipart/form-data" },
  });
}

export async function createMode({ game, mode }): Promise<AxiosResponse> {
  return axios.post(`${api}/games/${game.id}/modes`, mode);
}

export async function createDifficulty({
  game,
  difficulty,
}): Promise<AxiosResponse> {
  return axios.post(`${api}/games/${game.id}/difficulties`, difficulty);
}

export async function createStage({ game, stage }): Promise<AxiosResponse> {
  return axios.post(`${api}/games/${game.id}/stages`, stage);
}

export async function createShip({ game, ship }): Promise<AxiosResponse> {
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
}): Promise<AxiosResponse> {
  return axios.post(`${api}/games/${game.id}/platforms`, platforms);
}
