import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/address",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("easykart-token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const addAddress = async (address) => {
  const { data } = await API.post("/", address);
  return data;
};

export const getAddresses = async () => {
  const { data } = await API.get("/");
  return data.addresses;
};