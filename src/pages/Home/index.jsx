import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import HowItWorks from "./components/HowItWorks";
import Footer from "../../components/common/Footer";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get("/api/Restaurant");
        setRestaurants(res.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Featured Restaurants */}
      <FeaturedRestaurants restaurants={restaurants} />

      {/* How It Works */}
      <HowItWorks />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

