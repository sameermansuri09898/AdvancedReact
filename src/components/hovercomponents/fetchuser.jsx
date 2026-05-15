import { useState,useEffect } from "react";

export default function Fetchingdata(){

  const [users,setUsers] = useState([]);
  const [Load,setloading] = useState(true);
  const [error,seterror] = useState("");

  useEffect(()=>{
    const controller = new AbortController()

    const Fetchuser = async ()=>{

     try{
      setloading(false)
      seterror("")

      const Token = localStorage.getItem("access");

      const responce = await fetch("",
        {
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${Token}`
          },
        signal:controller.signal
        }
      );

      if(responce.status==401){
        throw new error("Authorizations")
      }
      if (!responce){
        throw new error("User is not fatched");
      }

      const data = await responce.json();
      setUsers(data)
  
    }catch(err){
      if(err.name !=="Abortname"){
        seterror(err.messsage || "something gone wrongg");
      }

    }finally{
      setloading(false)
    }
  
  }

  Fetchuser();

  return()=>{
    controller.abort();
  }
  },[]);

}