const menuitems = [
  {
    name: "Chicken Tikka Masala",
    description: "Grilled chicken cooked in a creamy tomato sauce.",
    price: 12.99,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_kgqV8Ss27L0z-_0jtm97t-9B2YhE0ytyPq9B9fo3w&s",
    recipe: "Grill chicken and simmer in tomato sauce with spices.",
    averageCookingTime: 25, // in minutes
  },
  {
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes cooked in a rich buttery tomato gravy.",
    price: 10.99,
    picture:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg",
    recipe: "Cook cottage cheese cubes in tomato gravy with butter and spices.",
    averageCookingTime: 20, // in minutes
  },
  {
    name: "Tandoori Chicken",
    description: "Marinated chicken grilled in a tandoor oven.",
    price: 14.99,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRp__k0m5VBh8JbhrN-le_e9NyunAsuYfMQrHaD-aDYg&s",
    recipe:
      "Marinate chicken in yogurt and spices, then grill in a tandoor oven.",
    averageCookingTime: 30, // in minutes
  },
  {
    name: "Palak Paneer",
    description: "Cottage cheese cubes cooked in a spinach gravy.",
    price: 11.99,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzaNeNQqga0zBE0mrcDT8dnvOdbQY9iTE0ZKCXQgfrVA&s",
    recipe: "Cook cottage cheese cubes in spinach gravy with spices.",
    averageCookingTime: 22, // in minutes
  },
  {
    name: "Margherita Pizza",
    description:
      "Classic Italian pizza with tomato sauce, mozzarella, and basil.",
    price: 9.99,
    picture:
      "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza.jpg",
    recipe: "Top pizza dough with tomato sauce, mozzarella, and fresh basil.",
    averageCookingTime: 18, // in minutes
  },
  {
    name: "Spaghetti Carbonara",
    description: "Pasta with eggs, cheese, pancetta, and black pepper.",
    price: 13.99,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk19kpm8r6TitraMElvh-WdX9dZEvA1ncvWM40LXpNsw&s",
    recipe:
      "Cook pasta, then toss with eggs, cheese, pancetta, and black pepper.",
    averageCookingTime: 25, // in minutes
  },
  {
    name: "Lasagna",
    description: "Layers of pasta with meat sauce, ricotta, and mozzarella.",
    price: 12.99,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGw0_PtAqkXdsIbQjeva3stG6N0z7lkOlku2SAx_OK-Q&s",
    recipe: "Layer pasta with meat sauce, ricotta, and mozzarella, then bake.",
    averageCookingTime: 35, // in minutes
  },
  {
    name: "Chicken Alfredo",
    description: "Pasta with grilled chicken in a creamy Alfredo sauce.",
    price: 15.99,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_tpfwl3y7v7LR2S5CnSx0kz2rbYPz0RkKvWJLqhugA&s",
    recipe: "Cook pasta, then toss with grilled chicken and Alfredo sauce.",
    averageCookingTime: 28, // in minutes
  },
  {
    name: "Risotto",
    description: "Creamy Italian rice dish with mushrooms and Parmesan.",
    price: 11.99,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpyHpC8kc-ugvU6dKY84tV4_5l6mh6IKtO3GqSC1fZA&s",
    recipe:
      "Cook rice with mushrooms, broth, and Parmesan cheese until creamy.",
    averageCookingTime: 40, // in minutes
  },
  {
    name: "Tiramisu",
    description:
      "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
    price: 8.99,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDsimjdBImUQBSn4gRQqk3KUW93dLZniCtAd7wXUCVQ&s",
    recipe: "Layer coffee-soaked ladyfingers with mascarpone cheese mixture.",
    averageCookingTime: 15, // in minutes
  },
];

// Order.updateOne(
//   { _id: orderId },
//   { $set: updateFields }
// );
