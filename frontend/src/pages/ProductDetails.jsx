import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { addToCart } from "../services/cartService";

const ProductDetails = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = async () => {
        try {
            await addToCart(product.id, quantity);

            alert("Added to cart 🛒");
        } catch (error) {
            console.log(error);
            alert("Failed to add cart");
        }
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, [id]);

    // loading
    if (!product) {
        return (
            <div className="text-center py-20 text-2xl font-bold">
                Loading Product 🍰...
            </div>
        );
    }

    return (
        <section className="py-16 px-6 bg-[#FFF8F0] min-h-screen">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                {/* LEFT IMAGE */}
                <div>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full rounded-3xl shadow-xl"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div>

                    <h1 className="text-4xl font-bold text-[#4E342E]">
                        {product.title}
                    </h1>

                    {/* Rating */}
                    <p className="text-yellow-500 text-lg mt-2">
                        ⭐ {product.rating} Rating
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-4 mt-4">

                        <span className="text-4xl font-bold text-[#4E342E]">
                            ₹{product.price}
                        </span>

                        <span className="text-gray-400 line-through text-xl">
                            ₹{product.old_price}
                        </span>

                        <span className="text-green-600 font-semibold">
                            {product.discount}% OFF
                        </span>

                    </div>

                    {/* Delivery */}
                    <p className="mt-4 text-gray-600">
                        🚚 {product.delivery_time}
                    </p>

                    {/* Description */}
                    <p className="mt-6 text-gray-700 leading-7">
                        {product.description}
                    </p>

                    {/* Quantity */}
                    <div className="mt-8 flex items-center gap-4">

                        <button
                            onClick={() =>
                                quantity > 1 && setQuantity(quantity - 1)
                            }
                            className="bg-[#4E342E] text-white px-4 py-2 rounded-lg"
                        >
                            -
                        </button>

                        <span className="text-xl font-semibold">
                            {quantity}
                        </span>

                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="bg-[#4E342E] text-white px-4 py-2 rounded-lg"
                        >
                            +
                        </button>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-8">

                        <button
                            onClick={handleAddToCart}
                            className="bg-[#4E342E] text-white px-8 py-3 rounded-xl hover:scale-105 transition"
                        >
                            Add To Cart
                        </button>

                        <button className="bg-pink-500 text-white px-8 py-3 rounded-xl hover:scale-105 transition">
                            Buy Now
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProductDetails;