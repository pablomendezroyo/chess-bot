import dotenv from "dotenv";

dotenv.config();

// Check for TOKEN_DISCORD in the environment
if (!process.env.TOKEN_DISCORD) {
  throw Error("TOKEN_DISCORD must exist in the environment");
}
export const discordToken = process.env.TOKEN_DISCORD;
