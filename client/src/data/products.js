import electronics from "./electronics";
import fashion from "./fashion";
import home from "./home";
import grocery from "./grocery";
import sports from "./sports";
import beauty from "./beauty";
import accessories from "./accessories";

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