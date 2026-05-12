import { useState,useEffect } from "react";

export default function Api(){
  
  const [users,setUser] = useState([]);

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setUser(data))
  },[])
  
  return(
    <div className="users">
      {console.log(users)}
      {users.map((data)=>
      <div className="user" key={data.id}>
        <h1>{data.name}</h1>
        <p>{data.email}</p>
      </div>
      )}
    </div>
  )
}
