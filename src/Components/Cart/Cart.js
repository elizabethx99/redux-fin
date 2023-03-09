import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
const cartitems = useSelector(getCartItems);
const totalPrice = useSelector(getTotalPrice);
    return(
        <div>
            
            <h3>CART</h3>
            <p>TOTAL: ${totalPrice} </p>
            {cartitems.map((cartItem) => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
            
        </div>
    )
}

export default Cart;