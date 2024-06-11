import {  Datos} from '../interfaces/interfaces';
import { CartAction } from '../reducers/cartReducer';


//{data:Datos,addToCart: (item: Datos) => void} INLINE TYPE
type GuitarProps={
  data:Datos;
  dispatch: React.Dispatch<CartAction>
}

const Guitar = ({data,dispatch}:GuitarProps) => {
  const {description,image,name,price}=data

  console.log("desde aqui",data);
  

  return (
   <>
<div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{description}</p>
                    <p className="fw-black text-primary fs-3">S/.{price}</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={()=>dispatch({type:'add-to-cart',payload:{item:data}})}
                    >Agregar al Carrito</button>
                </div>
            </div>
   
   </>
  )
}
export default Guitar