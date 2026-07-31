import axios from "axios";

const API = axios.create({
  baseURL: "https://easykart-slu7.onrender.com/api/settings",
});

export const getSettings = async () => {
  const { data } = await API.get("/");
  return data.settings;
};

export const updateSettings = async (settings) => {
  const { data } = await API.put("/", settings);
  return data;
};