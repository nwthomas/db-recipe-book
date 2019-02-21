exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipeIngredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipeIngredients").insert([
        { recipe_id: 1, ingredients_id: 22, amount: 1.34, measurements_id: 1 },
        { recipe_id: 1, ingredients_id: 1, amount: 0.5, measurements_id: 2 },
        { recipe_id: 1, ingredients_id: 2, amount: 2.3, measurements_id: 3 },
        { recipe_id: 2, ingredients_id: 3, amount: 6, measurements_id: 4 },
        { recipe_id: 2, ingredients_id: 4, amount: 1, measurements_id: 5 },
        { recipe_id: 2, ingredients_id: 5, amount: 2.8, measurements_id: 6 },
        { recipe_id: 2, ingredients_id: 6, amount: 9, measurements_id: 1 },
        { recipe_id: 3, ingredients_id: 1, amount: 3, measurements_id: 2 },
        { recipe_id: 3, ingredients_id: 2, amount: 2.98, measurements_id: 3 },
        { recipe_id: 3, ingredients_id: 8, amount: 1.4, measurements_id: 4 },
        { recipe_id: 3, ingredients_id: 9, amount: 0.9, measurements_id: 5 },
        { recipe_id: 3, ingredients_id: 13, amount: 2.3, measurements_id: 6 },
        { recipe_id: 4, ingredients_id: 17, amount: 3.56, measurements_id: 1 },
        { recipe_id: 4, ingredients_id: 15, amount: 1.34, measurements_id: 2 },
        { recipe_id: 4, ingredients_id: 16, amount: 0.5, measurements_id: 3 },
        { recipe_id: 5, ingredients_id: 21, amount: 2.3, measurements_id: 4 },
        { recipe_id: 5, ingredients_id: 24, amount: 6, measurements_id: 5 },
        { recipe_id: 5, ingredients_id: 20, amount: 1, measurements_id: 6 },
        { recipe_id: 5, ingredients_id: 19, amount: 2.8, measurements_id: 1 },
        { recipe_id: 6, ingredients_id: 21, amount: 9, measurements_id: 2 },
        { recipe_id: 6, ingredients_id: 24, amount: 3, measurements_id: 3 },
        { recipe_id: 6, ingredients_id: 20, amount: 2.98, measurements_id: 4 },
        { recipe_id: 6, ingredients_id: 19, amount: 1.4, measurements_id: 5 },
        { recipe_id: 6, ingredients_id: 25, amount: 0.9, measurements_id: 6 },
        { recipe_id: 7, ingredients_id: 23, amount: 2.3, measurements_id: 1 },
        { recipe_id: 7, ingredients_id: 16, amount: 13.56, measurements_id: 2 }
      ]);
    });
};
