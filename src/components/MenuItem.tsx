import { MenuItem as MenuItemType } from "../data/restaurants";
import { useDispatch } from "react-redux";
import { addToCart } from "../store.js/cartSlice.ts";

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="font-bold">${item.price.toFixed(2)}</span>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
