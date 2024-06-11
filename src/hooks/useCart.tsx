import { useState , useEffect} from 'react';
import { database } from '../database/data';
import { Datos, DatosItem } from '../interfaces/interfaces';

export const useCart = () => {
 
  const initialCart=()=>{
    const localStorageCart=localStorage.getItem('cart');
    return localStorageCart? JSON.parse(localStorageCart):[];
    }
    const [data] = useState<Datos[]>(database);
    const [cart, setCart] = useState<DatosItem []>(initialCart);
  
    
useEffect(() => {
  
  localStorage.setItem('cart',JSON.stringify(cart));
  
}, [cart])


 

 

// state derivado

  return {
   data,
   cart,
   setCart,
 
  }
}