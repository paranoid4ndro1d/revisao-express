const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Raiz");
});

app.post("/", (req, res) => {
  res.send("Raiz - Post");
});

app.get("/produtos", (req, res) => {
  res.send("Produtos");
});

app.get("*", (req, res) => {
  res.send("404 - not found");
});

app.listen(port, () => {
  console.log("Estou rodando na porta: " + port);
});
