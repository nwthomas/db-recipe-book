exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("measurements")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("measurements").insert([
        { name: "Cup" },
        { name: "Tablespoon" },
        { name: "Teaspoon" },
        { name: "Pounds" },
        { name: "Grams" },
        { name: "Ounce" }
      ]);
    });
};
