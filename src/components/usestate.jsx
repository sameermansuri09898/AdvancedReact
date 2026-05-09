import React,{useState} from 'react'

export default function Feactures(){

  const [active,setAcivate]=useState('login');
  const tab=["login","register","logout","account"];
  const content=()=>{
    if (active=="login")return "Login page"
    if (active=="register")return "register page"
    if (active=="logout")return "logout page"
    if (active=="account")return "Logaccountn page"
    return "Slect Return tabs"

  }

  return(
    <>
    <div className="conat w-full gap-10">


      {tab.map((tabs,id)=>(
        <button
        
        key={id}
        onClick={()=>setAcivate(tabs)}
        className={`
          
          text-black
          ${active==tabs} ?"text-red-200":"text-black"
          `}


        
        >{tabs}</button>

      ))}




    </div>
    
    
    {content()}
    
    </>
  )


}