import { useEffect, useState } from "react";
import CakeCard from "./CakeCard";
import { getProducts } from "../services/productService";

const ProductGrid = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setCakes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // loading state
  if (loading) {
    return (
      <div className="text-center py-20 text-2xl font-bold text-[#4E342E]">
        Loading Cakes 🍰...
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-[#FFF8F0]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#4E342E] text-center mb-10">
          Popular Cakes 🍰
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {cakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductGrid;