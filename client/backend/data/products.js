import electronics from "./electronics.js";
import fashion from "./fashion.js";
import home from "./home.js";
import grocery from "./grocery.js";
import sports from "./sports.js";
import beauty from "./beauty.js";
import accessories from "./accessories.js";

const products = [
  ...electronics,
  ...fashion,
  ...home,
  ...grocery,
  ...sports,
  ...beauty,
  ...accessories,
];

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export const getProductsByCategory = (category) =>
  products.filter((product) => product.category === category);

export default products;