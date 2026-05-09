import { useState } from 'react'

function Card() {
  const [count, setCount] = useState(0);
  let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  const hndclock=()=>{
    console.log("Addedd Sucessfully")
  }



  return (
    <>
    <div className="min-h-screen bg-gray-50 p-6">
      
      <div className="conatiner-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


        {arr.map((item,id)=>(
                  <div key={id}
                   className="cards  bg-white shadow hover:shadow-lg transition overflow-hidden p-2 rounded-lg">
          <img 
          className='w-full h-45 object-cover rounded-lg'
          src="https://imgs.search.brave.com/JvQ1bnavDqOGSSjwV5SG2Pnxpb7vgOSMpIDJYYK7j8o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/Nzc5MDAxNy9waG90/by9hLWNsb3NlLXVw/LXZpZXctb2YtYW4t/dW5yZWNvZ25pemFi/bGUtZmVtYWxlcy1o/YW5kLWhvbGRpbmct/c29tZS1iZWF1dHkt/cHJvZHVjdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VXlY/RWRBZmFhTl9CTWpG/ZXJ2VDJReVlqZGFU/RTZxQXNqMUl5eXBF/MWs1UT0" 
          alt="" />
          <div className="info flex flex-col py-2">
            <div className="pr-info flex flex-col">
              <span className='text-lg font-semibold text-gray-800'>Worls Specilized</span>
              <span className='text-sm text-gray-500'>Noise cancelling premium sound quality.</span>
            </div>
            <div className="price-buy  flex items-center justify-between mt-4">
              <span className='font-bold'>$122</span>
              <span>
                <button 
                className='bg-indigo-600 px-4 rounded-lg py-1 text-white hover:bg-indigo-700 cursor-pointer'

                onClick={()=>hndclock()}
                
                >Add Now</button>
              </span>
            </div>
          </div>
        </div>

        ))}
















































      </div>
    </div>
    </>
  )
}

export default Card
