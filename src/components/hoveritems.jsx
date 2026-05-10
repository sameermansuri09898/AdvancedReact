import React from 'react'
import Asso from "./hovercomponents/asso";
import Popular from "./hovercomponents/popular";
import { House ,User,Settings, Home} from 'lucide-react';

export default function Navbar(){
  return(
    <>
    
    <div className="container-nav w-full flex items-center justify-between p-4 shadow hover:shadow-xl">

      <div className="logo md:text-3xl">
       <span className="font-bold">Speed</span><span className="text-red-800">XS</span>
      </div>

      <div className="asso flex gap-5 items-center">


        <div className="drop-wrapper relative w-full group ">
          <button>Accosires</button>
          <Asso/>
          </div>
        <div className="drop-wrapper relative w-full group ">
          <button>Trending</button>
          <Popular/>
          </div>


        </div>



      <div className="menu flex gap-5">
        <span className='font-bold cursor-pointer'><House size={22} /></span>
        <span className='font-bold cursor-pointer'><User  size={22}/></span>
        <span className='font-bold cursor-pointer'><Settings /></span>
      </div>
    </div>
    
  
    
    
    
    </>
  )
}