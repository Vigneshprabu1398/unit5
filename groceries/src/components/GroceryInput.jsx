import {useState} from "react"

export const GroceryInput = ({addgrocery}) =>{
    const [text, setText] = useState("");
    return (
        <div>
            <input
                type="text"
                onChange={(e) =>{
                    setText(e.target.value);
                }}
            >
            </input>
            <button
                onClick={()=>{
                    addgrocery(text)
                }}
            >
                Add

            </button>
        </div>
    )
}