import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyCart() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-col mx-30 mt-20">
          <table className="h-30 w-full">
            <thead>
              <tr className="text-left text-[#808080] text-sm">
                <th className="px-2 py-3">Item</th>
                <th className="px-2 py-3">Title</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Remove</th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-left text-[#808080] text-sm border-t border-b border-gray-300">
                <td className="px-4 py-2">
                  <img
                    className="w-15 h-10"
                    src="https://food-delivery-web-application.vercel.app/assets/food_1-iEOlQHK4.png"
                  />
                </td>
                <td className="px-4 py-3">Greek salad</td>
                <td className="px-4 py-3">$12</td>
                <td className="px-4">1</td>
                <td className="px-4">$12</td>
                <td className="px-4 py-3">
                  <button className="text-[#808080] text-lg">&times;</button>
                </td>
              </tr>

              <tr className="text-left text-[#808080] text-sm border-b border-gray-300">
                <td className="px-4 py-2">
                  <img
                    className="w-15 h-10"
                    src="https://food-delivery-web-application.vercel.app/assets/food_2-Bviin0XJ.png"
                  />
                </td>
                <td className="px-4 py-3">Veg salad</td>
                <td className="px-4 py-3">$18</td>
                <td className="px-4 py-3">1</td>
                <td className="px-4">$18</td>
                <td className="px-4 py-3">
                  <button className="text-[#808080] text-lg">&times;</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-row mx-30 mt-20">
          <div>
            <h1 className="font-bold text-2xl ml-3">Cart Totals</h1>
            <table className="table-auto w-110 ml-3 mt-3">
              <tbody>
                <tr className="border-b border-[#555555]">
                  <td className="py-2 text-[#555555]">Subtotal</td>
                  <td className="px-4 py-2 text-gray-600 text-right">0</td>
                </tr>
                <tr className="border-b border-[#555555]">
                  <td className="py-2 text-[#555555]">Delivery Fee</td>
                  <td className="px-4 py-2 text-gray-600 text-right">2</td>
                </tr>
                <tr className="border-b border-[#555555]">
                  <td className="py-2 text-[#555555] font-semibold">Total</td>
                  <td className="px-4 py-2 text-gray-600 text-right font-semibold">0</td>
                </tr>
              </tbody>
            </table>

            {/* زرار خارج الجدول */}
            <button className="mt-4 bg-[#fbbe30] text-white hover:cursor-pointer text-sm h-8 px-4 py-2 rounded">
              PROCEED TO CHECKOUT
            </button>
          </div>

          <div className="flex flex-col mx-40 text-[#555555]">
            <p className="text-[#555555] font-semibold">
              If you have a promo code, Enter it here
            </p>
            <div className="flex justify-between w-full mt-2">
              <p className="bg-[#EAEAEA] w-80 px-2 text-left text-sm py-2">promo code</p>
              <p className="bg-black text-white w-30 text-center rounded text-sm py-2 px-2">
                submit
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
