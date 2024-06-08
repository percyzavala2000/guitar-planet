import { useState } from 'react';
import Guitar from './components/Guitar';
import Header from './components/Header';
import { database } from './database/data';
import { Datos, DatosItem } from './interfaces/interfaces';



function App() {

const [data, setData] = useState<Datos[]>(database);
const [cart, setCart] = useState<DatosItem []>([]);


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




  return (
    <>
    <Header  cart={cart} />
      

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
