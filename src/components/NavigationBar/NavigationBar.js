import './NavigationBar.css';
import {useContext} from 'react';
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext';
const NavigationBar = () => {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div className="navbar">
            <h1 className="nav-brand">Kriya Test</h1>
            <ul className="nav-list">
                <Link to="/"><li className="nav-item">Home</li></Link>
                <Link to="/cart"><li className="nav-item">Cart ({cart.length})</li></Link>
            </ul>
        </div>
    )
}

export default NavigationBar