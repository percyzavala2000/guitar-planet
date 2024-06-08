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
  removerFromCart:(id:Datos['id'])=>void,
  incrementarQuantity:(id:Datos['id'])=>void,
  decrementarQuantity:(id:Datos['id'])=>void,
  clearCart:()=>void
  carTotal:number
  isEmpy:boolean
}