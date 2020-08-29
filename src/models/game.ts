export interface Game {
  id: number;
  title: string;
  cover: string;
  thread: string;
}

export function getPostThreadUrl(game: Game): string {
  return game.thread.replace("viewtopic.php?", "posting.php?mode=reply&f=20&");
}
