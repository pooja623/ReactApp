import React , {useState, useEffect} from 'react';
import './App.css';
import Adduser from './components/Adduser';
import User from './components/user';

const App =() => {

  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetchData();
  },[])

  const fetchData = async ()=> {
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data)=> setUsers(data))
    .catch((err)=>{
      console.log(err);
    })
  }

  const onAdd = async (name) => {
    await fetch('https://jsonplaceholder.typicode.com/users',{
      method: 'POST',
      body: JSON.stringify({

        name:name,

      }),
      headers:{
        "Content-type": "application/json; charset=UTF-8",
      }
    })
    .then((res)=>{
      if(res.status !== 201){
        return
      }else{
        return res.json();
      }

    })
    .then((data)=>{
      setUsers((users)=>[...users,data]);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

const onDelete = async(id) => {
  await fetch("https://jsonplaceholder.typicode.com/users/${id}",{
    method: 'DELETE',
     body: JSON.stringify({
        id:id,

      }),
      headers:{
        "Content-type": "application/json; charset=UTF-8",
      }

  })
  .then((res)=>{
    if(res.status !== 200){
      return
     }else{
       setUsers(users.filter((user)=>{
         return  user.id!==id;
       }))
     }


  })
  .catch((err)=>{
    console.log(err);
  })
}

  console.log(users)

  return (
    <div className="App">

    <Adduser onAdd={onAdd}/>
   <div>
      {
        users.map((user) =>(
          <div>
               <User id ={user.id} name={user.name} onDelete={onDelete} />

        </div>
          ))

      }
    </div>
    </div>
  )
}

export default App;
