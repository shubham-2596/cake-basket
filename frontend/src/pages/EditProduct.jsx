import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  // fetch product
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      const product = res.data.find((item) => item.id == id);

      setForm(product);
    } catch (error) {
      console.log(error);
    }
  };

  // handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // update product
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/admin/product/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product updated 🎉");

      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] flex justify-center items-center">

      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-xl shadow-lg w-[500px]"
      >

        <h1 className="text-2xl font-bold mb-6">
          Edit Product ✏️
        </h1>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2 mb-4 rounded"
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 mb-4 rounded"
        />

        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 mb-4 rounded"
        />

        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-2 mb-4 rounded"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 mb-4 rounded"
        />

        <button className="w-full bg-pink-500 text-white py-2 rounded">
          Update Product
        </button>

      </form>

    </div>
  );
};

export default EditProduct;