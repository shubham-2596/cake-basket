import API from "./api";

// get token
const getToken = () => localStorage.getItem("token");

// add to cart
export const addToCart = async (product_id, quantity) => {
  const response = await API.post(
    "/cart/add",
    { product_id, quantity },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};

// get cart
export const getCartItems = async () => {
  const response = await API.get("/cart", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};

// remove item
export const removeCartItem = async (id) => {
  const response = await API.delete(`/cart/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};