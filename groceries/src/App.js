import './App.css';
import { Todo } from './components/Todo';



function App() {
  const mobile = ["Android", "Black Berry", "iPhone", "Windows phone"];
  const brand = ["samsung", "htc", "iPhone", "nokia"]

  return(
  <div className='App'>
    <Todo />
  </div> 
  );
}

export default App;
