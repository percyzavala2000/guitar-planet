import { DatosItem } from '../interfaces/interfaces';

 export type CartAction=
 {type:'add-to-cart',payload:{item:DatosItem}}|
 {type:'remove-from-cart',payload:{id:DatosItem['id']}}|
 {type:'decrease-cuantity',payload:{id:DatosItem['id']}}|
 {type:'increase-cuantity',payload:{id:DatosItem['id']}}