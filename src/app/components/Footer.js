export default function Footer() {
    return (
      <div>
        {/* --- Store Images Section --- */}
      
  
        {/* --- Main Footer Section --- */}
        <div className='flex flex-row bg-[#323232] w-full h-[300px] mt-14 -mx-[18px] mb-[-20px]'>
          <div className='flex flex-col w-[30%] ml-30 text-start'>
            <h1 className="text-3xl font-bold font-Outfit text-yellow-500 tracking-wide mt-10 hover:cursor-pointer">
              Foodie-Go
            </h1>
            <p className='text-[#A8A3A3] w-[80%] leading-6 mt-6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dolores ipsa error.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum quo, iste ullam quod quam laboriosam nobis molestiae expedita saepe?
            </p>
            <div className='flex flex-row mt-4 gap-4'>
              {/* Social icons here (unchanged) */}
            </div>
          </div>
  
          {/* --- Company Section --- */}
          <div className='flex flex-col text-start text-[#A8A3A3] ml-30 mt-11'>
            <p className='font-bold text-xl'>COMPANY</p>
            <div className='mt-4'>
              <p>Home</p>
              <p>About Us</p>
              <p>Delivery</p>
              <p>Privacy Policy</p>
            </div>
          </div>
  
          {/* --- Contact Section --- */}
          <div className='flex flex-col text-start text-[#A8A3A3] ml-35 mt-11'>
            <p className='font-bold text-xl'>GET IN TOUCH</p>
            <p className='mt-4'>+91-70892-18874</p>
            <p>contact@foodiego.com</p>
          </div>
        </div>
  
        {/* --- Copyright Section --- */}
        <div className='bg-[#323232] w-full h-[50px] mt-6 -mx-[18px] mb-[-20px]'>
          <p className='pt-4 text-[#A8A3A3] flex items-center justify-center'>
            Copyright 2024 ©foodiego.com - all rights reserved
          </p>
        </div>
      </div>
    );
  }
  