import Discord from "discord.js";
import { parse } from "dotenv/types";
import { getPlayer, getPlayerStats } from "./chessApi";
import { discordToken } from "./params";
import { parsePlayer, parsePlayerStats } from "./utils";

// DISCORD SETUP
const client = new Discord.Client();
client.login(discordToken);

client.on("ready", () => {
  if (client.user) {
    console.log(`Logged in as ${client.user.tag}!`);
  }
});

client.on("message", async (msg) => {
  try {
    const args = msg.content.split(" ");
    if (msg.content === "ping") {
      msg.reply(
        "Que pasa leñes? no tienes nada mejor que hacer que poner ping en discord?"
      );
    } else if (args[0] === "estadisticas") {
      const stats = parsePlayerStats(await getPlayerStats(args[1]));
      msg.reply(stats);
    } else if (args[0] === "jugador") {
      const stats = parsePlayer(await getPlayer(args[1]));
      msg.reply(stats);
    } else if (msg.content === "genarin") {
      msg.reply(`Nuestro patron, nuestro señor. Respeto 😉 `);
    } else if (msg.content === "Alvaro") {
      msg.reply("Es un personaje, siempre esta hasta el culo de tareas");
    } else if (msg.content === "necesitas un toque") {
      msg.reply("🗿 CENTRATEEEEEEEEEEE!!!!!!!! 🗿");
    } else if (msg.content === "Adrian") {
      msg.reply(
        "Deberia centrarse, le gusta fumar pitis. No se lleva bien con la tecnologia"
      );
    } else {
      return 1;
    }
  } catch (e) {
    console.log(e);
    msg.reply(e.message);
  }
});
