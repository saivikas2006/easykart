import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/settings",
});

export const getSettings = async () => {
  const { data } = await API.get("/");
  return data.settings;
};

export const updateSettings = async (settings) => {
  const { data } = await API.put("/", settings);
  return data;
};