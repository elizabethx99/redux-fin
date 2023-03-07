import Filter from "./Filter";

const Categories = () => {
    return(
        <div className="block">
            <h1>MENU</h1>
            {['BOWLS', 'ROLLS', 'TORCH-PRESSED', 'ALL', 'APPETIZERS']
            .map((category, id) => <Filter key={category.id} category={category}/>)
            
            }
            
        </div>
    )
}

export default Categories;