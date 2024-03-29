import { Score } from "@/models/score";
import router from "./index";

export function goToScore(score: Score): void {
  router.push(`/score/${score.id}`);
}
