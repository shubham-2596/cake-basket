import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");

  const handleOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      const cartRes = await axios.get("http://localhost:5000/api/cart", {
        headers: { Authorization: `Bearer ${token}` }
      });

      const items = cartRes.data;

      const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await axios.post(
        "http://localhost:5000/api/order/place",
        { address, total, items },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      alert("Order placed 🎉");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        <textarea
          placeholder="Enter delivery address"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          onClick={handleOrder}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Place Order
        </button>

      </div>
    </div>
  );
};

export default Checkout;