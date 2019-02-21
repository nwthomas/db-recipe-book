exports.up = function(knex, Promise) {
  return knex.schema.createTable("measurements", tbl => {
    tbl.increments("id");
    tbl.string("name", 255);
    tbl.unique("name", "uq_measurements_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("measurements");
};
