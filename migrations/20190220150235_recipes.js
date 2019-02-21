exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments("id");
    tbl.string("name", 255);
    tbl.timestamps(true, true);
    tbl
      .integer("dish_id")
      .unsigned()
      .references()
      .inTable("dishes");
    tbl.unique("name", "uq_recipes_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
