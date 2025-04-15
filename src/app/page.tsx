import Image from "next/image";
// src/pages/index.js
import Logo from './components/Logo'; // Import the logo component
import Navbar from './components/Navbar';
import Content from './components/Content';
import Food from "./components/Food"; 
import myArray from "./utils/myArray";
import Foodcard from "./components/FoodCard.js";
import Footer from "./components/Footer"; 

export default function Home() {
  return (
    <div className=" bg-white">
      <Navbar />
      <div className="flex-1">
      <Content/>
      </div>
     
      
    </div>
  );
}