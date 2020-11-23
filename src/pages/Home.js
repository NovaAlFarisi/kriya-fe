import {useContext} from 'react'
import {ItemContext} from '../context/ItemContext';
import Product from '../components/product/ProductComponent';
const Home = () => {
    const [item, setItem] = useContext(ItemContext);
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