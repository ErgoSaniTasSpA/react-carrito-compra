import { createContext, CSSProperties, ReactElement } from 'react';

import styles from '../styles/styles.module.css';

import { UseProduct } from '../hooks/use-product';
import { OnChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext( {} as ProductContextProps);
const { Provider } = ProductContext;


export interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: ( args : OnChangeArgs ) => void;
  value?: number;
}

/**************************** NOTA IMPORTANTE ************************************************
* * Provider : Envuelve la aplicación React y se encarga de suministrar el STORE de REDUX a todos 
* * los componentes que se encuentren dentro de la aplicación. De esta manera, cualquier componente 
* * que necesite acceder al STORE (ProductContextProps) puede hacerlo utilizando los hooks 
* * o funciones específicas proporcionadas por React-Redux.
* *********************************************************************************************/

export const ProductCard = ( {children,product,className,style,onChange,value }:ProductProps) => {

  const {counter , increaseBy} = UseProduct( { onChange , product, value } );

  return (

    <Provider value = {{ counter,increaseBy,product }} >
      {/* Aqui va Body del page */}
      <div className={`${ styles.productCard } ${ className }`} style= { style } >
        {/*  Renderiza un objeto ReactElement (componets) NO retorna parametros (void) */}
        { children } 
      </div>
    
    </Provider>
  )
}
