import axios from "axios";

const API = axios.create({
  baseURL: "https://easykart-slu7.onrender.com/api/categories",
});

export const getCategories = async () => {
  const { data } = await API.get("/");
  return data.categories;
};

export const createCategory = async (category) => {
  const { data } = await API.post("/", category);
  return data.category;
};

export const updateCategory = async (id, category) => {
  const { data } = await API.put(`/${id}`, category);
  return data.category;
};

export const deleteCategory = async (id) => {
  const { data } = await API.delete(`/${id}`);
  return data;
};