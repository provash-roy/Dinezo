import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get("/api/Restaurant");
        setRestaurants(res.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h3 className="font-bold"> All Restaurants</h3>
      {restaurants.map((restaurant) => {
        const { restaurantID, restaurantName, type } = restaurant;
        return (
          <div key={restaurantID} className="border p-4 m-4">
            <h4 className="text-2xl font-bold">{restaurantName}</h4>
            <h4 className="text-2xl font-bold">{type}</h4>

            <div className="my-2">
              <Link
                to={`/restaurants/${restaurantID}`}
                className="border p-1 rounded-xl font-bold bg-blue-600 "
                state={restaurant}
              >
                View Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
