exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Healthy Pizza", dish_id: 1, instructions: "DummyData" },
        { name: "Spicy Hot Dog", dish_id: 4, instructions: "DummyData" },
        { name: "Veggie Pizza", dish_id: 1, instructions: "DummyData" },
        { name: "Spicy Lentil Soup", dish_id: 5, instructions: "DummyData" },
        { name: "Tuna Tacos", dish_id: 2, instructions: "DummyData" },
        { name: "Spicy Tacos", dish_id: 2, instructions: "DummyData" },
        { name: "Lentil Soup", dish_id: 5, instructions: "DummyData" }
      ]);
    });
};
