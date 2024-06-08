
import Guitar from './components/Guitar';
import Header from './components/Header';

import { useCart } from './hooks/useCart';



function App() {
  const {data,cart,addToCart,removerFromCart,incrementarQuantity,decrementarQuantity,clearCart}=useCart();

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
