export const GroceryItem = ({ grocery }) =>{
    return (
        <div>
        { grocery.title } - {grocery.status ? "Purchased" : "Not-Purchased"}
        <button>
            
            Delete
        </button>
        
        </div>
    );
}