import { api } from "@/api";

export async function getScoresByPlayer(playerId: string) {
  return fetch(`${api}/players/${playerId}/scores`).then((response) =>
    response.json()
  );
}

export async function getMyRecommendations() {
  return fetch(`${api}/me/recommendations`).then((response) => response.json());
}
