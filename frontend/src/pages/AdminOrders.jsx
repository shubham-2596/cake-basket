import { useEffect, useState } from "react";
import axios from "axios";

const AdminOrders = () => {

  const [orders, setOrders] = useState([]);

  // fetch orders
  const fetchOrders = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // update status
  const updateStatus = async (id, status) => {

    try {

      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/admin/orders/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchOrders();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] p-10">

      <h1 className="text-3xl font-bold mb-8">
        Order Management 📦
      </h1>

      <div className="space-y-4">

        {orders.map((order) => (

          <div
            key={order.id}
            className="bg-white p-6 rounded-xl shadow"
          >

            <div className="flex justify-between items-center">

              <div>
                <h2 className="font-bold text-lg">
                  {order.name}
                </h2>

                <p>{order.email}</p>

                <p className="mt-2">
                  Total: ₹{order.total_amount}
                </p>

                <p>
                  Status:
                  <span className="font-semibold ml-2">
                    {order.status}
                  </span>
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {order.address}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3">

                <button
                  onClick={() =>
                    updateStatus(order.id, "Delivered")
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Deliver
                </button>

                <button
                  onClick={() =>
                    updateStatus(order.id, "Cancelled")
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AdminOrders;