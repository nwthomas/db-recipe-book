exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipeIngredients", tbl => {
    tbl.increments("id");
    tbl.integer("recipe_id").unsigned();
    tbl.integer("ingredients_id").unsigned();
    tbl.string("amount", 255);
    tbl.integer("measurements_id").unsigned();
    tbl.foreign("recipe_id").references("recipes.id");
    tbl.foreign("ingredients_id").references("ingredients.id");
    tbl.foreign("measurements_id").references("measurements.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipeIngredients");
};
