import { api } from "@/api";

export async function getScoresByPlayer(playerId: string) {
  return fetch(`${api}/players/${playerId}/scores`).then((response) =>
    response.json()
  );
}
