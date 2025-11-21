import API from "./api";

export const getSingleProduct = async (id) => {
  const res = await API.get(`/products/${id}`);
  return res.data;
};