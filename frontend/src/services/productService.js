import API from "./api";

// get all products
export const getProducts = async () => {
  const response = await API.get("/products");
  return response.data;
};

// get single product
export const getProductById = async (id) => {
  const response = await API.get(`/products/${id}`);
  return response.data;
};