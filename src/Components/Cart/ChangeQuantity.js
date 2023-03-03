const ChangeQuantity = ({quantity, setQuantity}) => {
    
    const aaddQuantity = () => {
        const newQuantity = quantity +1;
        setQuantity(newQuantity);
    }

    const removeQuantity= () => {
        if (quantity <= 1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity);
    }

    return(
        <div>
            <button onClick={aaddQuantity}>+</button>
            <span>{quantity}</span>
            <button onClick={removeQuantity}>-</button>
        </div>
    )
}

export default ChangeQuantity;