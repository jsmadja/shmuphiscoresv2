export interface Mode {
  id: number;
  name: string;
  scoreType: string;
}

export interface Difficulty {
  id: number;
  name: string;
}

export interface Ship {
  id: number;
  name: string;
}

export interface Platform {
  id: number;
  name: string;
}

export interface Stage {
  id: number;
  name: string;
}

export interface Ranking {
  mode: Mode;
}
