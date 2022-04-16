import { Routes,Route } from "react-router-dom"
import { City } from "../city/City"
import { Home } from "../home/Home"


export const Routers= () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/city" element={<City/>}/>
            </Routes>
        </div>
    )
}