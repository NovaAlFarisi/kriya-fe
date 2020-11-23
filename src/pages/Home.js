import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {ItemContext} from '../context/ItemContext';
import {CartContext} from '../context/CartContext';
import Product from '../components/product/ProductComponent';
const Home = () => {
    const [item, setItem] = useContext(ItemContext);
    const [cart, setCart] = useContext(CartContext);
    return (
        <div className="container">
        <h1>Products</h1>
        {(!item ? (<h1>Fetching products ...</h1>) : (   
                <div className="list">
                    {item.map((val,i)=>(
                        <Product key={i} identifier={i} qty={val.qty} name={val.title}/>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Home