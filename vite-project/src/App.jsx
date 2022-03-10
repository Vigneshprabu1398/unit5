import { useState } from 'react'
import './App.css'

function App() {
  const [form,setForm] = useState({
    age:"",
    name:"",
  });
  const handleChange = (e) =>{
    console.log(e.target);
  };

  return (
    <div>
      <form>
        <h3>Form</h3>
        <input
        id="name"
        type="text"
        onChange ={handleChange}
        placeholder="Enter Name"
        />
        <input
        id="age"
        type="number"
        onChange ={handleChange}
        placeholder="Enter Age"
        />
      </form>
    </div>
  );
}

export default App
