 'use client';
 import React, { useState } from 'react';
 import Image from 'next/image';
export default function Food(){
    const imageData = [
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_1-CpSfC1Ff.png', title: 'Salad' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_2-6QL_uDtg.png', title: 'Rolls' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_3-2xw_iDUH.png', title: 'Deserts' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_4-CpXAwO71.png', title: 'Sandwich' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_5-BLqPAi9S.png', title: 'Cake' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_6-BAKCTvIj.png', title: 'Pure Veg' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_7-Dbn_MJmR.png', title: 'Pasta' },
        { src: 'https://food-delivery-web-application.vercel.app/assets/menu_8-D3TIbU8x.png', title: 'Noodles' },
      ];
      const [selectedItem, setSelectedItem] = useState(null);
        // Data associated with each item (title, image1, image2, paragraph, price)
  const itemDetails = {
    Salad: {
        id: 1,
      image1: "https://food-delivery-web-application.vercel.app/assets/food_29-B8GW2frB.png",
      title: "Buttter Noodles",
      image2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC",
      paragraph: "Food provides essential nutrients for overall health and well-being",
      price:14,
    }
    ,
   Salad: {
        id: 2,
        image1: "https://food-delivery-web-application.vercel.app/assets/food_30-CfTld12c.png",
        title: "Veg Noodles",
        image2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC",
        paragraph: "Food provides essential nutrients for overall health and well-being",
        price:12,
      },
      Salad:{
        id: 3,
        image: "https://food-delivery-web-application.vercel.app/assets/food_7-xL5P3oOv.png",
        title: "Somen Noodles",
        image2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC",
        paragraph: "Food provides essential nutrients for overall health and well-being",
        price:20,
      },
      Salad: {
        id: 4,
        image: "https://food-delivery-web-application.vercel.app/assets/food_30-CfTld12c.png",
        title: "Cooked Noodles",
        image2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC",
        paragraph: "Food provides essential nutrients for overall health and well-being",
        price:15,
      },
    Rolls: {
      id: 2,
      title: 'Rolls',
      image1: 'https://example.com/rolls-image1.jpg',
      paragraph: 'Delicious rolls filled with fresh ingredients and served with a dipping sauce.',
      image2: 'https://example.com/rolls-image2.jpg',
      price: '$7.99',
    },
    Rolls: {
        id: 2,
        title: 'Rolls',
        image1: 'https://example.com/rolls-image1.jpg',
        paragraph: 'Delicious rolls filled with fresh ingredients and served with a dipping sauce.',
        image2: 'https://example.com/rolls-image2.jpg',
        price: '$7.99',
      },
    Deserts: {
      id: 3,
      title: 'Deserts',
      image1: 'https://example.com/desert-image1.jpg',
      paragraph: 'Indulge in these sweet and mouth-watering desserts.',
      image2: 'https://example.com/desert-image2.jpg',
      price: '$4.99',
    },
    Sandwich: {
      id: 4,
      title: 'Sandwich',
      image1: 'https://example.com/sandwich-image1.jpg',
      paragraph: 'A hearty sandwich filled with your choice of fillings, served with a side of chips.',
      image2: 'https://example.com/sandwich-image2.jpg',
      price: '$6.99',
    },
    Cake: {
      id: 5,
      title: 'Cake',
      image1: 'https://example.com/cake-image1.jpg',
      paragraph: 'Rich and moist cake with a variety of flavors.',
      image2: 'https://example.com/cake-image2.jpg',
      price: '$8.99',
    },
    PureVeg: {
      id: 6,
      title: 'Pure Veg',
      image1: 'https://example.com/pureveg-image1.jpg',
      paragraph: 'A collection of fresh and flavorful vegetarian dishes.',
      image2: 'https://example.com/pureveg-image2.jpg',
      price: '$9.99',
    },
    Pasta: {
      id: 7,
      title: 'Pasta',
      image1: 'https://example.com/pasta-image1.jpg',
      paragraph: 'A variety of pasta dishes with rich sauces and toppings.',
      image2: 'https://example.com/pasta-image2.jpg',
      price: '$10.99',
    },
    Noodles: {
      id: 8,
      title: 'Noodles',
      image1: 'https://example.com/noodles-image1.jpg',
      paragraph: 'Delicious noodles stir-fried with fresh vegetables and sauces.',
      image2: 'https://example.com/noodles-image2.jpg',
      price: '$4.99',
    },
  };

  // Function to handle image click and display data
  const handleImageClick = (title) => {
    setSelectedItem(itemDetails[title]);
  };
   

  return (
    <div className="bg-red">
       
      
      <div className="bg-red mt-[25px] flex flex-row ml-[110px] gap-8 mr-[110px] hover:cursor-pointer">

       {imageData.map((image, index) => (
          <div className=' hover:cursor-pointer'
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              
            />
            <p>{image.title}</p>
          </div>
        ))}
      </div>

      {/* Show details of the selected item*/}
      {selectedItem && (
        <div className="mt-[20px] p-[20px]  border border-[#ccc]" >
          <h2>{selectedItem.title}</h2>
          <p><strong>$</strong> {selectedItem.price}</p>
          <p><strong></strong> {selectedItem.paragraph}</p>
          <img src={selectedItem.image1} alt={`${selectedItem.title} image 1`} style={{ width: '300px', height: '200px' }} />
          <img src={selectedItem.image2} alt={`${selectedItem.title} image 2`} style={{ width: '300px', height: '200px' }} />
        </div>
      )}
    </div>
  );
}

{/*

const ImageDataDisplay = () => {
  // بيانات الصور
  const imageData = [
    {
      image1: 'https://food-delivery-web-application.vercel.app/assets/food_29-B8GW2frB.png', // صورة محلية (داخل مجلد public)
      title: 'salad',
      image2: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC', // صورة من رابط خارجي
      paragraph: 'Food provides essential nutrients for overall health and well-being',
      link: 'https://food-delivery-web-application.vercel.app/assets/menu_1-CpSfC1Ff.png', // رابط الصورة
    },
    {
      image1: 'https://via.placeholder.com/600x400', // صورة من رابط خارجي
      title: 'عنوان 2',
      image2: '/images/image2.jpg', // صورة محلية (داخل مجلد public)
      paragraph: 'هذه هي الوصف الخاص بالصورة 2.',
      link: 'https://via.placeholder.com/600x400', // رابط الصورة
    },
    {
      image1: '/images/image3.jpg', // صورة محلية (داخل مجلد public)
      title: 'عنوان 3',
      image2: 'https://via.placeholder.com/600x400', // صورة من رابط خارجي
      paragraph: 'هذه هي الوصف الخاص بالصورة 3.',
      link: 'https://via.placeholder.com/600x400', // رابط الصورة
    }
  ];

  // حالة لتخزين البيانات الخاصة بالصورة المختارة
  const [selectedData, setSelectedData] = useState(null);

  // دالة عند الضغط على الصورة
  const handleImageClick = (index) => {
    setSelectedData(imageData[index]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* عرض الصور في شكل شبكة 
      <div className="grid grid-cols-3 gap-4 mb-8">
        {imageData.map((data, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleImageClick(index)} // عند الضغط على الصورة
          >
            <img
              src={data.image1}
              alt={`image-${index}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* عرض البيانات الخاصة بالصورة المختارة 
      {selectedData && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">{selectedData.title}</h2>
          <div className="flex mt-4 gap-4">
            <img
              src={selectedData.image1}
              alt="الصورة المختارة 1"
              className="w-1/2 h-auto rounded-lg shadow-lg"
            />
            <img
              src={selectedData.image2}
              alt="الصورة المختارة 2"
              className="w-1/2 h-auto rounded-lg shadow-lg"
            />
          </div>
          <p className="mt-4 text-lg">{selectedData.paragraph}</p>

          {/* عرض رابط الصورة 
          <div className="mt-4">
            <h3 className="font-bold">رابط الصورة:</h3>
            <a
              href={selectedData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {selectedData.link}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDataDisplay;
  
*/}
 



