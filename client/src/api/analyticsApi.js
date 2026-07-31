import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/analytics",
});

export const getAnalytics = async () => {
  const { data } = await API.get("/");
  return data;
};