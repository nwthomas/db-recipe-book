exports.seed = function(knex, Promise) {
  return knex("ingredients")
    .truncate()
    .then(function() {
      return knex("ingredients").insert([
        { name: "Tomato Sauce" },
        { name: "Pizza Crust" },
        { name: "Ketchup" },
        { name: "Mayonaise" },
        { name: "Hot Dogs" },
        { name: "Hot Dog Bun" },
        { name: "Hamburger Bun" },
        { name: "Tomatoes" },
        { name: "Mushrooms" },
        { name: "Lettuce" },
        { name: "Italian Flatbread" },
        { name: "Veggie Meat" },
        { name: "Pesto" },
        { name: "Mozzarella" },
        { name: "Lentils" },
        { name: "Salt" },
        { name: "Pepper" },
        { name: "Pickles" },
        { name: "Beans" },
        { name: "Rice" },
        { name: "Tuna" },
        { name: "Shredded Cheese" },
        { name: "Lentils" },
        { name: "Taco Shells" },
        { name: "Hot Sauce" }
      ]);
    });
};
