import API from "./api";

export const createOrder = async (orderData) => {
  return await API.post("/orders", orderData);
};

export const getMyOrders = async () => {
  return await API.get("/orders/mine");
};

export const updatePaymentStatus = async (orderId, paymentData) => {
  return await API.put(`/orders/${orderId}/pay`, paymentData);
};
