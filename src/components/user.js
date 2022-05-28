import React from 'react'
import "./user.css"

const User = (props) => {

  const handleDelete=()=>{
    props.onDelete(props.id);
  }

  return (
    <div className = "list" >
   <span>{props.name}</span>

   <span>{props.number}</span>
   <span>

     <button onClick={handleDelete} >Delete</button>
   </span>
      </div>
  )
}

export default User
