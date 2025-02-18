import React from 'react'
import { Rating } from '@mui/material'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import styles from './product.module.css'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
    const {image, title, id, rating, price}= product;
  return (
    <div  className= {`${styles.card_container}`}> 
        <Link to= {`/products/${id}`} className={styles.image_link}> 
            <img src={image} alt="" /> 
        </Link>
        <div className=' '>
            <h3 className=' ' > {title}</h3> 
            <div className= {`${styles.rating}  `}> 
                {/* Rating */}
                <Rating value={rating?.rate} precision={0.1} readOnly/>
                {/* Count*/}
                <small className=' ' > {rating?.count} </small>
            </div>
            <div className=' ' >
                {/* prices */}
                <CurrencyFormat amount={price}/> 
            </div>
            <div>
               <button className= {`${styles.button}`}> add to cart </button> 
            </div>
        </div>
    </div>
  )
}

export default ProductCard