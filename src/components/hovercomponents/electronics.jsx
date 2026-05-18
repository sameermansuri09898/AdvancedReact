export default function PopularElectronics() {
  return (
    <>
      <div className="dropdown fixed left-0 top-20 hidden group-hover:block w-screen bg-white shadow-2xl z-50">
        
        <div className="max-w-7xl mx-auto py-6 px-10 grid grid-cols-5 gap-6">

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Electronics</h3>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-black cursor-pointer">Mobiles</li>
              <li className="hover:text-black cursor-pointer">Laptops</li>
              <li className="hover:text-black cursor-pointer">Tablets</li>
              <li className="hover:text-black cursor-pointer">Smart TVs</li>
              <li className="hover:text-black cursor-pointer">Gaming Consoles</li>
              <li className="hover:text-black cursor-pointer">Cameras</li>
            </ul>
          </div>

          {/* Accessories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accessories</h3>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-black cursor-pointer">Headphones</li>
              <li className="hover:text-black cursor-pointer">Smart Watches</li>
              <li className="hover:text-black cursor-pointer">Power Banks</li>
              <li className="hover:text-black cursor-pointer">Bluetooth Speakers</li>
              <li className="hover:text-black cursor-pointer">Keyboards & Mouse</li>
              <li className="hover:text-black cursor-pointer">Chargers & Cables</li>
            </ul>
          </div>

          {/* Featured Products */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">
              Trending Electronics
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {/* Product 1 */}
              <div className="group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
                  alt="smartphone"
                  className="rounded-lg h-48 w-full object-cover group-hover:scale-105 transition duration-300"
                />

                <h4 className="mt-3 font-medium">
                  iPhone Collection
                </h4>

                <p className="text-sm text-gray-500">
                  Starting from ₹59,999
                </p>
              </div>

              {/* Product 2 */}
              <div className="group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop"
                  alt="laptop"
                  className="rounded-lg h-48 w-full object-cover group-hover:scale-105 transition duration-300"
                />

                <h4 className="mt-3 font-medium">
                  Gaming Laptops
                </h4>

                <p className="text-sm text-gray-500">
                  High Performance Deals
                </p>
              </div>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="bg-black rounded-xl text-white p-6 flex flex-col justify-between">

            <div>
              <p className="uppercase text-sm text-gray-300">
                Mega Electronics Sale
              </p>

              <h2 className="text-3xl font-bold mt-2 leading-tight">
                Up To 40% Off
              </h2>

              <p className="text-gray-400 mt-3 text-sm">
                On Mobiles, Laptops & Accessories
              </p>
            </div>

            <button className="mt-6 bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>

        </div>
      </div>
    </>
  );
}