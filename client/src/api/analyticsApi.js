import axios from "axios";

const API = axios.create({
  baseURL: "https://easykart-slu7.onrender.com/api/analytics",
});

export const getAnalytics = async () => {
  const { data } = await API.get("/");
  return data;
};