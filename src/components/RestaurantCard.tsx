import { Restaurant } from "../data/restaurants.ts";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{restaurant.name}</h2>
          <p className="text-gray-600">{restaurant.address}</p>
          <div className="mt-2 flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{restaurant.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
