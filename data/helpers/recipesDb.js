const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert
};

function find() {
  return db("recipes")
    .join("dishes", "dishes.id", "=", "recipes.dish_id")
    .select(
      "recipes.id",
      "recipes.name",
      "recipes.instructions",
      "recipes.created_at",
      "recipes.updated_at",
      "dishes.id as dish_id",
      "dishes.name as dish_name"
    );
}

function findById(id) {
  return db("recipes").where(id);
}

function insert(recipe) {
  return db("recipes").insert(recipe);
}

function update(id) {
  // Insert API content
}

function remove(id) {
  // Insert API content
}
