import { useState } from "react";
import { Product } from "../interfaces/interfaces";
import { products } from '../data/products';


export interface ProductInCart extends Product {
  count : number
}

interface Props {
  count:number, 
  product:Product
}

export const UseShoppingCart = () => {

  /**********************Descripcion UseState ************************************************
  * * <{ [key: string]: ProductInCart }>: Esta es una anotación de TypeScript que describe la 
  * * forma del estado. En este caso, está especificando que shoppingCart es un objeto donde 
  * * las claves son cadenas (string) y los valores son del tipo ProductInCart.
  * * EJ " useState<{ [key:string]:ProductInCart}>({}) " : 
  * * useState ({ 
  * *    { '1' : {...product1, count: 10 }
  * *    { '2' : {...product2, count: 2 } 
  * * })
  *******************************************************************************************/
    
  const [shoppingCart,setShoppingCart] = useState<{ [key:string]:ProductInCart}>({});

  //Funcion Opcion Primera - mas simple  
  const onProductCountChange= ( {count, product } : Props ) => {

      //oldShoppingCart => State del Shopping Cart Anterior
      setShoppingCart ( oldShoppingCart => {

        const productInCart : ProductInCart = oldShoppingCart[product.id] || {...product, count: 0 }
        productInCart.count += count;

        if (productInCart.count < 1 ) {
          const { [product.id]:toDelte, ...resto } = oldShoppingCart;
          return resto
        }
            
        return {
          ...oldShoppingCart,
          [product.id] : productInCart
        }
      
      })
  }

    // Funcion Opcion segunda - usa Math
  const onProductCountChange_TWO = ( {count, product } : Props ) => {

    //oldShoppingCart => State del Shopping Cart Anterior
    setShoppingCart ( oldShoppingCart => {

      const productInCart : ProductInCart = oldShoppingCart[product.id] || {...product, count: 0 }

      //Si Existe el Producto
      if ( Math.max ( productInCart.count + count, 0  ) > 0 ) {

        productInCart.count += count;

        return {
          ...oldShoppingCart,
          [product.id] : productInCart
        }
      }
      /********************************************************************
      * * Borrar el Producto del arreglo y retornar el resto de productos
      *********************************************************************/  
      const { [product.id]:toDelete, ...resto } = oldShoppingCart;
      return resto

    })
  }

  /********************Descripcion de Return de la funcion ^^^^*****************************  
  * * Basicamente toma el state(shoppingCart) anterior y remplaza los valores de 
  * * ProductInCart por el Id, es decir :  
  * *  T  { ...shoppingCart                     ,   { key :   ProductInCart         }   }
  * *  +  {   { '1' : { product1, count: 9 } }  ,   { '1' : { product1, count: 10 } }   }
  * *  -  {   { '1' : { product1, count: 9 } }  ,   { '1' : { product1, count: 8  } }   } 
  ******************************************************************************************/

  return {
    products,
    shoppingCart,
    onProductCountChange,
    onProductCountChange_TWO,
  }
  
}