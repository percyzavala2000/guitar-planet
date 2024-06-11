import { CartAction } from '../reducers/cartReducer';

export type Datos = {
  id: number,
  name: string,
  image: string,
  description: string,
  price:number,
  quantity?: number,
}

export type DatosProps={

  data:DatosItem,
  addToCart:(item:DatosItem)=>void;
}

export type DatosItem={
  id: number,
  name: string,
  image: string,
  description: string,
  price:number
  quantity:number
 
  
}
export type FuncionProps ={

  cart:DatosItem[],
  dispatch: React.Dispatch<CartAction>,


}