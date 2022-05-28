import React from "react"
import "./Adduser.css"

const Adduser = ({props,onAdd}) => {

  const handleOnSubmit=(e) => {
    e.preventDefault();
    onAdd(e.target.name.value);
    e.target.name.value ="";


  }



  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3 className="header">Create Table</h3>
        <hr/>
        <div className="Layout">
            <label  for="Layout">Layout:</label>
           <select className="Box">
            <option  selected value="null">Select Layout</option>
             <option value="Rectangle">Rectangle</option>
             <option  value="Square">Square</option>
             <option value="Columnar">Columnar</option>
        </select>
          </div>
         <div className="Layout">
        <label  for="Layout">Name:</label>
          <input  className="name" placeholder="Enter Name" name="name"/>
        </div>


          <div className="Layout">
        <label  for="Layout">Capacity:</label>
          <input className="capacity" placeholder="Enter number of capacity" type="number"/>
        </div>

          <div className="Layout">
        <label  for="Layout">Status:</label>
            <input className="checkbox"type="checkbox" />
        </div>

        <div className="Layout">
        <label for="Layout">Image:</label>
            <input className="image" type="file" />
        </div>

        <button   className="btn1"onSubmit={handleOnSubmit}>Create Table</button>
          <button className="btn2"  >Cancel</button>

        <hr/>
      </form>
    </div>
  )
}

export default Adduser
