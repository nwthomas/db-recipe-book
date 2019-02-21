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

// ================================================== Dishes
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
    const dish = await db("dishes").where({ id: req.params.id });
    const recipes = await db("recipes").where({ dish_id: req.params.id });
    if (dish) {
      res.status(200).json({ dish, recipes });
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
  if (!req.body) {
    return res
      .status(400)
      .json("Please include a name for the dish and try again.");
  }
  try {
    const dish = await db("dishes").insert({ name: req.body });
    if (dish) {
      res
        .status(200)
        .json({ message: "The dish was created successfully.", dish });
    } else {
      res
        .status(404)
        .json({ message: "The dish could not be created at this time." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error creating the dish in the database."
    });
  }
});

// ================================================== Recipes
server.use("/api/recipes", async (req, res) => {
  try {
    const recipes = await db("recipes")
      .join("dishes", "dishes.id", "=", "recipes.dish_id")
      .select(
        "recipes.id",
        "recipes.name",
        "recipes.created_at",
        "recipes.updated_at",
        "dishes.id as dish_id",
        "dishes.name as dish_name"
      );
    if (recipes) {
      res.status(200).json({
        message: "Recipes retrieved from the database successfully.",
        recipes
      });
    } else {
      res
        .status(404)
        .json({ message: "No recipes could be found in the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving the recipes from the database.",
      error
    });
  }
});
module.exports = server;
