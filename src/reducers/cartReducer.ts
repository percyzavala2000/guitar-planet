import { database } from "../database/data";
import { Datos, DatosItem } from "../interfaces/interfaces";
//es el tipado para la accion de use reducer paso 1
export type CartAction =
  | { type: "add-to-cart"; payload: { item: Datos } }
  | { type: "remove-from-cart"; payload: { id: Datos["id"] } }
  | { type: "decrease-cuantity"; payload: { id: Datos["id"] } }
  | { type: "increase-cuantity"; payload: { id: Datos["id"] } }
  | { type: "clear-cart" };
//este es el tipado para el state de usereducer paso 2
type CarState = {
  data: Datos[];
  cart: DatosItem[];
};

const initialCart=()=>{
  const localStorageCart=localStorage.getItem('cart');
  return localStorageCart? JSON.parse(localStorageCart):[];
  }
//este es ka funcion para la inicializar el state paso 3
export const initialState: CarState = {
  data: database,
  cart: initialCart(),
};
const MAX_ITEMS = 10;
const MIN_ITEMS = 1;

// vamos a crear la funcion cartReducer paso 4
export const cartReducer = (state: CarState, action: CartAction) => {
  

  switch (action.type) {
    case "add-to-cart":
      const itemExiste = state.cart.find(
        (e) => e.id === action.payload.item.id
      );
      console.log(itemExiste);

      let updateCart: DatosItem[] = [];
      if (itemExiste) {
        updateCart = state.cart.map((item) => {
          if (item.id === action.payload.item.id) {
            if (item.quantity < MAX_ITEMS) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          } else {
            return item;
          }
        });
      } else {
        const newItem: DatosItem = { ...action.payload.item, quantity: 1 };

        updateCart = [...state.cart, newItem];
        // setCart([...cart, item]);
      }
      return {
        ...state,
        cart: updateCart
      };

    case "remove-from-cart":
      const deleteCart=state.cart.filter(item=>item.id!==action.payload.id);
      return {
        ...state,
        cart:deleteCart
      };
    case "decrease-cuantity":
      const decrementarCart=state.cart.map(item=>{
        if(item.id===action.payload.id&&item.quantity>MIN_ITEMS){
          return{
            ...item,quantity:item.quantity-1
          }
        
        }
        return item;
        
        })
      return {
        ...state,
        cart:decrementarCart
      };

    case "increase-cuantity":
      const incrementarCart=state.cart.map(item=>{
        if(item.id===action.payload.id&&item.quantity<MAX_ITEMS){
          return{
            ...item,
            quantity:item.quantity+1
          }
        
        }
        return item;
        
        })
      return {
        ...state,
        cart:incrementarCart
      };

    case "clear-cart":
      return {
        ...state,
        cart:[]
      };

    default:
      return state;

      
  }
  
};
//luego hacemos el llamado en app.tasx con usereducer
