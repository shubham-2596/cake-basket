import { useEffect, useState } from "react";
import { getCartItems, removeCartItem } from "../services/cartService";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // fetch cart items
  const fetchCart = async () => {
    try {
      const data = await getCartItems();
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // remove item
  const handleRemove = async (id) => {
    try {
      await removeCartItem(id);
      fetchCart(); // refresh cart
    } catch (error) {
      console.log(error);
    }
  };

  // total price
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#FFF8F0] px-6 py-16">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4E342E] mb-10">
          Your Cart 🛒
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">
            Your cart is empty 🍰
          </p>
        ) : (
          <div className="grid gap-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-between"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  <div>
                    <h2 className="text-xl font-semibold text-[#4E342E]">
                      {item.title}
                    </h2>

                    <p className="text-gray-600">
                      Qty: {item.quantity}
                    </p>

                    <p className="text-green-600 font-bold">
                      ₹{item.price}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Remove
                </button>

                <button
  onClick={() => navigate("/checkout")}
  className="bg-green-600 text-white px-6 py-2 rounded"
>
  Proceed to Checkout
</button>

              </div>
            ))}

            {/* TOTAL SECTION */}
            <div className="bg-[#4E342E] text-white p-6 rounded-2xl mt-6 flex justify-between items-center">

              <h2 className="text-2xl font-bold">
                Total Amount
              </h2>

              <h2 className="text-2xl font-bold">
                ₹{total}
              </h2>

            </div>

          </div>
        )}

      </div>

    </section>
  );
};

export default Cart;