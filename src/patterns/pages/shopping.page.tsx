import  { ProductCard,ProductImage, ProductTitle,ProductButtons } from '../components/';
import { UseShoppingCart } from '../hooks/use-shopping-cart';
import '../styles/styles.module.css'; 

export const shoppingPage = () => {

  const { products,shoppingCart,onProductCountChange } = UseShoppingCart()

  return (
    <div style={ { width:'100%' } } >
      <h1><center>SHOPPING STORE</center></h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width:'100%'
      }} >

      {
        products.map( product => (

          //Clase Padre
          <ProductCard
            key = { product.id } 
            product= { product }
            className='bg-dark text-white' 
            onChange= { (event) => onProductCountChange(event) }
            value = { shoppingCart[product.id]?.count || 0 }
          >
            
            {/* Clases Hijas  */}
            <ProductImage 
              style = {{ boxShadow: '10px 10px 10px rgba(0,0,0,2)' }} 
              className='custom-image'
            />

            {/* Clases Hijas  */}
            <ProductTitle 
              title='Testing'
              className='text-white text-bold' 
            />
            {/* Clases Hijas  */}
            <ProductButtons className='custom-buttons' />

            </ProductCard>
        ))
      }        
      {
      /************************************************************************************** 
      * * <input value { count } onChange = { (e) => setCounter( e.target.value ) }  />
      **************************************************************************************/
      }
        <div className='shopping-cart'>
        {
          /************************************************************************** 
           * * Object.entries : Convierte un objeto (shoppingCart) en un arreglo de
           * * clave valor [key,value] 
          ****************************************************************************/
          Object.entries ( shoppingCart ).map( ( [key,product ]) => (

            <ProductCard
              key = { key }
              product= { product }
              className='bg-dark text-white' 
              style={{ width: '100px' }}
              onChange= { onProductCountChange }
              value={ product.count }
            >
              <ProductImage 
                style = {{ boxShadow: '10px 10px 10px rgba(0,0,0,2)' }} 
                className='custom-image'
              />
              <ProductButtons 
                className='custom-buttons'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }} 
              />

            </ProductCard>
          ))
        }
        </div>
      </div>
    <div>
      <code>
        { JSON.stringify(shoppingCart, null, 5) }
      </code>
    </div>  
    
    </div>
  )
}


export default shoppingPage;