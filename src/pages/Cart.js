import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import Product from '../components/product/ProductComponent';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    let totalQty = cart.reduce((acc,curr)=> acc+curr.qty,0)
    return(
        <div className="container">
            <h1>Cart</h1>
            <div className="list">
                {cart.map((val,i)=>(
                    <Product key={i} identifier={i} qty={val.qty} name={val.title} editAble={false}/>
                ))}
            </div>
            <h3>Total {totalQty}</h3>
        </div>  
    )
}

export default Cart