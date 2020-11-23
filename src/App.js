import { useEffect, useState } from 'react';
import KriyaApi from './api/KriyaApi'
import Product from './components/product/productComponent'
function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        await KriyaApi.get('/').then(result=>{
          let data = result.data;
          let productsData = data.map((item,i)=>{
            return {...item, qty:0}
          })
          setProducts(productsData)
        })
      } catch (error) {
        alert('Network error')
      }
    }

    fetchData()
  },[])
  console.log(products)
  return (
    <div className="container">
      <h1>Products</h1>
      {(!products ? (<p>Fetching products ...</p>) : (
        <div className="products-wrapper">
          {products.map((val,i)=>(
            <Product key={i} identifier={i} data={val}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
