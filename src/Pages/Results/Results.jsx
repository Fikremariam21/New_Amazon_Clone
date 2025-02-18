import React, { useEffect, useState } from 'react'
import styles from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Components/API/EndPoints'
import ProductCard from '../../Components/Products/ProductCard'

const Results = () => {
    const [results, setResults] = useState([]);
    const {categoryName} = useParams()
   
    useEffect(() => {
        axios.get(`${productUrl}/products/category/${categoryName}`)
        .then((res) => {
            setResults(res.data)
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    

  return (
    <LayOut> 

    <div>
        <h1 style={{padding: "30px"}}> Results</h1>
        <p style={{padding: "30px"}}> Category/{categoryName}</p>
        <hr/>
        <div className={styles.products_container}>
            {results?.map((product) =>(
                <ProductCard key={product.id}
                product={product}
                />
            ))}

        </div>
    </div>

    </LayOut>
  )
}

export default Results