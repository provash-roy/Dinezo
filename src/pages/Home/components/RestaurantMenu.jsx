import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);

  const location = useLocation();
  const restaurant = location.state;
 
  const { restaurantID, restaurantName, type, address } = restaurant;

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios(`/api/Restaurant/${restaurantID}/menu`);
        setMenu(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, []);

  return (
    <>
      <div>
        <div className="flex gap-2 font-bold text-green-500">
          <h3>{restaurantName}'s Menu</h3>

          <p>{type}</p>
          <p>{address}</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {menu.map((menuItem) => (
            <MenuCard key={menuItem.itemID} menuItem={menuItem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
