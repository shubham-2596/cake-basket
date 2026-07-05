import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminPanel = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/admin/products", {
            headers: { Authorization: `Bearer ${token}` }
        });

        setProducts(res.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const navigate = useNavigate();

    return (
        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">
                Admin Panel 🍰
            </h1>

            <Link
                to="/admin/dashboard"
                className="inline-block mb-6 bg-pink-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
            >
                Go to Dashboard 📊
            </Link>

            <Link
                to="/admin/orders"
                className="bg-[#4E342E] text-white px-4 py-2 rounded"
            >
                Manage Orders 📦
            </Link>

            {products.map((p) => (
                <div key={p.id} className="flex justify-between bg-white p-4 mb-3 shadow rounded">

                    <div>
                        <h2 className="font-bold">{p.title}</h2>
                        <p>₹{p.price}</p>
                    </div>

                    <div className="flex gap-2">

                        <button
                            onClick={() => navigate(`/admin/edit/${p.id}`)}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </button>

                        <button className="bg-red-500 text-white px-3 py-1 rounded">
                            Delete
                        </button>

                    </div>

                </div>
            ))}

        </div>
    );
};

export default AdminPanel;