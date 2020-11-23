import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { ItemProvider } from './context/ItemContext';
import {CartProvider} from './context/CartContext';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
function App() {
  return (
    <ItemProvider>
      <CartProvider>
        <Router>
          <NavigationBar/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/cart" exact>
              <Cart/>
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </ItemProvider>
  );
}

export default App;
