import OfferBar from "../components/OfferBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import CustomCakes from "../components/CustomCakes";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <OfferBar />
      <Navbar />
      <Hero />
      <ProductGrid />
      <CustomCakes />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;