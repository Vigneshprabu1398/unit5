import { Sort } from "../Sorting/Sort"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "./Home.css"

export const Home=()=>{

    const [city, setCity] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/city")
        .then((res)=>{
            setCity(res.data)
        })
    }, [])

    return(
        <div>
            <h1>CITY COUNTRY</h1>
            <Link className="city" to={"/city"}>
                <button>Add City</button>
            </Link>
            <Sort />
            <div className="main">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {
                   city.map(e=>
                       <tbody>
                           <tr>
                               <td>{e.id}</td>
                               <td>{e.country}</td>
                               <td>{e.city}</td>
                               <td>{e.population}</td>

                               <td>
                                   <button>Edit</button></td>

                               <td>
                                   <button>Delete</button></td>
                           </tr>
                       </tbody>
                    )
               }
                </table>
            </div>
        </div>
    )
}