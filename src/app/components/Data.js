 {/*export default function Data(){
    return(
        <div >
       <h1 className='text-black  font-bold text-3xl mt-[90px] ml-[110px] mr-[110px]'>Top Dishesh Near You</h1>
       <div className="mt-[15px] gap-[25px] ml-[110px] mr-[110px]  w-[75%] h-[380px]  flex flex-row">
        <div className="w-[25%] h-[10px] " >
          <img src="https://food-delivery-web-application.vercel.app/assets/food_29-B8GW2frB.png"/>
          <h4 className="font-semibold font- ml-2">Buttter Noodles</h4>
          <img className="w-[40%] ml-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC"/>
          <p className="ml-2 text-[15px]">Food provides essential nutrients for overall health and well-being</p>
          <h3 className="ml-2 text-red-500">$14</h3>
        </div>
        <div className="w-[25%] h-[10px] " >
          <img src="https://food-delivery-web-application.vercel.app/assets/food_30-CfTld12c.png"/>
          <h4 className="font-semibold font- ml-2">Veg Noodles</h4>
          <img className="w-[40%] ml-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC"/>
          <p className="ml-2 text-[15px]">Food provides essential nutrients for overall health and well-being</p>
          <h3 className="ml-2 text-red-500">$12</h3>
        </div>
        <div className="w-[25%] h-[10px] " >
          <img src="https://food-delivery-web-application.vercel.app/assets/food_30-CfTld12c.png"/>
          <h4 className="font-semibold font- ml-2">Somen Noodles</h4>
          <img className="w-[40%] ml-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC"/>
          <p className="ml-2 text-[15px]">Food provides essential nutrients for overall health and well-being</p>
          <h3 className="ml-2 text-red-500">$20</h3>
        </div>
        <div className="w-[25%] h-[10px] " >
          <img src="https://food-delivery-web-application.vercel.app/assets/food_30-CfTld12c.png"/>
          <h4 className="font-semibold font- ml-2">Cooked Noodles</h4>
          <img className="w-[40%] ml-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC"/>
          <p className="ml-2 text-[15px]">Food provides essential nutrients for overall health and well-being</p>
          <h3 className="ml-2 text-red-500">$15</h3>
        </div>
        
       </div>
        </div>
         
    );
 } */}
  import Image from "next/image";
    export default function Data(){
     
   
    
     const arr = [
    {
      id: 1,
      image1: "https://food-delivery-web-application.vercel.app/assets/food_29-B8GW2frB.png",
      title: "Buttter Noodles",
      image2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC",
      paragraph: "Food provides essential nutrients for overall health and well-being",
      price:14,

    },
    {
      id: 2,
      image1: "https://food-delivery-web-application.vercel.app/assets/food_30-CfTld12c.png",
      title: "Veg Noodles",
      image2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC",
      paragraph: "Food provides essential nutrients for overall health and well-being",
      price:12,
    },
    {
      id: 3,
      image: "https://food-delivery-web-application.vercel.app/assets/food_7-xL5P3oOv.png",
      title: "Somen Noodles",
      image2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC",
      paragraph: "Food provides essential nutrients for overall health and well-being",
      price:20,
    },
    {
        id: 4,
        image: "https://food-delivery-web-application.vercel.app/assets/food_30-CfTld12c.png",
        title: "Cooked Noodles",
        image2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAYAAAD21tHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZhRbhMxEIZ/b0obWgSpxAMPCNwTkBs0nKBwg3ACNifI9gCI9ASUI/QELScgN2DLA+pDHyJUQSnpmhmPN3WIs1u1lfrg/aWsu+vZz6Mde8Yu0OjepOoMTKo1NUP67alRPsYt1LDmtYJ63CFdtPu9xq3UsHwllZhUv7GQaZtve3Tfw01diokFHF2HVfnxSe9R0OL49Qy2hRni5oqDBeRqdMwzPq9jLeR8ilYHEr0dusvw+ynw9xHw4Ax4eMqvDOjCuWxMOW1SBY+SpVRffcw/0/M+3X+qYikH4JfJ0HSp7cx6eSacPXeWBbDxg9bK1H9/ImD1tgRHzZJZv+Vs6Ln5CglMkFUWXDbsWUcuHotDl6v0yKvHJhEnkwtxskXt6s8OOdqjEG6TxUF0LE4tSmW2TdRYffh2XKJcoLYoCF169wn93YUxKbUzVuIMORqZjTgPOl2fd8pXQQ5ftsXOzhAzomV24A0aD4tntSk2uc//8L7Ylvq/wGDT2nusxDPatcA1CthaZZrDlY3J1Oj7IDBgPCyooUlfZFUomv2ZFN95VqjgDueK0P+aFSUL2kX1oPGwXKEN9Pel8C6yQltNWV5myS60DFertY96xcOSYrpcAVZodG2vhZcPufCU4iJl+23BqZOOhmUwy/m2yF5pvIwVqjivxJgcWDkH2qdSdNjRPx0pVDKYRr2iYXFhlROtTTHapC9lJ2TKVbbICs38rl2OGyfA+gk7dUSQlNrc5kHeB8ty1ahXHCxKOfThD93/dXLLYhmz7/b6kxArnPTsHvc8t0WEjspUSPbk8KDeWQe5n6KL6ygGluz7dZDl99eJT29moLcrbQZ6xx2rG9Ydsho1ikP/AOgjwhQ4BVlvAAAAAElFTkSuQmCC",
        paragraph: "Food provides essential nutrients for overall health and well-being",
        price:15,
      },
  ];
    return(
        <div>
              <div className='relative mt-22  ml-[110px] '>
             <h1 className='text-black font-bold text-3xl item-start '>Top Dishesh Near You</h1>
              </div>
              <div className="flex  flex-row gap-7  ml-[110px] mt-[30px] mr-[110px]">
                
               {arr.map((item) => (
                <div  key={item.id} className="border-2 border-gray-400 w-60 h-80 ">

              <div className="w-60">
               <div className="w-60">
              <Image 
                src={item.image1} 
                alt={`${item.title} - Image 1`} 
                className=" h-48 w-59 "
                width={100}
                height={100}
              />
              <div className="font-semibold font-lg ml-2">
              {item.title}
              </div>
            </div>
            <div className="w-80 mt-2 ml-2">
              <Image  
                src={item.image2} 
                alt={`${item.title} - Image 2`} 
                className=" object-cover rounded-lg"
                width={80}
                height={0}
              />
            </div>
          </div>
          
          <p className="mt-2 ml-2 text-black  text-sm">{item.paragraph}</p>
          <p className="text-lg text-red-500  ml-2 text-[#5B5959] "> ${item.price}</p>
        </div>
      
      ))}
      

    </div>
    </div>
            
    );

     }
  