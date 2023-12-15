import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import ProductDetail from '../Products/ProductDetail';
import { Link } from 'react-router-dom';

function ProductsPage() {
  
    const { products, query } = useContext(AppContext);

    const category = ['smartphones', 'laptops', 'fragrances', 'home-decoration', 'skincare', 'groceries'];

    const filteredProducts = products.filter((product)=>{
      return product.category.includes(query.toLowerCase());
    })
  
    return (
      <div>
        {filteredProducts.length > 0 ? (
          <div className="w-3/5 min-h-full grid-row gap-3 m-auto">
            {filteredProducts.map((product) => {
              return (
                <Link to={`/productDetailPage/${product.id}`} key={product.id}>
                  <ProductDetail product={product} />
                </Link>
              );
            })}
          </div>
        ) : (
          <div className='min-h-[90vh] flex flex-col justify-center items-center text-2xl bg-gray-300 shaddow-lg'>
            <p className='text-3xl m-2'>No Product Found, sorry :(</p>
            <p className='text-2xl m-2'>Try Something from below...</p>
            <div>
              {
                category.map((product)=>{
                  return (
                    <ul className='text-2xl shadow-sm m-2'>
                      <li>{product}</li>
                    </ul>
                  )
                })
              }
            </div>
          </div>
        )}
      </div>
    );
}

export default ProductsPage;
