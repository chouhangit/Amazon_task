import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";



function ProductContainer() {

  const {products , isLoading , isError , isSuccess} = useSelector(state => state.product)

  const dispatch = useDispatch()


  // const [products , setProducts] = useState([])

  // const getProduct = async()=>{
  //     const res = await fetch('https://fakestoreapi.com/products')
  //     const data = await res.json()
  //     setProducts(data)
  //     console.log(products)

  // }

  // useEffect(()=>{
  //     getProduct()
  // },[])

 

 



  return (
    <div className="container">
      <h1 className="all-products-title">All Products</h1>

    {
        products.map(product => <ProductCard key={product.id} product={product} />)
    }
      
    </div>
  );
}

export default ProductContainer;
