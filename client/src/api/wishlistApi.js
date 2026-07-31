import axios from "axios";

const API = axios.create({
  baseURL: "https://easykart-slu7.onrender.com/api/wishlist",
});

export const getWishlist = async (userId) => {
  const { data } = await API.get(`/${userId}`);
  return data.wishlist;
};

export const addToWishlistApi = async (payload) => {
  const { data } = await API.post("/", payload);
  return data;
};

export const removeWishlistApi = async (wishlistId) => {
  const { data } = await API.delete(`/${wishlistId}`);
  return data;
};