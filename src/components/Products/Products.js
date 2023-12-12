import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import ProductDetail from '../Products/ProductDetail';
import { NavLink } from 'react-router-dom';

function ProductsPage() {
  
    const {products} = useContext(AppContext);
    const url = "https://dummyjson.com/products";
  
    return (
    <div>
      {
        products.length > 0 ? (
        products.map((product)=>{
            return (
              <NavLink to={`/productDetailPage/${product.id}`}>
                <ProductDetail product={product} key={product.id} />
              </NavLink>
            ); 
        })) : 
        
        (<div><p>No Product Found Sorry :(</p></div>)
      }
    </div>
  )
}

export default ProductsPage;
