import { api } from "@/api";
import axios from "axios";

export async function getScoresByPlayer(playerId: string) {
  return fetch(`${api}/players/${playerId}/scores`).then((response) =>
    response.json()
  );
}

export async function getMyRecommendations() {
  return fetch(`${api}/me/recommendations`).then((response) => response.json());
}

export async function fetchUser() {
  return fetch(`${api}/me`).then((response) => response.json());
}

export async function fetchPlatforms() {
  return fetch(`${api}/platforms`).then((response) => response.json());
}

export async function fetchPlayers() {
  return fetch(`${api}/players`).then((response) => response.json());
}

export async function fetchGames() {
  return fetch(`${api}/games`).then((response) => response.json());
}

export async function fetchMyGames() {
  return fetch(`${api}/me/games`).then((response) => response.json());
}

export async function fetchGame(id) {
  return fetch(`${api}/games/${id}`).then((response) => response.json());
}

export async function fetchRankings(id) {
  return fetch(`${api}/games/${id}/rankings`).then((response) =>
    response.json()
  );
}

export async function fetchLastScores() {
  return fetch(`${api}/scores`).then((response) => response.json());
}

export async function fetchScore(id) {
  return fetch(`${api}/scores/${id}`).then((response) => response.json());
}

export async function fetchMyLastScores() {
  return fetch(`${api}/me/scores`).then((response) => response.json());
}

export async function createGame(game) {
  return fetch(`${api}/games`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });
}

export async function createScore(score) {
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

export async function editScore(score) {
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

export async function createMode({ game, mode }) {
  return axios.post(`${api}/games/${game.id}/modes`, mode);
}

export async function createDifficulty({ game, difficulty }) {
  return axios.post(`${api}/games/${game.id}/difficulties`, difficulty);
}

export async function createStage({ game, stage }) {
  return axios.post(`${api}/games/${game.id}/stages`, stage);
}

export async function createShip({ game, ship }) {
  return axios.post(`${api}/games/${game.id}/ships`, ship);
}

export async function createPlatforms({ game, platforms }) {
  return axios.post(`${api}/games/${game.id}/platforms`, platforms);
}
