exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", tbl => {
    tbl.increments("id");
    tbl.string("name", 128);
    tbl.timestamps(true, true);
    tbl.unique("name", "uq_dishes_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
