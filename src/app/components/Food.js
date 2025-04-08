 'use client';
 import React, { useState } from 'react';
 import Image from 'next/image';

const itemDetails = [
  {
    category: "Salad",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_1-CpSfC1Ff.png",
    id: 1,
    title: "Buttter Noodles",
    image1: "https://food-delivery-web-application.vercel.app/assets/food_29-B8GW2frB.png",
    image2: "data:image/png;base64,...",
    paragraph: "Food provides essential nutrients for overall health and well-being",
    price: 14,
  },
  {
    category: "Salad",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_1-CpSfC1Ff.png",
    id: 2,
    title: "Veg Noodles",
    image1: "https://food-delivery-web-application.vercel.app/assets/food_30-CfTld12c.png",
    image2: "data:image/png;base64,...",
    paragraph: "Food provides essential nutrients for overall health and well-being",
    price: 12,
  },
  {
    category: "Salad",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_1-CpSfC1Ff.png",
    id: 3,
    title: "Somen Noodles",
    image1: "https://food-delivery-web-application.vercel.app/assets/food_7-xL5P3oOv.png",
    image2: "data:image/png;base64,...",
    paragraph: "Food provides essential nutrients for overall health and well-being",
    price: 20,
  },
  {
    category: "Salad",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_1-CpSfC1Ff.png",
    id: 4,
    title: "Cooked Noodles",
    image1: "https://food-delivery-web-application.vercel.app/assets/food_30-CfTld12c.png",
    image2: "data:image/png;base64,...",
    paragraph: "Food provides essential nutrients for overall health and well-being",
    price: 15,
  },
  {
    category: "Rolls",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_2-6QL_uDtg.png",
    id: 2,
    title: "Rolls",
    image1: "https://example.com/rolls-image1.jpg",
    image2: "https://example.com/rolls-image2.jpg",
    paragraph: "Delicious rolls filled with fresh ingredients and served with a dipping sauce.",
    price: "$7.99",
  },
  {
    category: "Deserts",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_3-2xw_iDUH.png",
    id: 3,
    title: "Deserts",
    image1: "https://example.com/desert-image1.jpg",
    image2: "https://example.com/desert-image2.jpg",
    paragraph: "Indulge in these sweet and mouth-watering desserts.",
    price: "$4.99",
  },
  {
    category: "Sandwich",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_4-CpXAwO71.png",
    id: 4,
    title: "Sandwich",
    image1: "https://example.com/sandwich-image1.jpg",
    image2: "https://example.com/sandwich-image2.jpg",
    paragraph: "A hearty sandwich filled with your choice of fillings, served with a side of chips.",
    price: "$6.99",
  },
  {
    category: "Cake",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_5-BLqPAi9S.png",
    id: 5,
    title: "Cake",
    image1: "https://example.com/cake-image1.jpg",
    image2: "https://example.com/cake-image2.jpg",
    paragraph: "Rich and moist cake with a variety of flavors.",
    price: "$8.99",
  },
  {
    category: "Pure Veg",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_6-BAKCTvIj.png",
    id: 6,
    title: "Pure Veg",
    image1: "https://example.com/pureveg-image1.jpg",
    image2: "https://example.com/pureveg-image2.jpg",
    paragraph: "A collection of fresh and flavorful vegetarian dishes.",
    price: "$9.99",
  },
  {
    category: "Pasta",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_7-Dbn_MJmR.png",
    id: 7,
    title: "Pasta",
    image1: "https://example.com/pasta-image1.jpg",
    image2: "https://example.com/pasta-image2.jpg",
    paragraph: "A variety of pasta dishes with rich sauces and toppings.",
    price: "$10.99",
  },
  {
    category: "Noodles",
    imageCategory: "https://food-delivery-web-application.vercel.app/assets/menu_8-D3TIbU8x.png",
    id: 8,
    title: "Noodles",
    image1: "https://example.com/noodles-image1.jpg",
    image2: "https://example.com/noodles-image2.jpg",
    paragraph: "Delicious noodles stir-fried with fresh vegetables and sauces.",
    price: "$4.99",
  },
];


const Categories = [
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_1-CpSfC1Ff.png', title: 'Salad' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_2-6QL_uDtg.png', title: 'Rolls' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_3-2xw_iDUH.png', title: 'Deserts' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_4-CpXAwO71.png', title: 'Sandwich' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_5-BLqPAi9S.png', title: 'Cake' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_6-BAKCTvIj.png', title: 'Pure Veg' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_7-Dbn_MJmR.png', title: 'Pasta' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_8-D3TIbU8x.png', title: 'Noodles' },
      ];

export default function Food(){
   
      const [selectedItem, setSelectedItem] = useState(null);
        // Data associated with each item (title, image1, image2, paragraph, price)


  // Function to handle image click and display data
  const handleImageClick = (item) => {
    console.log("Clicked on:", item); // Log the clicked titl
    setSelectedItem(item.title);
  };
   
  console.log("Selected Item:", selectedItem); // Log the selected item

  return (
    <div className="bg-red">
       
      
      <div className="bg-red mt-[25px] flex flex-row ml-[110px] gap-8 mr-[110px] hover:cursor-pointer">

       {Categories.map((item, index) => (
          <div className=' hover:cursor-pointer flex flex-col items-center'
            key={index}
            onClick={() => handleImageClick(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              
            />
            <p className='text-black'>{item.title}</p>
          </div>
        ))}
      </div>


      {selectedItem && itemDetails.filter(item => item.category === selectedItem).map((item, index) => (
        <div key={index} className="mt-[20px] p-[20px] border border-[#ccc] flex flex-col items-center">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-lg"><strong>$</strong> {item.price}</p>
          <p className="text-lg"><strong></strong> {item.paragraph}</p>
          <div className="flex flex-row gap-4 mt-4">
            <img src={item.image1} alt={`${item.title} image 1`} style={{ width: '300px', height: '200px' }} />
            <img src={item.image2} alt={`${item.title} image 2`} style={{ width: '300px', height: '200px' }} />
          </div>
        </div>
      ))}

      {/* Show details of the selected item*/}
      {/* {selectedItem && (
        <div className="mt-[20px] p-[20px]  border border-[#ccc]" >
          <h2>{selectedItem.title}</h2>
          <p><strong>$</strong> {selectedItem.price}</p>
          <p><strong></strong> {selectedItem.paragraph}</p>
          <img src={selectedItem.image1} alt={`${selectedItem.title} image 1`} style={{ width: '300px', height: '200px' }} />
          <img src={selectedItem.image2} alt={`${selectedItem.title} image 2`} style={{ width: '300px', height: '200px' }} />
        </div>
      )} */}
    </div>
  );
}
