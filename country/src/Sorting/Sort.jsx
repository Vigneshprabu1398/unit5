import { useEffect,useState } from "react"
import axios from "axios"

export const Sort=()=>{
    const [country, setCountry] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/country")
        .then((res)=>{
            setCountry(res.data)
        })
    }, [])

    return(
        <div>
            <select name="country" id="country">
                <option value="--">--</option>
                <option value="asc">ASC</option>
                <option value="dec">DEC</option>
            </select>
            <br />
            <br />
            <label>Filter by Country: </label>
            <select name="country" id="country">
                <option value="--">--</option>
                {
                    country.map(e=>
                        <option>{e.country}</option>
                        )
                }
            </select>
        </div>
    )
}