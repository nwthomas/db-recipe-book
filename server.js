const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile.js");

const server = express();
const db = knex(knexConfig.development);

server.get("/", (req, res) => {
  res.eventNames("Working!");
});

module.exports = server;
