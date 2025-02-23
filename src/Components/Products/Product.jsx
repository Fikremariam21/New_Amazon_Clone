import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from './product.module.css'
import Loader from '../Loader/Loader';
import {API_ENDPOINT} from '../../Config/config'

function Product() {
    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
     useEffect(() => {
      setIsLoading(true)
      
        axios.get (API_ENDPOINT)
       .then((res) => {
        console.log("Fetched Data:", res.data);
        setIsLoading(false)
        setProduct(res.data)
        isLoading
       
       }).catch((err) => {
        console.log(err)
        setIsLoading(false)
        
       })
     }, []);
    
  return (
    <div className={styles.main_container}>
    {
      isLoading?(<Loader/>) : (
        <section className= {`${styles.product_container}`}> 
        {
            products.map((singleProduct) => (
                <ProductCard renderAdd={true} product= {singleProduct} key= {singleProduct.id}/>
            ))
        }
    </section>)
    }
    </div>
    
  )
}

export default Product
