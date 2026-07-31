import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/orders",
});

// ============================
// Customer APIs
// ============================

// Get Logged-in User Orders
export const getUserOrders = async (userId) => {
  const token = localStorage.getItem("easykart-token");

  const { data } = await API.get(`/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.orders;
};

// Get Single Order
export const getOrderById = async (id) => {
  const token = localStorage.getItem("easykart-token");

  const { data } = await API.get(`/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.order;
};

// ============================
// Admin APIs
// ============================

// Get All Orders
export const getAllOrders = async () => {
  const token = localStorage.getItem("easykart-token");

  const { data } = await API.get("/admin/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.orders;
};

// Update Order Status
export const updateOrderStatus = async (id, status) => {
  const token = localStorage.getItem("easykart-token");

  const { data } = await API.put(
    `/admin/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

// Delete Order
export const deleteOrder = async (id) => {
  const token = localStorage.getItem("easykart-token");

  const { data } = await API.delete(`/admin/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};