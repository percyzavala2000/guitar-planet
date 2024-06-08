import { useEffect, useState } from 'react';
import Guitar from './components/Guitar';
import Header from './components/Header';
import { database } from './database/data';
import { Datos, DatosItem } from './interfaces/interfaces';



function App() {
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


  return (
    <>
    <Header  cart={cart} removerFromCart={removerFromCart} incrementarQuantity={incrementarQuantity} decrementarQuantity ={decrementarQuantity } clearCart ={clearCart }  />
      

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
         {
          data.map((data)=>{
            return (
              <Guitar key={data.id} data={data}  addToCart={addToCart}/>
            )
          })
         }

            
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
