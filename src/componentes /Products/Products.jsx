import React, { useEffect, useContext } from 'react';
import fetchProducts from '../../API/fetchProducts';
import './Products.css';
import ProductCard from '../productCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';


function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading /> ) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
    
  );
}

export default Products;