import {useContext} from 'react';
import {ItemContext} from '../../context/ItemContext';
import {CartContext} from '../../context/CartContext';
const ProductComponent = ({name, qty, identifier, editAble = true}) =>{
    const [item, setItem] = useContext(ItemContext)
    const [cart, setCart] = useContext(CartContext)

    let items = [...item]

    const handleIncreaseQty = (index) => {
        let newItem = {...items[index]}
        newItem.qty += 1;
        items[index] = newItem;
        setItem(items);
    }
    const handleDecreaseQty = (index) => {
        let newItem = {...items[index]}
        if(newItem.qty !== 0){
            newItem.qty -= 1;
        } else {
            newItem.qty = 0;
        }
        items[index] = newItem;
        setItem(items);
    }
    const handleCheckOut = (index) => {
        let getItem = items[index]
        if(getItem.qty !== 0){
            setCart((curr)=>[...curr, getItem]);
        } else {
            alert('Enter at least 1 qty to process the order')
        }
    }
    return (
        <div className="product">
            <h3>{name}</h3>
            {!editAble ? (<p>Qty: {qty}</p>) : (
                <>
                    <div className="amount">
                        <button onClick={()=>handleDecreaseQty(identifier)}>-</button>
                        <input type="number" name="amount" id="amount" value={qty} readOnly/>
                        <button onClick={()=>handleIncreaseQty(identifier)}>+</button>
                    </div>
                    <button onClick={()=>handleCheckOut(identifier)}>Check Out</button>
                </>
            )}
        </div>
    )
}

export default ProductComponent