import { Props as ProductTitleProps } from '../components/product-title';
import { Props as ProductImageProps } from '../components/product-image';
import { Props as ProductButtonsProps } from '../components/product-buttons';
import { ProductProps } from '../components/product-card';


export interface OnChangeArgs {
    product : Product;
    count : number;
}


export interface Product {
    id    :string;
    title : string;
    img?  : string;
}  

export interface ProductContextProps {
    counter    :number;
    increaseBy: ( value: number ) => void;
    product: Product;
}  


export interface  ProductCardHOCprops {
    ( { children, product } : ProductProps ) : JSX.Element,
    Title: (  Props : ProductTitleProps) => JSX.Element,
    Image: ( Props : ProductImageProps ) => JSX.Element,
    Buttons: ( Props : ProductButtonsProps ) => JSX.Element,
}

  