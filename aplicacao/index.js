const express = require("express");
const Redis = require("ioredis");
const redis = new Redis(6379, "banco");
const app = express();

app.get("/", async (req, res) => {
  let total = await redis.get("total");

  total = Number(total) + 1;

  await redis.set("total", total);

  res.send(`Total de acessos na página foi: ${total}`);
});

app.listen(3000, () => {
  console.log("Servidor está rodando na porta 3000");
});
