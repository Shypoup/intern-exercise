// components/Navbar.js
import Link from 'next/link';
import Logo from './Logo';
import Content from './Content';
const Navbar = () => {
  return (
    <div >
      {/* Vertical Navbar */}
      <div className=" flex  bg-white ">
        <Logo/>
        <div className="flex flex-row items-center justify-center gap-[20px] mt-10 ml-[230px] text-black-300 text-[18px]">
          <Link href="#" className="text-black ">Home</Link>
          <Link href="#" className="text-black ">Menu</Link>
          <Link href="#" className="text-black ">Mobile App</Link>
          <Link href="#" className="text-black ">Contact Us</Link>
        </div>
        <div className='flex justify-center gap-[33px]  ml-30'>
            <img  className='ml-35 mt-12 w-6 h-6 'src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKxSURBVHgBvVbNctJQFD7nUpjqijcwC8eF44K+QIsrKZtmnNpxCU8gPkANoc7oTnwCWDrSccLG0nEh9QXKQle6iG/ATgWS4zk34JCQhp8JfjNwT25y73fPPb8ICSiaVv52zq8RqQNAMoDAkHkEGBLQAGDHobHf7Tm2CysA4yZLTy0DPWgBUBFW2gTb/hjsZaQqOnF4YtWUR9dCJBr4RE0kMNHLGRedBsqPN9+TOdauLWt4rGCWrh8dn9Yg8VBzKJ+c1onQCt6Q82ukqn3HHiZtILcAnm/xASp6GZL98f1ZPZFMNAKiNyL7ALXLTuMtrIHS8QuLVa7r9UTPL8/PmrFkcjq5OgLIE0G9d96wYQMcyjUiyoGHNMa9qA21zZQHliZiG2xKJLhgbRDRYTGPWb8Vfa9EKzGwfhqrjYlmyI2gKo7Fl1aU0AmRoaeORNBarRgvSXDYoQixLfLuDj0LkbE5TU1GWv104MGVDOyZxRAZAhVE8BF/QkqgLAwCCY0QmTiGCJ869gBSQu/dP3MYITL4j1Acaa4I5ccv70BKKD+xClNxGCYjdEXw1KgAKYH84PqIKGQaxRP96SdFSAmoIAgnDHu42p2gzoEKsRINwk0wnyRwjN0QmaOzOvZZzt/aWUwx60JSn4xxSUJ7I2WmKQbRXFaTkqBLlNQ22Ssm9WXk78fXq+Hd+/t/mKzEibR078E+fv/2pQ9rIChR8EofnuB170OjG/0mVDzna9KqpT7oU6DFjmbOTbtcYh5G1y70IFKTWDtrllmEdOJ7XeVlBrPFJdMy/IxXyGDmgPNfRb4NWghosidWpo3RAuGNDc98qV8GHT4TVZWNdbPk0+c4QkzaJOiy6IgrgqmQCjNteXSZwRUv/s2hE+1TbiJE2BLiCLdGFiXkJsjZKtmMECbsrdwa/gVQtGFmKj9awgAAAABJRU5ErkJggg=="/>
            <img className='h-7 mt-12 w-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJmSURBVHgBvVbBbtNAEH2zdaQcwx8EcUflD9xbmkuD1CBupF8APaPWTRFnwheQHCEghVODONT9gjoXLlxy7I1wAqnxDrN2XBzJXtdQ50lOdj3reTs7b3aXUIDWU6+pQr5kouHZh/5h3rh293jAwN4S9PjruB/YfCoUgEK8E2cNMHds45iwJ39NB/oNCmAlbe17rrhzI6caJ7axYh+upum29l+6+FdSRXi2as6nn05HtrH1Jb0lYBHRkvKsfvMMJpcM7pl2UZQGk0l/oRmDuGePNpdUhUhmWxhlgttGm0laNsoEt42W0h234zVqNTRrBI9XahXyA5QAsSidaKVg9pl1//fSCXyZ0BqpUSmRWc5YqdUgnsD042ufYkI+x4bAHO6oOMLNwQhMVbukmbTbhdtgBWiopK42iIUjP3N5trOsUi5DSYKPsmB2CdTLNnHgaFBA4EzS6fhVqRpNYbTbPe5lkppICUrOvjDzy/aToxOttY+SULTV4TyjrJwjBTsjyrYzk0e0Vbqk2GJT4EDVl7Ce8neNX9dqFsUoV41LzhFTAs08UORMcgeQ7sjSvIAdwdn49JFRr1w1RKHMdlJSoy9jL3dV2l3vp0zcSirVEH0fk5q8gmzj4bD2Wt2jzxaHz1EEHZdfRKpEwWxNP4zqOjKtDv4DoaJZ5Cp5IXn9Ed36qsNC8nnPNG72XpZNAhXC7ERJW6Ve+qgUf7fT1ClDF6gQIdGNCNcku9v1zis6X+eSz/tJZ+08lRkc3vVRZ/zxNe2k322lO9+/XVw9eOi+lwQ3TN3KB3XET3ki4Ep0MsRSHUwn/Xna/gekkPtdneji9AAAAABJRU5ErkJggg=="/>
            <button  className='hover:cursor-pointer hover:bg-yellow-500  hover:text-white  border rounded-xl  w-22 h-7  mt-11 hover:cursor-pointer '>Sign In </button>
        </div>
      </div>

      {/* Content Area */}
      
    </div>
  );
};

export default Navbar;


