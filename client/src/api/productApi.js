import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/products",
});

// Get All Products
export const getProducts = async () => {
  const { data } = await API.get("/");
  return data.products;
};

// Get Product By Slug
export const getProduct = async (slug) => {
  const { data } = await API.get(`/${slug}`);
  return data.product;
};

// Get Products By Category
export const getCategoryProducts = async (category) => {
  const { data } = await API.get(`/category/${category}`);
  return data.products;
};

// Search Products
export const searchProducts = async (keyword) => {
  const { data } = await API.get(`/search?keyword=${keyword}`);
  return data.products;
};

// Create Product
export const createProduct = async (productData) => {
  const { data } = await API.post("/", productData);
  return data;
};
// Get Product By MongoDB ID
export const getProductById = async (id) => {
  const { data } = await API.get(`/id/${id}`);
  return data.product;
};

// Update Product
export const updateProduct = async (id, productData) => {
  const { data } = await API.put(`/${id}`, productData);
  return data;
};

// Delete Product
export const deleteProduct = async (id) => {
  const { data } = await API.delete(`/${id}`);
  return data;
};