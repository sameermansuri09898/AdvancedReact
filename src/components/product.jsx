import {useState,React} from 'react'

export default function Product(){
  const product = {
  id: 101,
  name: "Premium Cotton T-Shirt",
  description: "Comfortable and stylish t-shirt",
  variants: [
    {
      id: 1,
      size: "S",
      color: "Red",
      price: 499,
      offer_price: 399,
      stock: 10
    },
    {
      id: 2,
      size: "M",
      color: "Red",
      price: 599,
      offer_price: 499,
      stock: 5
    },
    {
      id: 3,
      size: "L",
      color: "Red",
      price: 699,
      offer_price: 599,
      stock: 0
    },
    {
      id: 4,
      size: "S",
      color: "Blue",
      price: 549,
      offer_price: 449,
      stock: 8
    },
    {
      id: 5,
      size: "M",
      color: "Blue",
      price: 649,
      offer_price: 549,
      stock: 3
    }
  ]


};

const [SelectedVariant,SetVariant] = useState(product.variants[0]);
const [selectcolor,setcolor]=useState(product.variants[0])


return(
  <>
  <div className="product border h-80 w-80 p- m-10">
    <div className="product-detail flex flex-col text-center space-y-1.5 ">
      
      <span>{product.name}</span>
      <span>{product.description}</span>
    </div>
    {product.variants.map((data)=>
    
    <div className="variants" id='idx'>
      <button
      key={data.id}
      onClick={()=>SetVariant(data)}
      className={`px-4 py-2 border rounded ${
              SelectedVariant.id === data.id
                ? "bg-black text-white"
                : "bg-white"
                
            }
           
            
            `}
      
      >
        {data.size}

      </button>
     
    </div>
   
    )}
  </div>
  <h1>
    {SelectedVariant.price}
    <span className='bg-red-300'>
      {SelectedVariant.stock}
      
    </span>
  </h1>
  {/* Button Logic */}
<div className="mt-4 text-center">
  {SelectedVariant.stock < 1 ? (
    <button className="bg-gray-400 text-white px-4 py-2 rounded">
      Notify Me
    </button>
  ) : (
    <button className="bg-green-600 text-white px-4 py-2 rounded">
      Buy Now
    </button>
  )}
</div>
  </>
)


}
