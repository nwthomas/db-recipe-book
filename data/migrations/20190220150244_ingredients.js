exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", tbl => {
    tbl.increments("id");
    tbl.string("name", 255);
    tbl.timestamps(true, true);
    tbl.unique("name", "uq_ingredients_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
