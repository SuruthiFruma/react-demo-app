export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface Restaurant {
  id: number;
  name: string;
  image: string;
  address: string;
  rating: number;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Burger Palace",
    image:
      "https://production-assets.gousto.co.uk/build/d3fde8bd6c2b4dc47316fa1cf83beb98b39951c1/856bca25c1c2cbaf608d598f844c1a05.jpg",
    address: "123 Main St, City",
    rating: 4.5,
    menu: [
      {
        id: 1,
        name: "Classic Burger",
        price: 9.99,
        description: "Juicy beef patty with fresh toppings",
      },
      {
        id: 2,
        name: "Cheeseburger",
        price: 10.99,
        description: "Classic burger with melted cheese",
      },
      {
        id: 3,
        name: "Veggie Burger",
        price: 8.99,
        description: "Plant-based patty with fresh veggies",
      },
    ],
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    address: "456 Elm St, Town",
    rating: 4.2,
    menu: [
      {
        id: 4,
        name: "Margherita",
        price: 12.99,
        description: "Classic tomato and mozzarella pizza",
      },
      {
        id: 5,
        name: "Pepperoni",
        price: 14.99,
        description: "Spicy pepperoni with melted cheese",
      },
      {
        id: 6,
        name: "Vegetarian",
        price: 13.99,
        description: "Assorted vegetables on a crispy crust",
      },
    ],
  },
  {
    id: 3,
    name: "Sushi Delight",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    address: "789 Oak Rd, Village",
    rating: 4.7,
    menu: [
      {
        id: 7,
        name: "California Roll",
        price: 8.99,
        description: "Crab, avocado, and cucumber roll",
      },
      {
        id: 8,
        name: "Salmon Nigiri",
        price: 10.99,
        description: "Fresh salmon over pressed rice",
      },
      {
        id: 9,
        name: "Tuna Sashimi",
        price: 12.99,
        description: "Sliced raw tuna",
      },
    ],
  },
  {
    id: 4,
    name: "Taco Fiesta",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/copycat-hamburger-helper1-1659463591.jpg?crop=0.668xw:1.00xh;0.176xw,0&resize=640:*",
    address: "101 Pine Ave, Suburb",
    rating: 4.3,
    menu: [
      {
        id: 10,
        name: "Beef Taco",
        price: 3.99,
        description: "Seasoned ground beef in a crispy shell",
      },
      {
        id: 11,
        name: "Chicken Quesadilla",
        price: 7.99,
        description: "Grilled chicken and cheese in a flour tortilla",
      },
      {
        id: 12,
        name: "Veggie Burrito",
        price: 8.99,
        description: "Bean and vegetable mix wrapped in a large tortilla",
      },
    ],
  },
  {
    id: 5,
    name: "Pasta Paradise",
    image:
      "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fsadya-1715257862_5f36bf5e10a36cfeadb5.webp&w=3840&q=75",
    address: "202 Maple Dr, Downtown",
    rating: 4.6,
    menu: [
      {
        id: 13,
        name: "Spaghetti Bolognese",
        price: 11.99,
        description: "Classic meat sauce over spaghetti",
      },
      {
        id: 14,
        name: "Fettuccine Alfredo",
        price: 12.99,
        description: "Creamy parmesan sauce with fettuccine",
      },
      {
        id: 15,
        name: "Penne Arrabbiata",
        price: 10.99,
        description: "Spicy tomato sauce with penne pasta",
      },
    ],
  },
  {
    id: 6,
    name: "Curry House",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-coO6G2IuI734BMaQkhQk0NrYguFtEhJ8dw&s",
    address: "303 Cedar Ln, Eastside",
    rating: 4.4,
    menu: [
      {
        id: 16,
        name: "Chicken Tikka Masala",
        price: 13.99,
        description: "Tender chicken in a creamy tomato sauce",
      },
      {
        id: 17,
        name: "Vegetable Biryani",
        price: 11.99,
        description: "Fragrant rice dish with mixed vegetables",
      },
      {
        id: 18,
        name: "Lamb Rogan Josh",
        price: 14.99,
        description: "Aromatic lamb curry with a rich gravy",
      },
    ],
  },
  {
    id: 7,
    name: "Seafood Shack",
    image:
      "https://cdn.prod.website-files.com/5e86c7170f1ab21474c3f2a4/5ef1cecb899ee03d62c90355_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpeg",
    address: "404 Beach Rd, Coastville",
    rating: 4.5,
    menu: [
      {
        id: 19,
        name: "Fish and Chips",
        price: 12.99,
        description: "Crispy battered fish with golden fries",
      },
      {
        id: 20,
        name: "Grilled Salmon",
        price: 15.99,
        description: "Fresh salmon fillet with lemon butter sauce",
      },
      {
        id: 21,
        name: "Shrimp Scampi",
        price: 14.99,
        description: "Garlic butter shrimp over linguine",
      },
    ],
  },
  {
    id: 8,
    name: "Veggie Delight",
    image:
      "https://images.picxy.com/cache/2021/3/26/3b5bb0917ad30902c09a4cce71f716a4.jpg",
    address: "505 Green St, Eco Park",
    rating: 4.3,
    menu: [
      {
        id: 22,
        name: "Quinoa Bowl",
        price: 10.99,
        description: "Nutrient-rich quinoa with roasted vegetables",
      },
      {
        id: 23,
        name: "Impossible Burger",
        price: 12.99,
        description: "Plant-based patty with all the fixings",
      },
      {
        id: 24,
        name: "Cauliflower Wings",
        price: 8.99,
        description: "Crispy cauliflower bites with buffalo sauce",
      },
    ],
  },
  {
    id: 9,
    name: "BBQ Pit",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfR6QS0Jda7nwIK4qy1bSXSRVzJmQxmt0LA&s",
    address: "606 Smoke Rd, Grilltown",
    rating: 4.6,
    menu: [
      {
        id: 25,
        name: "Pulled Pork Sandwich",
        price: 11.99,
        description: "Slow-cooked pork with tangy BBQ sauce",
      },
      {
        id: 26,
        name: "Beef Brisket",
        price: 14.99,
        description: "Tender smoked brisket slices",
      },
      {
        id: 27,
        name: "BBQ Ribs",
        price: 16.99,
        description: "Fall-off-the-bone pork ribs with house rub",
      },
    ],
  },
  {
    id: 10,
    name: "Breakfast All Day",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
    address: "707 Sunrise Ave, Morning Hills",
    rating: 4.2,
    menu: [
      {
        id: 28,
        name: "Pancake Stack",
        price: 8.99,
        description: "Fluffy pancakes with maple syrup",
      },
      {
        id: 29,
        name: "Eggs Benedict",
        price: 11.99,
        description: "Poached eggs and ham on English muffin with hollandaise",
      },
      {
        id: 30,
        name: "Breakfast Burrito",
        price: 9.99,
        description: "Scrambled eggs, cheese, and bacon wrapped in a tortilla",
      },
    ],
  },
  {
    id: 11,
    name: "Mediterranean Flavors",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplnxCy8y-6X9c0RAENrQcRD4987oAT2AioA&s",
    address: "808 Olive Grove, Seaside",
    rating: 4.5,
    menu: [
      {
        id: 31,
        name: "Gyros Plate",
        price: 12.99,
        description: "Seasoned meat with pita, tzatziki, and Greek salad",
      },
      {
        id: 32,
        name: "Falafel Wrap",
        price: 9.99,
        description: "Crispy falafel balls with tahini sauce in a wrap",
      },
      {
        id: 33,
        name: "Moussaka",
        price: 13.99,
        description: "Layered eggplant and ground meat casserole",
      },
    ],
  },
  {
    id: 12,
    name: "Wok & Roll",
    image:
      "https://img.veenaworld.com/wp-content/uploads/2022/10/Famous-Foods-of-Mysore-%E2%80%93-Dishes-You-Should-Try-on-Your-Next-Vacation.jpg",
    address: "909 Dragon St, Chinatown",
    rating: 4.4,
    menu: [
      {
        id: 34,
        name: "Kung Pao Chicken",
        price: 11.99,
        description: "Spicy stir-fried chicken with peanuts",
      },
      {
        id: 35,
        name: "Beef and Broccoli",
        price: 12.99,
        description: "Tender beef slices with crisp broccoli in oyster sauce",
      },
      {
        id: 36,
        name: "Vegetable Lo Mein",
        price: 10.99,
        description: "Stir-fried noodles with mixed vegetables",
      },
    ],
  },
  {
    id: 13,
    name: "Sandwich Spot",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg",
    address: "1010 Bread St, Deli District",
    rating: 4.3,
    menu: [
      {
        id: 37,
        name: "Club Sandwich",
        price: 9.99,
        description: "Triple-decker with turkey, bacon, and avocado",
      },
      {
        id: 38,
        name: "Philly Cheesesteak",
        price: 11.99,
        description: "Thinly sliced beef with melted cheese on a hoagie roll",
      },
      {
        id: 39,
        name: "Veggie Panini",
        price: 8.99,
        description: "Grilled vegetables and pesto on ciabatta bread",
      },
    ],
  },
  {
    id: 14,
    name: "Pho King Good",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60ESigzhGqn4I8WauWODhfugXr-A1b9qGow&s",
    address: "1111 Noodle Ave, Little Saigon",
    rating: 4.6,
    menu: [
      {
        id: 40,
        name: "Beef Pho",
        price: 10.99,
        description: "Rice noodles in savory broth with sliced beef",
      },
      {
        id: 41,
        name: "Banh Mi",
        price: 7.99,
        description: "Vietnamese sandwich with pickled vegetables and meat",
      },
      {
        id: 42,
        name: "Spring Rolls",
        price: 5.99,
        description: "Fresh rice paper rolls with shrimp and herbs",
      },
    ],
  },
  {
    id: 15,
    name: "Teppanyaki Grill",
    image:
      "https://cdn.shopify.com/s/files/1/0325/1820/9671/files/imag38.jpg?v=1632155767",
    address: "1212 Hibachi Rd, Japan Town",
    rating: 4.7,
    menu: [
      {
        id: 43,
        name: "Steak and Shrimp",
        price: 18.99,
        description: "Grilled steak and shrimp with vegetables",
      },
      {
        id: 44,
        name: "Chicken Teriyaki",
        price: 14.99,
        description: "Grilled chicken with sweet teriyaki sauce",
      },
      {
        id: 45,
        name: "Vegetable Stir Fry",
        price: 12.99,
        description: "Assorted vegetables grilled to perfection",
      },
    ],
  },
  {
    id: 16,
    name: "Gelato Dreams",
    image:
      "https://badgut.org/wp-content/uploads/Image-Content-IBS-the-foods-you-can-eat.png",
    address: "1313 Scoop St, Little Italy",
    rating: 4.8,
    menu: [
      {
        id: 46,
        name: "Stracciatella Gelato",
        price: 4.99,
        description: "Creamy vanilla with chocolate chips",
      },
      {
        id: 47,
        name: "Pistachio Gelato",
        price: 4.99,
        description: "Rich and nutty pistachio flavor",
      },
      {
        id: 48,
        name: "Fruit Sorbet",
        price: 4.5,
        description: "Refreshing dairy-free fruit sorbet",
      },
    ],
  },
  {
    id: 17,
    name: "Steakhouse 17",
    image:
      "https://www.southernliving.com/thmb/k5d30JGZdhuwAR6bxpl2xToWJI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-old-fashioned-chicken-pot-pie-3x2-1662-c97054245e034c19b31f2a63cdc8a252.jpg",
    address: "1414 Grill Ave, Meatville",
    rating: 4.6,
    menu: [
      {
        id: 49,
        name: "Ribeye Steak",
        price: 24.99,
        description: "12oz ribeye cooked to your liking",
      },
      {
        id: 50,
        name: "Filet Mignon",
        price: 27.99,
        description: "8oz tender filet with garlic butter",
      },
      {
        id: 51,
        name: "Grilled Salmon",
        price: 19.99,
        description: "Fresh salmon fillet with lemon dill sauce",
      },
    ],
  },
  {
    id: 18,
    name: "Taco Truck",
    image:
      "https://thumbs.dreamstime.com/b/assorted-indian-food-set-wooden-background-dishes-appetisers-indeed-cuisine-rice-lentils-paneer-samosa-spices-mas-masala-179640947.jpg",
    address: "1515 Wheel St, Food Truck Alley",
    rating: 4.4,
    menu: [
      {
        id: 52,
        name: "Street Tacos",
        price: 6.99,
        description: "Three authentic street-style tacos",
      },
      {
        id: 53,
        name: "Loaded Nachos",
        price: 8.99,
        description: "Crispy nachos with all the toppings",
      },
      {
        id: 54,
        name: "Churros",
        price: 3.99,
        description: "Crispy cinnamon-sugar churros with chocolate sauce",
      },
    ],
  },
];
