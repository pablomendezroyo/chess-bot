import { GameType, Player, PlayerStats, IsGame, GameTypes } from "./types";

export function parsePlayer(player: Player): string {
  return `🙅‍♂️ *Nombre del jugador/a* 🙆‍♀️: ${player.name} \n♝♞ *Usuario chess* ♞♝: ${player.username} \n👥 *Seguidores* 👥: ${player.followers} \n🎖 *Categoria* 🎖: ${player.status} \n♟ *Pagina de usuario* ♟: ${player.url}`;
}

export function parsePlayerStats(playerStats: PlayerStats) {
  // Game stats
  let playerStatsMessage = "";
  Object.entries(playerStats).map((item) => {
    if (item[0].trim() === "chess_daily") {
      const message = buildMessageStatsGame(item);
      playerStatsMessage += `🌅 Ajedrez diario ` + message;
    } else if (item[0].trim() === "chess_rapid") {
      const message = buildMessageStatsGame(item);
      playerStatsMessage += `⌚️ Ajedrez rapido ` + message;
    } else if (item[0].trim() === "chess_bullet") {
      const message = buildMessageStatsGame(item);
      playerStatsMessage += `⏳ Ajedrez bala ` + message;
    } else if (item[0].trim() === "chess_blitz") {
      const message = buildMessageStatsGame(item);
      playerStatsMessage += `⌛️ Ajedrez blitz ` + message;
    }
  });
  return playerStatsMessage;
  // Puzzles stats
}

function buildMessageStatsGame(stats: [string, GameType]) {
  return `*RECORD* 📊 : 🥇 ${stats[1].record.win} ganadas 🥇 | ❌ ${stats[1].record.win} perdidas ❌ | 🤏🏼 ${stats[1].record.draw} empates 🤏🏼\n`;
}
