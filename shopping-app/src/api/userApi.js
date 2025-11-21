import API from "./api";

export const registerUser = async (data) => {
  return await API.post("/users/register", data);
};

export const loginUser = async (data) => {
  return await API.post("/users/login", data);
};
