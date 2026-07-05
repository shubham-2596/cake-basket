import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});

  const fetchStats = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5000/api/admin/stats",
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    setStats(res.data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="p-10 bg-[#FFF8F0] min-h-screen">

      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard 📊
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Users</h2>
          <p className="text-2xl font-bold">{stats.users}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Products</h2>
          <p className="text-2xl font-bold">{stats.products}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Orders</h2>
          <p className="text-2xl font-bold">{stats.orders}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-2xl font-bold">₹{stats.revenue}</p>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;