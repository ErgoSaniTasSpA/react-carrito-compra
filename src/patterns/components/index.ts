

//export { ProductCard } from './product-card';
export { ProductImage } from './product-image';
export { ProductTitle } from './product-title';
export { ProductButtons } from './product-buttons';


//Solo Renombra el Componente 
import { ProductCard  as ProductCardHOC } from './product-card';

import { ProductImage } from './product-image';
import { ProductTitle } from './product-title';
import { ProductButtons } from './product-buttons';
import { ProductCardHOCprops } from '../interfaces/interfaces';


/* 
* Object.assign : Esta sentencia indica que al Componete ProductCard se le asigna mas propiedad 
* o Componentes Hijos
*/
export const ProductCard:ProductCardHOCprops = Object.assign ( ProductCardHOC ,{
    Title   : ProductTitle,
    Image   : ProductImage,
    Buttons : ProductButtons,
})

export default ProductCard;