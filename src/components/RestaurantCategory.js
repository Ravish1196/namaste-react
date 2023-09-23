import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      {/* tail wind distribute page into 12 part */}
      <div className="w-6/12 bg-gray-100 shadow-2xl m-auto my-4 p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
