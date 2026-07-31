import axios from "axios";

const API = axios.create({
  baseURL: "https://easykart-slu7.onrender.com/api/users",
});

export const getAllUsers = async () => {
  const { data } = await API.get("/");
  return data.users;
};

export const getUserById = async (id) => {
  const { data } = await API.get(`/${id}`);
  return data.user;
};

export const deleteUser = async (id) => {
  const { data } = await API.delete(`/${id}`);
  return data;
};