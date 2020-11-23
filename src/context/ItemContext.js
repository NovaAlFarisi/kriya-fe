import React, {useState, useEffect} from 'react';
import KriyaApi from '../api/KriyaApi' 

export const ItemContext = React.createContext();
export const ItemProvider = (props) => {
    const [item, setItem] = useState('')
    useEffect(()=>{
        const fetchData = async () => {
          try {
            await KriyaApi.get('/').then(result=>{
              let data = result.data;
              let productsData = data.map((item,i)=>{
                return {...item, qty:0}
              })
              setItem(productsData)
            })
          } catch (error) {
            alert('Network error')
          }
        }
    
        fetchData()
      },[])
    return(
        <ItemContext.Provider value={[item, setItem]}>
            {props.children}
        </ItemContext.Provider>
    )
}