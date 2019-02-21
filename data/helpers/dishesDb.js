const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert
};

function find() {
  return db("dishes");
}

function findById(id) {
  return db("dishes").where({ id });
}

function insert(recipe) {
  return db("dishes").insert(recipe);
}

function update(id) {
  // Insert API content
}

function remove(id) {
  // Insert API content
}
