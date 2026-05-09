import Feature from './components/usestate'
import Counter from './components/counter'

export default function App(){
  return(
    <>
    <div>
      <div class="relative group inline-block">


  <button class="bg-indigo-600 text-white px-6 py-3 rounded-lg">
    Accessories
  </button>


  <div
    class="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-2xl rounded-xl p-6 w-screen z-50"
  >

    <div class="grid grid-cols-3 gap-6">


      <div>
        <h3 class="font-bold text-gray-800 mb-3">
          Electronics
        </h3>

        <ul class="space-y-2 text-gray-600">
          <li class="hover:text-indigo-600 cursor-pointer">
            Headphones
          </li>

          <li class="hover:text-indigo-600 cursor-pointer">
            Smart Watches
          </li>

          <li class="hover:text-indigo-600 cursor-pointer">
            Speakers
          </li>
        </ul>
      </div>

  
      <div>
        <h3 class="font-bold text-gray-800 mb-3">
          Fashion
        </h3>

        <ul class="space-y-2 text-gray-600">
          <li class="hover:text-indigo-600 cursor-pointer">
            Shoes
          </li>

          <li class="hover:text-indigo-600 cursor-pointer">
            Jackets
          </li>

          <li class="hover:text-indigo-600 cursor-pointer">
            Bags
          </li>
        </ul>
      </div>


      <div>
        <h3 class="font-bold text-gray-800 mb-3">
          Accessories
        </h3>

        <ul class="space-y-2 text-gray-600">
          <li class="hover:text-indigo-600 cursor-pointer">
            Caps
          </li>

          <li class="hover:text-indigo-600 cursor-pointer">
            Wallets
          </li>

          <li class="hover:text-indigo-600 cursor-pointer">
            Sunglasses
          </li>
        </ul>
      </div>

    </div>

  </div>
</div>
    </div>
    <div className="con">
       <Feature/>
       <Counter/>
    </div>
   
    </>
  )
}