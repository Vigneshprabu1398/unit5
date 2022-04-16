import { useState } from 'react'
import './App.css'
import { Routers } from './Routes/Router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Routers />
    </div>
  )
}

export default App
