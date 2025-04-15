 'use client';
 import Image from 'next/image';

import Logo from './Logo';
import Food from "./Food";


export default function Content(){
  {/*
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
      */}
      
    return(
    <div className='w-full'>
       <div className="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLn7qvrlsekMie5ZBvqEs6roeWE8noytm7A&s)]  bg-cover bg-center  w-[85%] mt-[55px] ml-[110px]  h-[450px] rounded-2xl">
        <h1 className="text-white  pt-[130px] pl-[20px]  text-5xl font-bold ">Order Your</h1>
        <h1 className="text-white  pt-[15px] pl-[20px]  text-5xl font-bold ">Favourite Food Here</h1>
        <p className="text-white  pt-[15px]  pl-[20px] text-lg">
            Welcome to our food delivery website, 
            where we bring you fast, reliable
            , and convenient access to delicious, fresh, and hot meals.
             Enjoy a wide variety of affordable and tasty dishes, from savory and spicy to 
             crispy and juicy, ensuring every bite is flavorful and satisfying.  
           </p>
           <button className=" bg-white w-25 h-8 items-center mt-[15px] ml-[15px] border  border-white rounded-2xl hover:text-white hover:bg-yellow-500 ">View Menu</button>
         </div>
           
            <div className="mt-[95px] ml-[110px] mr-[110px] ">
                <h2 className="text-black font-bold text-3xl">Explore Our Menu</h2>
                <p className="text-black mt-[20px]  text-[18px]  ">Explore our diverse menu featuring gourmet burgers, spicy wings, 
                    crispy fries, fresh salads, and mouthwatering desserts, all crafted with 
                     the finest ingredients for an unforgettable dining experience.</p>
                     </div>
                     {/*
                     <div className="mt-[25px] flex flex-row ml-[110px] gap-8 mr-[110px] hover:cursor-pointer">
                     {imageData.map((item, index) => (
        <div key={index} className="image-item">
          <Image
            src={item.src}
            alt={item.title}
            width={100}
            height={150}
            
          />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>*/}
    <Food/>
  
     
    <div className='text-center '>
      <p className="text-black font-bold text-2xl mt-20">For Better Experience Download</p>
      <p className="text-black font-bold text-2xl mt-2">Foodie App</p>
    </div>
    <div className='flex  flex-row items-center justify-center gap-10 mt-10'>
      <img className='hover:cursor-pointer hover:w-60' src="https://food-delivery-web-application.vercel.app/assets/play_store-B2tFv0Hy.png"/>
      <img  className='hover:cursor-pointer hover:w-60' src="https://food-delivery-web-application.vercel.app/assets/app_store-C8O_cY6s.png"/>
    </div>
    <div className=' flex flex-row bg-[#323232] w-[100%] h-[300px] mt-14 mr-[-50px] ml-[-18px] mb-[-20px] '>
      <div className='flex flex-col w-[30%] ml-30 text-start '>
      <h1 className="text-3xl  hover:cursor-pointer  font-bold font-Outfit text-yellow-500 tracking-wide  mt-10 ">
          Foodie-Go
        </h1>
        <p className='text-[#A8A3A3] w-[80%] text-start leading-6 mt-6'>Lorem ipsum dolor, sit amet consectetur
           adipisicing elit. Voluptatum dolores ipsa error.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum quo, iste
           ullam quod quam laboriosam nobis molestiae expedita saepe?</p>
           <div className='flex flex-row mt-4 gap-4'>
            <img  className="hover:cursor-pointer   w-[35px] h-[35px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKhSURBVHgB1ZnvcZtAEMVXmnw3HfhKUAeig6gDuwO5AykdpISkgqgDoQpQB8IVWKlgs088wvk/3B0C/2Z2YASz94DV3t7eTCJQ1cwOudnSzJktzDIaOJtVPB7NDmbFbDY7SyAzCcCE5nbYUGRltuMRov42gvhAuOdG6gdrDPf/tvt2MiQmYGV2MtubrSmor4/M7N6spK87SY05dRQJW0oi4IuiId5JCszRA52uZSC8MR4kBnOwpSMnA8OviLG2EgLFliFxGgpFl71FjyHWGzvrJdqLJycjQdGfx7QXR05GppMWforBskFf+LX3711EMj/JxGDuX7114ZRqUjA/Cw70pC04X/R0dSkDXr1ITrmlJICx5wv1CXohfPjc/+FPqjmdzjWx4PX/WGYK0RQ51/PVcNK6XrilBY2hbZrLvkld7kXVqB4vBe3M70EigTYTW9npci518V3IMKR4CQ2onXMIxj+3kOnzKFgMcLLonW4amHY6IREoZ765tMucoTlKHAivDIKzRH+4LgMGQ42XLBEL3tw9z5ElfnrXdjTwKCnQelZKUvcyznw2kgjm4ieEBF71jUwfZ1ZBMD5pcJa4IoiCMwRXUqufOpjgjhCMqXMl0yc3KyC4MHM6woKzK9r28A5z5rfKLH3LKB2IABRSlxgGP2TaYYF15q9nv7DezGVi6FtLJF5Y6Xsr1BHRjzqcWi9v4hpyCdF6mV9+dMPXaqTwxqZVNVqa88R2a+qgaNHxm4H9CidPtJMrESzWc7DR6ze040pSTdXO7zZGmkaktp3xpJMLJ4U9zUlqlB1Oir/T8G2vNUXCV6+SIHRj8bvU6zgMVtBQpl4KqRcbizAsEG55v5O62NqGdIWCBHvCIQaFdS7ttq2T51u3zbZtJXywmFX6P+g8K/PIslj4AAAAAElFTkSuQmCC"/>
            <img  className=" hover:cursor-pointer  w-[35px] h-[35px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB1VmBdeIwDBVdoGxwHoENyE0AG8AGdAPYoHcTXG8C2CB0Au4mSDaATqCTyPfFUEoiO4H2v6eXljjSty3LsjygBDDzUB6ZyFjEiYxEhhDFQaTE84/Iq8h2MBgcKBIDioAQzeSxBMlSZIOnknrzhNAhbfNIVce8aPvf0m5DfUIITEUKkVxkAUJWHUORucgOumbUNUSpA0mVMXUE1QXSSt5RFxBFT1C6oJ4Q2HiiFIiCFRQ56hmYRbW1ohiA7C7GT2MB0jsz6XuQDWwPTaQDf3J0J4B0s08HfuTozmjFBVPRWzSwArOdf/RSg3lBnwyI/dNLL4ouN4WuoGnAu4HElrujTwqMchb+sO5lT6/1z2HUb8Oz4J1rWuTIW3L/j4YQtsZcdNK1aLfiy1j7TrTQ4cPc0LtDTgYEnbwadqD7GvaIBI2zi85NHqhKvrdkg58NJ5JfMTihZj0aRl+pGZo7Z565OTpgdELkJwuD/o9K0wi7lvZ0ttYP6OUb2fHj7P+MqtEu4J9LqmfiIxzk1FFSO+hpZuRHyrrg1IdnIJaC1msHNvf6B5MRXC+6VKyNdvmBIoBD5pbSYT+EcoRL4DufTaXAGewdXUJHWEfrkYzAYvku8gIdVmwMC07hREolXK2+OGicnVNzNLiEFdmgNg5KuKSKvRkyQj+p6rAVL/LtX7JhfLTFEVtzCPjWs8Gfi8g1k4tMThOLBKDj+xZkHRnB5wka2JuPRlxFigU3b8GMNo4iwFV6ug5/yNi264xakmSMetI5kascenL+Y8FnyUtL4s9cJ+de1MAvrmpnqa72/oiEF0mLry/wtQonRiqtINchuErud9cafK1CChr6UtXN62oBB0+23WKVhku+fzFwaf3Qk3Z0I0STDRQs+fYF7TiygaJuyvntbHRTiOS6Mm7eXBr0Zlxf9jjqGowKJ8jPOP7aaxHsjlPL97EXiz5xV2NbiBZDjjefZxeLKnpA+Ib2jqocfCXt2hRQ0gkHxJWMJtYZ1de2jk6vbv21bUnoWMrV7T8ArU1k5aRcjgAAAABJRU5ErkJggg=="/>
            <img  className=" hover:cursor-pointer  w-[35px] h-[35px]"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALHSURBVHgB1ZnhceIwEIUfmfw/XwWn64AO4g6gg9ABdABXwlWQXAXQAaYC6ABfBSEVKLv4CQQhYMk2dr6ZNwZbIz/ZsrQr9VABa20ih1T0JDKiviihlJ0o53EjWomyXq+3QyQ9RCBGUzlMaTIXLXhUU+/OEBukZX6gaJiTlv8n5RZoEjEwFG1FS9GYhkLrSEQj0Zp1PaNupFJDk6on1ITWRdNq3qAOpKIJKx2jIbx7TFAFqWDGigwahm9R7zVDDDS7jumnsdD0Oth0G2a9eydBpr3+ZNASNH27T3v9yKBlSnnhq2hsNAiFb3v51UUdzLfoGBz7h5cubEMmBb6yueilyS6kYcCnB8kpd40A2EDHHA3Cp5z6J+ahc7o9JaixoTBuWbo/CW8aNOaykY4pGsQb5hLXHZaRFemHOsAdYLcYPKIIvjNEIPHsa5lyciMX2G8qBO8aO6cPKLKEDIGwxY4Xnht55/QV9vmFax/Xt/hmY4Mb4L/IqGFt+TvqR+vV0cOcnZ+efPHl0Wym/4BjmlM3Lj26RMxHql0p2T/hKknhDV5FP0W/UTwhh0Eg9Lg33CR/9EaiHIV5h0EkanhnG4p7adRR6Tuhx93eMIo0vOsYUa6G918fus/hCeeo0KfuiE5wGzWsy0dDdJ9UlKnhTGRsCwlnWexxDW/1qMOOnMjlj4aXfwPq2Vz4/Yavp/lr126hPWBxmC8Y1UdFbPeAuebg/OQ2co5vlIspEi8Mu/iU7bUVToaM1RbkaoRp/vpage+1kMKCk0P+1BKe2XKLOppU2vYXA8NiZs+0wZ2INutVMLX3X9CutmRg61rOL3ePehYi7XFlvNbJxc2wlEHdMI3f0vyzjd/2GtOk1hUUKcZuLOq8PkIRlGSUhqn7nc+zjUWVJgi/WN6giMFnUm6FQKIMe8bVjAbWKY7btganW7du2zYHG1YlS/8AQV35ND++wScAAAAASUVORK5CYII="/>
           </div>
      </div>
      <div className='flex flex-col text-start text-[#A8A3A3] ml-30 mt-11'>
        <p className='font-bold text-xl' >COMPANY</p>
        <div className='mt-4'>
          <p>Home</p>
          <p>About Us</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className='flex flex-col text-start text-[#A8A3A3] ml-35 mt-11'>
        <p className='font-bold text-xl'>GET IN TOUCH</p>
        <p className='mt-4'>+91-70892-18874</p>
        <p>contact@foodiego.com</p>
        </div>
    </div>
    <div className=' bg-[#323232] w-[100%] h-[50px] mt-6 mr-[-50px] ml-[-18px] mb-[-20px] '>
      <p className=' pt-4 text-[#A8A3A3] flex items-center justify-center '>Copyright 2024 ©foodiego.com -all right reserved</p>

    </div>

    </div>
  );
  }
                     

       
      
           
         
  
 
        

   


