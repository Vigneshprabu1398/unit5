
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Hello } from './components/Hello'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { ProductDetails } from './components/ProductDetails'
import { Users } from './components/Users'
function App() {

  return (
    <div className="App">
       <Navbar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
