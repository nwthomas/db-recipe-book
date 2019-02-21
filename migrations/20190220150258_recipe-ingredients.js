exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipeIngredients", tbl => {
    tbl.increments("id");
    tbl.integer("recipe_id").unsigned();
    tbl.integer("ingredients_id").unsigned();
    tbl.string("name", 255);
    tbl.integer("measurement_id").unsigned();
    tbl.foreign("recipe_id").references("recipes.id");
    tbl.foreign("ingredients_id").references("ingredients.id");
    tbl.foreign("measurement_id").references("measurements.id");
  });
};

exports.down = function(knex, Promise) {
  return knes.schema.dropTableIfExists("recipeIngredients");
};
