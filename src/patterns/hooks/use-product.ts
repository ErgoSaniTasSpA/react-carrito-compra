import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";


interface useProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs ) => void;
    value?: number;
}


export const UseProduct = ( { onChange,product, value = 0 } : useProductArgs  ) => {

    const [counter,setCounter] = useState( value );

    // ' !! ' : Convierte la funcion en Boolean (!!onChange)
    const isControlled = useRef (!!onChange)

    //Se el counter cambia se ejecuta el onChange()
    const increaseBy = ( value : number ) => {

        if ( isControlled.current ) {
            return onChange!({ count: value, product });
        }

        const newValue = Math.max ( counter + value, 0 );
        setCounter( newValue );

        onChange && onChange( { count : newValue, product });
    }

    useEffect ( () => {

        setCounter( value );

    },[value])


    return {
        counter,
        increaseBy
    }

} 