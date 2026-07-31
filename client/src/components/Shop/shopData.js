// ================= HERO PRODUCTS =================

export const heroProducts = [
  {
    id: 1,
    name: "Laptop",
    image:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
    position: "laptop",
    floatDuration: 6,
    rotate: 6,
  },
  {
    id: 2,
    name: "Smartphone",
    image:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
    position: "phone",
    floatDuration: 5,
    rotate: -12,
  },
  {
    id: 3,
    name: "Headphones",
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
    position: "headphones",
    floatDuration: 7,
    rotate: -10,
  },
  {
    id: 4,
    name: "Smart Watch",
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
    position: "watch",
    floatDuration: 6,
    rotate: 12,
  },
];

// ================= CATEGORIES =================

export const categories = [
  {
    id: 1,
    name: "Trending",
    icon: "🔥",
    active: true,
  },
  {
    id: 2,
    name: "Electronics",
    icon: "📱",
  },
  {
    id: 3,
    name: "Computers",
    icon: "💻",
  },
  {
    id: 4,
    name: "Fashion",
    icon: "👕",
  },
  {
    id: 5,
    name: "Audio",
    icon: "🎧",
  },
  {
    id: 6,
    name: "Wearables",
    icon: "⌚",
  },
  {
    id: 7,
    name: "Home",
    icon: "🏠",
  },
  {
    id: 8,
    name: "Sports",
    icon: "⚽",
  },
  {
    id: 9,
    name: "Grocery",
    icon: "🛒",
  },
];

// ================= SORT OPTIONS =================

export const sortOptions = [
  "Featured",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
  "Highest Rated",
];

// ================= PRODUCTS =================

export const products = [
  {
    id: 1,
    name: "Apple MacBook Air M4",
    category: "Computers",
    brand: "Apple",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800",
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    rating: 4.9,
    reviews: 284,
    badge: "Best Seller",
    stock: 12,
    featured: true,
    isNew: true,
  },

  {
    id: 2,
    name: "iPhone 16 Pro",
    category: "Electronics",
    brand: "Apple",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    price: 119999,
    originalPrice: 129999,
    discount: 8,
    rating: 4.9,
    reviews: 512,
    badge: "Trending",
    stock: 20,
    featured: true,
    isNew: true,
  },

  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Audio",
    brand: "Sony",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    price: 24999,
    originalPrice: 29999,
    discount: 17,
    rating: 4.8,
    reviews: 196,
    badge: "Top Rated",
    stock: 35,
    featured: true,
    isNew: false,
  },

  {
    id: 4,
    name: "Apple Watch Series 10",
    category: "Wearables",
    brand: "Apple",
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800",
    price: 45999,
    originalPrice: 49999,
    discount: 8,
    rating: 4.8,
    reviews: 142,
    badge: "Popular",
    stock: 16,
    featured: true,
    isNew: true,
  },

  {
    id: 5,
    name: "Nike Air Max",
    category: "Fashion",
    brand: "Nike",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    price: 7999,
    originalPrice: 9999,
    discount: 20,
    rating: 4.7,
    reviews: 231,
    badge: "Hot",
    stock: 42,
    featured: false,
    isNew: false,
  },

  {
    id: 6,
    name: "PlayStation 5",
    category: "Electronics",
    brand: "Sony",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800",
    price: 54999,
    originalPrice: 59999,
    discount: 8,
    rating: 4.9,
    reviews: 301,
    badge: "Gaming",
    stock: 9,
    featured: true,
    isNew: false,
  },

  {
    id: 7,
    name: "Samsung 55\" 4K Smart TV",
    category: "Electronics",
    brand: "Samsung",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
    price: 49999,
    originalPrice: 58999,
    discount: 15,
    rating: 4.7,
    reviews: 177,
    badge: "Sale",
    stock: 18,
    featured: false,
    isNew: false,
  },

  {
    id: 8,
    name: "Canon EOS R50 Camera",
    category: "Electronics",
    brand: "Canon",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    price: 68999,
    originalPrice: 74999,
    discount: 8,
    rating: 4.8,
    reviews: 93,
    badge: "Editor's Pick",
    stock: 11,
    featured: true,
    isNew: true,
  },
];