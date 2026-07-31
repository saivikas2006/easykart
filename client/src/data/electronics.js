const electronics = [
  {
    id: 1,
    slug: "iphone",
    name: "iPhone",
    brand: "Apple",
    category: "electronics",

    images: [
      "/products/electronics/iphone/iphone.webp",
      "/products/electronics/iphone/iphone back.webp",
      "/products/electronics/iphone/iphone describe.webp",
    ],

    price: 89999,
    originalPrice: 99999,
    discount: 10,
    rating: 4.8,
    reviews: 245,
    stock: 18,

    description:
      "Experience Apple's powerful smartphone featuring the latest A18 chip, Super Retina OLED display, advanced dual-camera system, and all-day battery life.",

    highlights: [
      "Apple A18 Chip",
      "48 MP Dual Camera",
      "Face ID",
      "Super Retina OLED Display",
      "5G Connectivity",
      "MagSafe Charging",
    ],

    specifications: {
      Display: "6.1-inch Super Retina OLED",
      Processor: "Apple A18",
      RAM: "8 GB",
      Storage: "256 GB",
      Camera: "48 MP Dual Camera",
      Battery: "3561 mAh",
      OS: "iOS",
      Connectivity: "5G, Wi-Fi 7, Bluetooth 5.4",
    },

    offers: [
      "₹5,000 Instant Bank Discount",
      "No Cost EMI up to 24 Months",
      "Exchange Bonus up to ₹40,000",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "7-Day Replacement",
      warranty: "1 Year Apple Warranty",
    },
  },

  {
    id: 2,
    slug: "acer-laptop",
    name: "Acer Laptop",
    brand: "Acer",
    category: "electronics",

    images: [
      "/products/electronics/acer laptop/acer laptop front.webp",
      "/products/electronics/acer laptop/acer laptop back.webp",
      "/products/electronics/acer laptop/acer laptop describe.webp",
    ],

    price: 55999,
    originalPrice: 62999,
    discount: 11,
    rating: 4.6,
    reviews: 118,
    stock: 10,

    description:
      "A reliable Acer laptop designed for students, professionals, programming, office work, and entertainment.",

    highlights: [
      "Intel Core i5 Processor",
      "16 GB RAM",
      "512 GB SSD",
      "15.6-inch Full HD Display",
      "Windows 11",
      "Backlit Keyboard",
    ],

    specifications: {
      Processor: "Intel Core i5",
      RAM: "16 GB",
      Storage: "512 GB SSD",
      Display: "15.6-inch Full HD",
      Graphics: "Intel Iris Xe",
      OS: "Windows 11",
      Battery: "Up to 9 Hours",
      Weight: "1.7 kg",
    },

    offers: [
      "₹3,000 Instant Discount",
      "No Cost EMI",
      "Free Laptop Bag",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "2 Days",
      replacement: "7-Day Replacement",
      warranty: "1 Year Acer Warranty",
    },
  },

  {
    id: 3,
    slug: "hp-laptop",
    name: "HP Laptop",
    brand: "HP",
    category: "electronics",

    images: [
      "/products/electronics/hp laptop/hp laptop front.webp",
      "/products/electronics/hp laptop/hp laptop back.webp",
      "/products/electronics/hp laptop/hp latop describe.webp",
    ],

    price: 64999,
    originalPrice: 73999,
    discount: 12,
    rating: 4.7,
    reviews: 176,
    stock: 12,

    description:
      "High-performance HP laptop built for coding, office productivity, multimedia, and everyday professional use.",

    highlights: [
      "Intel Core i7",
      "16 GB RAM",
      "1 TB SSD",
      "IPS Display",
      "Windows 11",
      "Fast Charging",
    ],

    specifications: {
      Processor: "Intel Core i7",
      RAM: "16 GB",
      Storage: "1 TB SSD",
      Display: "15.6-inch IPS",
      Graphics: "Intel Iris Xe",
      OS: "Windows 11",
      Battery: "Up to 10 Hours",
      Weight: "1.75 kg",
    },

    offers: [
      "₹4,000 Instant Discount",
      "No Cost EMI",
      "Free Wireless Mouse",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "2 Days",
      replacement: "7-Day Replacement",
      warranty: "1 Year HP Warranty",
    },
  },

  {
    id: 4,
    slug: "oppo",
    name: "OPPO Smartphone",
    brand: "OPPO",
    category: "electronics",

    images: [
      "/products/electronics/oppo/oppo front.webp",
      "/products/electronics/oppo/back oppo.webp",
      "/products/electronics/oppo/oppo describe.webp",
    ],

    price: 24999,
    originalPrice: 27999,
    discount: 11,
    rating: 4.5,
    reviews: 203,
    stock: 24,

    description:
      "Stylish OPPO smartphone with an AMOLED display, AI-powered camera, fast charging, and premium design.",

    highlights: [
      "64 MP AI Camera",
      "AMOLED Display",
      "5000 mAh Battery",
      "67W Fast Charging",
      "5G Ready",
      "Fingerprint Unlock",
    ],

    specifications: {
      Display: "6.7-inch AMOLED",
      Processor: "Snapdragon",
      RAM: "8 GB",
      Storage: "256 GB",
      Camera: "64 MP AI Camera",
      Battery: "5000 mAh",
      OS: "Android 15",
      Connectivity: "5G, Wi-Fi, Bluetooth",
    },

    offers: [
      "₹2,000 Instant Discount",
      "Exchange Bonus",
      "No Cost EMI",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "7-Day Replacement",
      warranty: "1 Year OPPO Warranty",
    },
  },
    {
    id: 5,
    slug: "samsung-galaxy-m06",
    name: "Samsung Galaxy M06",
    brand: "Samsung",
    category: "electronics",

    images: [
      "/products/electronics/samsung/galaxy-m06-front.webp",
      "/products/electronics/samsung/galaxy-m06-back.webp",
      "/products/electronics/samsung/galaxy-m06-describe.webp",
    ],

    price: 16999,
    originalPrice: 18999,
    discount: 10,
    rating: 4.4,
    reviews: 320,
    stock: 40,

    description:
      "Affordable Samsung smartphone featuring a large display, long-lasting battery, reliable performance, and an immersive entertainment experience.",

    highlights: [
      "50 MP Main Camera",
      "6000 mAh Battery",
      "6.7-inch HD+ Display",
      "Samsung One UI",
      "5G Connectivity",
      "25W Fast Charging",
    ],

    specifications: {
      Display: "6.7-inch HD+ LCD",
      Processor: "Samsung Exynos",
      RAM: "6 GB",
      Storage: "128 GB",
      Camera: "50 MP Dual Camera",
      Battery: "6000 mAh",
      OS: "Android 15",
      Connectivity: "5G, Wi-Fi, Bluetooth 5.3",
    },

    offers: [
      "₹1,500 Instant Bank Discount",
      "No Cost EMI",
      "Exchange Bonus Available",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "7-Day Replacement",
      warranty: "1 Year Samsung Warranty",
    },
  },

  {
    id: 6,
    slug: "vivo",
    name: "Vivo Smartphone",
    brand: "Vivo",
    category: "electronics",

    images: [
      "/products/electronics/vivo/vivo front.webp",
      "/products/electronics/vivo/back vivo.webp",
      "/products/electronics/vivo/vivo describe.webp",
    ],

    price: 21999,
    originalPrice: 24999,
    discount: 12,
    rating: 4.5,
    reviews: 182,
    stock: 20,

    description:
      "Premium Vivo smartphone with a vibrant AMOLED display, powerful Dimensity processor, AI cameras, and stylish slim design.",

    highlights: [
      "64 MP AI Camera",
      "AMOLED Display",
      "MediaTek Dimensity Processor",
      "5000 mAh Battery",
      "44W Flash Charging",
      "Ultra Slim Design",
    ],

    specifications: {
      Display: "6.6-inch AMOLED",
      Processor: "MediaTek Dimensity",
      RAM: "8 GB",
      Storage: "256 GB",
      Camera: "64 MP AI Camera",
      Battery: "5000 mAh",
      OS: "Android 15",
      Connectivity: "5G, Wi-Fi, Bluetooth 5.3",
    },

    offers: [
      "₹2,000 Instant Discount",
      "Free Screen Protection",
      "No Cost EMI",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "Tomorrow",
      replacement: "7-Day Replacement",
      warranty: "1 Year Vivo Warranty",
    },
  },

  {
    id: 7,
    slug: "sony-camera",
    name: "Sony Camera",
    brand: "Sony",
    category: "electronics",

    images: [
      "/products/electronics/camera/sony camera.webp",
    ],

    price: 74999,
    originalPrice: 82999,
    discount: 10,
    rating: 4.9,
    reviews: 92,
    stock: 8,

    description:
      "Professional Sony mirrorless camera designed for photographers and content creators with exceptional image quality and advanced autofocus.",

    highlights: [
      "33 MP Full Frame Sensor",
      "4K Video Recording",
      "Real-Time Eye AF",
      "Interchangeable Lens",
      "Professional Photography",
      "Wi-Fi Connectivity",
    ],

    specifications: {
      Sensor: "Full Frame CMOS",
      Resolution: "33 MP",
      Lens: "Interchangeable",
      Video: "4K 60fps",
      ISO: "100–51200",
      Weight: "659 g",
      Display: "3-inch Touch LCD",
      Connectivity: "Wi-Fi, Bluetooth",
    },

    offers: [
      "₹10,000 Instant Discount",
      "Free Camera Bag",
      "No Cost EMI up to 12 Months",
    ],

    delivery: {
      shipping: "Free Delivery",
      eta: "3 Days",
      replacement: "7-Day Replacement",
      warranty: "2 Year Sony Warranty",
    },
  },
];

export default electronics;