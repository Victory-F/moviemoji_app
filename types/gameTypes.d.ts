export type GameState = "lobby" | "running" | "ended";

type Game = {
  id: string;
  rounds: number;
  players: Player[];
  state: GameState;
};

type Player = {
  id: string;
  name: string;
  imgUrl: string;
  score: number;
  state: "explainer" | "guesser";
};

type PlayerInit = Omit<Player, "id" | "score" | "state">;

type Movie = {
  name: string;
  poster: string;
};

type Guess = {
  playerId: string;
  playerName: string;
  text: string;
  state: "red" | "yellow" | "green";
};