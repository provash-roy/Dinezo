import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get("/api/Restaurant");
        setRestaurants(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h3>Restaurants</h3>
      {restaurants.map((restaurant) => {
        const { restaurantName, type, address } = restaurant;
        return (
          <div key={restaurant.id} className="border p-4 m-4">
            <h4 className="text-2xl font-bold">{restaurantName}</h4>
            <h4 className="text-2xl font-bold">{type}</h4>
            <h4 className="text-2xl font-bold">{address}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
