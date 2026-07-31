const grocery = [
  {
    id: 301,
    slug: "basmati-rice",
    name: "Basmati Rice",
    brand: "India Gate",
    category: "grocery",

    images: [
      "/products/grocery/basmati rice.webp",
    ],

    price: 899,
    originalPrice: 999,
    discount: 10,
    rating: 4.8,
    reviews: 412,
    stock: 50,

    description:
      "Premium India Gate Basmati Rice with extra-long grains, rich aroma, and authentic taste, ideal for biryani, pulao, and everyday meals.",

    highlights: [
      "Extra Long Grains",
      "Rich Natural Aroma",
      "Premium Quality",
      "Perfect for Biryani",
      "Easy to Cook",
      "100% Vegetarian",
    ],

    specifications: {
      Weight: "5 kg",
      Type: "Premium Basmati Rice",
      Brand: "India Gate",
      ShelfLife: "12 Months",
      Origin: "India",
      Storage: "Store in a cool & dry place",
    },

    offers: [
      "Flat ₹100 Instant Discount",
      "Buy 2 Get Extra 5% Off",
      "Free Delivery",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "7-Day Replacement",
      warranty: "Freshness Guaranteed",
    },
  },

  {
    id: 302,
    slug: "sunflower-oil",
    name: "Sunflower Oil",
    brand: "Fortune",
    category: "grocery",

    images: [
      "/products/grocery/oil.webp",
    ],

    price: 189,
    originalPrice: 220,
    discount: 14,
    rating: 4.6,
    reviews: 298,
    stock: 80,

    description:
      "Fortune Refined Sunflower Oil is light, healthy, and rich in Vitamin E, making it perfect for everyday cooking.",

    highlights: [
      "Rich in Vitamin E",
      "Heart Friendly",
      "Light & Healthy",
      "Ideal for Daily Cooking",
      "Low Oil Absorption",
      "Trusted Brand",
    ],

    specifications: {
      Quantity: "1 L",
      Type: "Refined Sunflower Oil",
      Brand: "Fortune",
      ShelfLife: "9 Months",
      Ingredients: "100% Refined Sunflower Oil",
      Storage: "Keep away from direct sunlight",
    },

    offers: [
      "Extra ₹20 Cashback",
      "Buy 3 Save More",
      "Free Delivery",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "Fresh Product Replacement",
      warranty: "Quality Assured",
    },
  },

  {
    id: 303,
    slug: "atta",
    name: "Whole Wheat Atta",
    brand: "Aashirvaad",
    category: "grocery",

    images: [
      "/products/grocery/atta.webp",
    ],

    price: 349,
    originalPrice: 399,
    discount: 13,
    rating: 4.7,
    reviews: 502,
    stock: 70,

    description:
      "Aashirvaad Whole Wheat Atta is made from carefully selected grains to prepare soft, nutritious, and delicious rotis every day.",

    highlights: [
      "100% Whole Wheat",
      "High in Fibre",
      "Soft Rotis",
      "Premium Quality",
      "No Added Preservatives",
      "Everyday Nutrition",
    ],

    specifications: {
      Weight: "5 kg",
      Type: "Whole Wheat Flour",
      Brand: "Aashirvaad",
      ShelfLife: "6 Months",
      Ingredients: "100% Whole Wheat",
      Storage: "Store in an airtight container",
    },

    offers: [
      "₹50 Instant Discount",
      "Buy 2 Get 5% Off",
      "Free Delivery",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "Fresh Product Replacement",
      warranty: "Freshness Guaranteed",
    },
  },
    {
    id: 304,
    slug: "milk",
    name: "Fresh Milk",
    brand: "Amul",
    category: "grocery",

    images: [
      "/products/grocery/milk.webp",
    ],

    price: 68,
    originalPrice: 72,
    discount: 6,
    rating: 4.9,
    reviews: 835,
    stock: 120,

    description:
      "Fresh Amul toned milk packed with essential nutrients, calcium, and protein for a healthy lifestyle.",

    highlights: [
      "Rich in Calcium",
      "High Protein",
      "Fresh Every Day",
      "Pasteurized Milk",
      "Trusted Brand",
      "Suitable for All Ages",
    ],

    specifications: {
      Quantity: "1 L",
      Type: "Toned Milk",
      Brand: "Amul",
      Fat: "3%",
      ShelfLife: "2 Days",
      Storage: "Keep Refrigerated",
    },

    offers: [
      "Buy 2 Get ₹10 Off",
      "Free Delivery",
      "Extra Cashback Available",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Today",
      replacement: "Fresh Product Replacement",
      warranty: "Freshness Guaranteed",
    },
  },

  {
    id: 305,
    slug: "biscuits",
    name: "Good Day Biscuits",
    brand: "Britannia",
    category: "grocery",

    images: [
      "/products/grocery/biscuits.webp",
    ],

    price: 40,
    originalPrice: 45,
    discount: 11,
    rating: 4.6,
    reviews: 615,
    stock: 150,

    description:
      "Britannia Good Day Butter Biscuits offer a rich buttery taste with a delightful crunch, making every tea break special.",

    highlights: [
      "Rich Butter Taste",
      "Crispy & Crunchy",
      "Perfect Tea-Time Snack",
      "Premium Ingredients",
      "Loved by Families",
      "Ready to Eat",
    ],

    specifications: {
      Weight: "200 g",
      Flavor: "Butter",
      Brand: "Britannia",
      Type: "Biscuits",
      ShelfLife: "8 Months",
      Storage: "Store in a cool & dry place",
    },

    offers: [
      "Buy 3 Get 1 Free",
      "₹20 Cashback",
      "Free Delivery",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "Fresh Product Replacement",
      warranty: "Freshness Guaranteed",
    },
  },

  {
    id: 306,
    slug: "coffee",
    name: "Instant Coffee",
    brand: "Nescafe",
    category: "grocery",

    images: [
      "/products/grocery/coffee.webp",
    ],

    price: 329,
    originalPrice: 380,
    discount: 13,
    rating: 4.8,
    reviews: 430,
    stock: 60,

    description:
      "Nescafe Instant Coffee delivers a rich aroma and bold flavour for a refreshing start to your day.",

    highlights: [
      "Rich Aroma",
      "Premium Coffee Beans",
      "Easy to Prepare",
      "Bold Taste",
      "Instant Mix",
      "Perfect Morning Beverage",
    ],

    specifications: {
      Weight: "200 g",
      Type: "Instant Coffee",
      Brand: "Nescafe",
      Flavor: "Classic",
      ShelfLife: "12 Months",
      Storage: "Keep in an airtight container",
    },

    offers: [
      "Flat ₹40 Instant Discount",
      "Buy 2 Save More",
      "Free Delivery",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "Fresh Product Replacement",
      warranty: "Freshness Guaranteed",
    },
  },
    {
    id: 307,
    slug: "tea",
    name: "Premium Tea",
    brand: "Tata Tea",
    category: "grocery",

    images: [
      "/products/grocery/green tea.webp",
    ],

    price: 299,
    originalPrice: 340,
    discount: 12,
    rating: 4.7,
    reviews: 390,
    stock: 65,

    description:
      "Tata Tea Premium is made from carefully selected tea leaves that deliver a rich aroma, refreshing taste, and an energetic start to your day.",

    highlights: [
      "Premium Tea Leaves",
      "Strong & Refreshing Taste",
      "Rich Aroma",
      "Natural Freshness",
      "Ideal for Daily Use",
      "Trusted Indian Brand",
    ],

    specifications: {
      Weight: "500 g",
      Type: "Black Tea",
      Brand: "Tata Tea",
      ShelfLife: "12 Months",
      Origin: "India",
      Storage: "Store in a cool & dry place",
    },

    offers: [
      "Flat ₹30 Instant Discount",
      "Buy 2 Get 5% Off",
      "Free Delivery",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "Fresh Product Replacement",
      warranty: "Freshness Guaranteed",
    },
  },

  {
    id: 308,
    slug: "rolled-oats",
    name: "Rolled Oats",
    brand: "Quaker",
    category: "grocery",

    images: [
      "/products/grocery/oats.webp",
    ],

    price: 299,
    originalPrice: 349,
    discount: 14,
    rating: 4.7,
    reviews: 286,
    stock: 55,

    description:
      "Quaker Rolled Oats are packed with fiber and whole grain nutrition, making them the perfect healthy breakfast option.",

    highlights: [
      "High Fibre",
      "100% Whole Grain",
      "Healthy Breakfast",
      "Rich in Nutrients",
      "Easy to Cook",
      "No Artificial Preservatives",
    ],

    specifications: {
      Weight: "1 kg",
      Type: "Rolled Oats",
      Brand: "Quaker",
      ShelfLife: "12 Months",
      Origin: "India",
      Storage: "Store in a cool & dry place",
    },

    offers: [
      "₹50 Instant Discount",
      "Buy 2 Save More",
      "Free Delivery",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "Fresh Product Replacement",
      warranty: "Freshness Guaranteed",
    },
  },

  {
    id: 309,
    slug: "protein-oats",
    name: "Protein Oats",
    brand: "MuscleBlaze",
    category: "grocery",

    images: [
      "/products/grocery/protein oats.webp",
    ],

    price: 499,
    originalPrice: 599,
    discount: 17,
    rating: 4.8,
    reviews: 198,
    stock: 40,

    description:
      "MuscleBlaze Protein Oats combine premium rolled oats with added protein to support fitness, muscle recovery, and a healthy lifestyle.",

    highlights: [
      "High Protein",
      "Rich in Fibre",
      "Supports Muscle Recovery",
      "Healthy Breakfast",
      "Low Fat",
      "Ideal for Fitness Enthusiasts",
    ],

    specifications: {
      Weight: "1 kg",
      Protein: "25 g per serving",
      Flavor: "Natural",
      Brand: "MuscleBlaze",
      ShelfLife: "12 Months",
      Storage: "Store in a cool & dry place",
    },

    offers: [
      "Flat ₹75 Instant Discount",
      "Extra 5% Cashback",
      "Free Delivery",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "Fresh Product Replacement",
      warranty: "Freshness Guaranteed",
    },
  },
];

export default grocery;