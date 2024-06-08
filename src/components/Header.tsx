import { useMemo } from 'react';
import {  FuncionProps } from '../interfaces/interfaces';


const Header = ({cart,removerFromCart,incrementarQuantity,decrementarQuantity,clearCart}:FuncionProps) => {
 // state derivado
 
 const isEmpy=useMemo(()=> cart.length===0,[cart] ) ;
 const carTotal = useMemo(() => {
  return cart.reduce((total,item)=>total+(item.quantity*item.price),0)
 },[cart])
  return (
  
    <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                      {/* <div> Guitar Planet </div> */}
                        <img className="img-fluid" src="/img/logito2.png" alt="imagen logo" /> *
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                          { isEmpy? (
                            
                            <p className="text-center">El carrito esta vacio</p>
                          ):(

                            <> 
                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                  {
                                    cart.map(e=>{
                                     
                                        
                                        
                                      return(
                                       
                                        <tr key={e.id} >
                                        <td>
                                            <img className="img-fluid" src={`/img/${e.image}.jpg`} alt="imagen guitarra" />
                                        </td>
                                        <td>{e.name}</td>
                                        <td className="fw-bold">
                                                S/. {e.price}
                                        </td>
                                        <td className="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={()=>decrementarQuantity(e.id)}
                                            >
                                                -
                                            </button>
                                                {e.quantity}                                                
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={()=>incrementarQuantity(e.id)}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                                onClick={()=>removerFromCart(e.id)}
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>

                                      )
                                    })
                                  }


                                    
                                </tbody>
                            </table>
                            <p className="text-end">Total pagar: <span className="fw-bold">S/. {carTotal}</span></p>
                            <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}   >Vaciar Carrito</button>
                            </>
                          ) }


                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    
  
  )
}
export default Header