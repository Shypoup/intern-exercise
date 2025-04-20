// Food.js
'use client';
import React, { useState } from 'react';
import { Categories, itemDetails } from '../../utils/myArray';
import FoodCard from './FoodCard';

export default function Food() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle image click and display data
  const handleImageClick = (item:any) => {
    console.log("Clicked on:", item); // Log the clicked title
    setSelectedItem(item.title);
  };

  console.log("Selected Item:", selectedItem); // Log the selected item

  return (
    <div className="">
      <div className="mt-15 flex flex-row ml-[110px] gap-8 mr-[110px] hover:cursor-pointer">
        {Categories.map((item, index) => (
          <div
            className="hover:cursor-pointer flex flex-col items-center"
            key={index}
            onClick={() => handleImageClick(item)}
          >
            <img
              src={item.src}
              alt={item.title}
            />
            <p className="text-black">{item.title}</p>
          </div>
        ))}
      </div>

      <h1 className="text-black item-start ml-[120px] mr-[120px] mt-20 text-3xl font-bold">
        Top Dishes Near You
      </h1>

      <div className="flex flex-row ml-[120px] mr-[120px] mt-8 gap-8">
        {selectedItem &&
          itemDetails
            .filter((item) => item.category === selectedItem)
            .map((item, index) => (
              <FoodCard key={index} item={item} /> // Pass each item to FoodCard
            ))}
      </div>
    </div>
  );
}


