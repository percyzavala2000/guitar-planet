import { useState , useEffect, useMemo} from 'react';
import { database } from '../database/data';
import { Datos, DatosItem } from '../interfaces/interfaces';

export const useCart = () => {
 
  const initialCart=()=>{
    const localStorageCart=localStorage.getItem('cart');
    return localStorageCart? JSON.parse(localStorageCart):[];
    }
    const [data] = useState<Datos[]>(database);
    const [cart, setCart] = useState<DatosItem []>(initialCart);
    const MAX_ITEMS=10;
    const MIN_ITEMS=0;
    
useEffect(() => {
  
  localStorage.setItem('cart',JSON.stringify(cart));
  
}, [cart])


const addToCart = (item:DatosItem) => { 
  const itemExiste=cart.findIndex(e=>e.id===item.id);
  const updateCart=[...cart];
  if(itemExiste>=0){
    updateCart[itemExiste].quantity++;
    setCart(updateCart);
    console.log("esxiste guitarra")
    
  }else{
    console.log("se agrega no existe")
    item.quantity=1;
    setCart([...cart,item]);

  }
  
 }

 const removerFromCart = (id:Datos['id']) => {
  console.log("eliminando",id);
  setCart(prevCart=>prevCart.filter(datos=>datos.id!==id));
  
 }

 const incrementarQuantity = (id:Datos['id']) => {

const updateCart=cart.map(item=>{
if(item.id===id&&item.quantity<MAX_ITEMS){
  return{
    ...item,quantity:item.quantity+1
  }

}
return item;

})
setCart(updateCart);

 }
 const decrementarQuantity = (id:Datos['id']) => {
  const updateCart=cart.map(item=>{
    if(item.id===id&&item.quantity>MIN_ITEMS){
      return{
        ...item,quantity:item.quantity-1
      }
    
    }
    return item;
    
    })
    setCart(updateCart);
 }
const clearCart = () => {
  console.log("vaciando carrito");
  setCart([]);
  
}
// state derivado
 
const isEmpy=useMemo(()=> cart.length===0,[cart] ) ;
const carTotal = useMemo(() => {
 return cart.reduce((total,item)=>total+(item.quantity*item.price),0)
},[cart])
  
  return {
   data,
   addToCart,
   cart,
   clearCart,
   decrementarQuantity,
   incrementarQuantity,
   removerFromCart,setCart,
   isEmpy,
   carTotal

  }
}