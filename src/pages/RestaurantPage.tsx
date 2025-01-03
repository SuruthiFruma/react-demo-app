import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants.ts";
import { MenuItem } from "../components/MenuItem.tsx";

export function RestaurantPage() {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((r) => r.id === Number(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{restaurant.name}</h1>
      <p className="text-gray-600 mb-4">{restaurant.address}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurant.menu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
