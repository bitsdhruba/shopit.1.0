import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import ProductDetail from '../Products/ProductDetail';
import { Link } from 'react-router-dom';

function ProductsPage() {
  
    const {products} = useContext(AppContext);
  
    return (
    <div >
      {
        products.length > 0 ? (
        <div className='w-3/5 min-h-full grid-row gap-3 m-auto'>{
        products.map((product)=>{
            return (
              <Link to={`/productDetailPage/${product.id}`} key={product.id}>
                <ProductDetail product={product} />
              </Link>
            ); 
        })}
        </div>) : 
        
        (<div><p>No Product Found Sorry :(</p></div>)
      }
    </div>
  )
}

export default ProductsPage;
