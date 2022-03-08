import { useState } from "react"
import { GroceryInput } from "./Groceryinput"
import { GroceryItem } from "./GroceryList";

export const Todo =() =>{
    const [grocerys, setGrocerys] =useState([]);

    const addgrocery = (data) =>{
        setGrocery([...todogrocerys, data]);
    };
    return(
        <div>
            <GroceryInput addgrocery={addgrocery}/>
            {grocerys.map((e) =>(
                <GroceryItem grocery = {e} />
            ))}
        </div>
        
    )
}