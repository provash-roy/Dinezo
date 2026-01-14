import axios from "axios";
import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import HowItWorks from "./components/HowItWorks";
import Footer from "../../components/common/Footer";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get("/api/Restaurant");
        setRestaurants(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load restaurants. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-12 sm:gap-16 md:gap-24">
      <Hero />
      <Categories />

      {loading && (
        <div className="py-20 flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-orange-600 border-t-transparent"></div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 py-10 px-4">
          {error}
        </div>
      )}

      {!loading && !error && (
        <FeaturedRestaurants restaurants={restaurants} />
      )}

      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
