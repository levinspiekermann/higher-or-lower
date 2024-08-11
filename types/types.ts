export interface Game {
  id: number;
  name: string;
  description: string;
  slug: string;
  question: string;
  thumbnail: string;
  created_at: Date;
}

export interface Question {
  id: number;
  game_id: number;
  name: string;
  thumbnail: string;
  value: number;
  created_at: Date;
  solved?: boolean;
}

export enum GameStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}
