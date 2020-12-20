import { Player, PlayerStats } from "./types";

const ChessWebAPI = require("chess-web-api");

// CHESS SETUP
const chessAPI = new ChessWebAPI();

export async function getPlayer(player: string): Promise<Player> {
  try {
    const response = await chessAPI.getPlayer(player);
    return response.body;
  } catch (e) {
    throw Error("Error getting player");
  }
}

export async function getPlayerStats(player: string): Promise<PlayerStats> {
  try {
    const response = await chessAPI.getPlayerStats(player);
    return response.body;
  } catch (e) {
    throw Error("Error getting player");
  }
}
