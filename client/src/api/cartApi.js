import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/cart",
});

export const getCart = async (userId) => {
  const { data } = await API.get(`/${userId}`);
  return data.cart;
};

export const addToCart = async (payload) => {
  const { data } = await API.post("/", payload);
  return data;
};

export const removeFromCart = async (cartId) => {
  const { data } = await API.delete(`/${cartId}`);
  return data;
};