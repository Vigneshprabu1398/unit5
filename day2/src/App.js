import './App.css';



function App() {
  const mobile = ["Android", "Black Berry", "iPhone", "Windows phone"];
  const brand = ["samsung", "htc", "iPhone", "nokia"]

  return (
    <div className='App'>
      <h1>Mobile Operating System</h1>
      <ul>{
       mobile.map ((e)=>(
          <li>{e}</li>
        ))}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>{
       brand.map ((e)=>(
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
 
}

export default App;
