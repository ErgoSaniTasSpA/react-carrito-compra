import { CSSProperties, useContext } from "react";
import { ProductContext } from "./product-card";
import styles from '../styles/styles.module.css';

export interface Props {
    className? : string;
    style?: CSSProperties;
}

export const ProductButtons = ( { className,style } : Props ) => {

    const { counter,increaseBy  } = useContext(ProductContext);
  
    return (
      <div 
        style = { style }
        className={` ${styles.buttonsContainer } ${className} `} >
          <button
              className={ styles.buttonMinus } 
              onClick={ () => increaseBy ( -1 ) } > - </button>
          <button
              className={ styles.countLabel } 
              onClick={ () => increaseBy ( counter ) } > { counter } </button>
          <button
              className={ styles.buttonAdd } 
              onClick={ () => increaseBy ( +1 ) } > + </button>        
      </div>
    )
  }