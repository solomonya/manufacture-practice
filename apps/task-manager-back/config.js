import * as dotenv from "dotenv";
dotenv.config();

const Configs = Object.freeze({
  PORT: process.env.PORT
});

export { Configs };