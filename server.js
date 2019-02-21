const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile.js");
const cors = require("cors");
const helmet = require("helmet");

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());
const db = knex(knexConfig.development);

server.get("/", (req, res) => {
  res.send("Working!");
});

// ================================================== Dishces
server.get("/api/dishes", async (req, res) => {
  try {
    const dishes = await db("dishes");
    if (dishes) {
      res.status(200).json(dishes);
    } else {
      res
        .status(404)
        .json({ message: "Could not find any dishes in the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving the dishes.",
      error
    });
  }
});

server.get("/api/dishes/:id", async (req, res) => {
  try {
    const dishes = await db("dishes").where({ id: req.params.id });
    if (dishes) {
      res.status(200).json(dishes);
    } else {
      res
        .status(404)
        .json({ message: "Could not find any dishes in the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving the dishes.",
      error
    });
  }
});

server.post("/api/dishes", async (req, res) => {

});

module.exports = server;
