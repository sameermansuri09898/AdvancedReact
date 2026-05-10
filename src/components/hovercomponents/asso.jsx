export default function Asso(){
  return(
    <>
    
    
          <div className="dropdown fixed left-0 top-20 hidden group-hover:block w-screen bg-white shadow-2xl  z-50">
          
          <div className="max-w-7xl mx-auto  py-1 px-10 grid grid-cols-5 gap-5">

            <div className="trending-items">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul className="space-y-3 text-gray-600">
        <li className="hover:text-black cursor-pointer">Men Fashion</li>
        <li className="hover:text-black cursor-pointer">Women Fashion</li>
        <li className="hover:text-black cursor-pointer">Kids Wear</li>
        <li className="hover:text-black cursor-pointer">Footwear</li>
        <li className="hover:text-black cursor-pointer">Beauty Products</li>
        <li className="hover:text-black cursor-pointer">Accessories</li>
      </ul>
            </div>

            <div className="popular">
           <h3 className="text-lg font-semibold mb-4">Accessories</h3>
      <ul className="space-y-3 text-gray-600">
        <li className="hover:text-black cursor-pointer">Smart Watches</li>
        <li className="hover:text-black cursor-pointer">Bags & Wallets</li>
        <li className="hover:text-black cursor-pointer">Sunglasses</li>
        <li className="hover:text-black cursor-pointer">Perfumes</li>
        <li className="hover:text-black cursor-pointer">Jewellery</li>
        <li className="hover:text-black cursor-pointer">Caps & Hats</li>
      </ul>
            </div>


     {/* Featured Product */}
    <div className="col-span-2">
      <h3 className="text-lg font-semibold mb-4">Trending Collection</h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop"
            alt="fashion"
            className="rounded-lg h-48 w-full object-cover group-hover:scale-105 transition duration-300"
          />
          <h4 className="mt-3 font-medium">Summer Outfit</h4>
          <p className="text-sm text-gray-500">Up to 50% Off</p>
        </div>

        <div className="group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
            alt="shoes"
            className="rounded-lg h-48 w-full object-cover group-hover:scale-105 transition duration-300"
          />
          <h4 className="mt-3 font-medium">Latest Sneakers</h4>
          <p className="text-sm text-gray-500">New Arrivals</p>
        </div>
      </div>
    </div>

    {/* Promo Banner */}
    <div className="bg-black rounded-xl text-white p-6 flex flex-col justify-between">
      <div>
        <p className="uppercase text-sm text-gray-300">Special Offer</p>
        <h2 className="text-3xl font-bold mt-2 leading-tight">
          Flat 40% Off
        </h2>
        <p className="text-gray-400 mt-3 text-sm">
          On Accessories & Fashion Collection
        </p>
      </div>

      <button className="mt-6 bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
        Shop Now
      </button>
    </div>

            
          </div>
          </div>
    
    </>
  )
}