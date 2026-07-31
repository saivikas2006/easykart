const accessories = [
  {
    id: 601,
    slug: "sunglasses",
    name: "Premium Sunglasses",
    brand: "Ray-Ban",
    category: "accessories",

    images: [
      "/products/accessories/sunglasses.webp",
      "/products/accessories/sunglasses front.webp",
      "/products/accessories/sunglasses side.webp",
    ],

    price: 2999,
    originalPrice: 3999,
    discount: 25,
    rating: 4.7,
    reviews: 182,
    stock: 30,

    description:
      "Premium Ray-Ban sunglasses designed with UV protection, lightweight frames, and timeless style for everyday wear.",

    highlights: [
      "100% UV Protection",
      "Lightweight Frame",
      "Scratch Resistant Lens",
      "Comfort Fit",
      "Premium Build Quality",
      "Stylish Everyday Wear",
    ],

    specifications: {
      FrameMaterial: "Metal",
      LensMaterial: "Polycarbonate",
      LensType: "UV400 Polarized",
      FrameShape: "Aviator",
      Weight: "38 g",
      Color: "Black",
      Gender: "Unisex",
    },

    offers: [
      "Flat ₹500 Instant Discount",
      "Free Protective Case",
      "Free Delivery",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "10-Day Replacement",
      warranty: "1 Year Ray-Ban Warranty",
    },
  },

  {
    id: 602,
    slug: "watch",
    name: "Classic Watch",
    brand: "Fastrack",
    category: "accessories",

    images: [
      "/products/accessories/watch.webp",
      "/products/accessories/watch back.webp",
      "/products/accessories/watch describe.webp",
    ],

    price: 3499,
    originalPrice: 4499,
    discount: 22,
    rating: 4.8,
    reviews: 268,
    stock: 20,

    description:
      "Elegant Fastrack analog watch crafted with premium materials for office, casual, and everyday wear.",

    highlights: [
      "Premium Stainless Steel Case",
      "Quartz Movement",
      "Water Resistant",
      "Comfortable Strap",
      "Elegant Design",
      "Everyday Wear",
    ],

    specifications: {
      Display: "Analog",
      StrapMaterial: "Leather",
      CaseMaterial: "Stainless Steel",
      DialColor: "Black",
      WaterResistance: "5 ATM",
      Weight: "120 g",
      Warranty: "2 Years",
    },

    offers: [
      "10% Instant Bank Discount",
      "Free Gift Box",
      "No Cost EMI",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "10-Day Replacement",
      warranty: "2 Years Fastrack Warranty",
    },
  },

  {
    id: 603,
    slug: "watch2",
    name: "Smart Watch",
    brand: "Noise",
    category: "accessories",

    images: [
      "/products/accessories/watch2.webp",
      "/products/accessories/watch2 front.webp",
      "/products/accessories/watch2 back.webp",
    ],

    price: 4999,
    originalPrice: 6499,
    discount: 23,
    rating: 4.7,
    reviews: 342,
    stock: 28,

    description:
      "Noise smartwatch with Bluetooth calling, AMOLED display, health monitoring, fitness tracking, and long battery life.",

    highlights: [
      "AMOLED Display",
      "Bluetooth Calling",
      "Heart Rate Monitor",
      "SpO2 Monitoring",
      "Fitness Tracking",
      "7-Day Battery Life",
    ],

    specifications: {
      Display: "1.43-inch AMOLED",
      Battery: "7 Days",
      Connectivity: "Bluetooth 5.3",
      WaterResistance: "IP68",
      Sensors: "Heart Rate, SpO2, Sleep Tracking",
      Compatibility: "Android & iOS",
      Weight: "42 g",
    },

    offers: [
      "₹750 Instant Discount",
      "No Cost EMI",
      "Free Watch Strap",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "10-Day Replacement",
      warranty: "1 Year Noise Warranty",
    },
  },
];

export default accessories;