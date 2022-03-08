import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryItem } from "./GroceryList";
import { nanoid } from "nanoid";

export const Todo =() =>{
    const [grocerys, setGrocerys] =useState([]);

    const addgrocery = (data) =>{
        const itm ={
            id: nanoid(),
            title:data,
            status : false,
        }
        setGrocerys([...grocerys, itm]);
    };
    return(
        <div>
            <GroceryInput addgrocery={addgrocery}/>
            {grocerys.map((e) =>(
                <GroceryItem grocery = {e} key={e.id}/>
            ))}
        </div>
        
    )
}