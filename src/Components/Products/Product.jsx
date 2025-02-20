import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from './product.module.css'
import Loader from '../Loader/Loader';

function Product() {
    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
     useEffect(() => {
      setIsLoading(true)
      
        axios.get ('https://fakestoreapi.com/products')
       .then((res) => {
        console.log(res);
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
                <ProductCard product= {singleProduct} key= {singleProduct.id}/>
            ))
        }
    </section>)
    }
    </div>
    
  )
}

export default Product
