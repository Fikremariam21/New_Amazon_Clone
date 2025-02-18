// import React, { useEffect, useState } from 'react'
// import LayOut from '../../Components/LayOut/LayOut'
// import styles from './ProductDetail.module.css'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { productUrl } from '../../Components/API/EndPoints'
// import ProductCard from '../../Components/Products/ProductCard'

// const ProductDetail = () => {
//     const {productId} = useParams();
//     const [product, setProduct] = useState({});
//     useEffect(() =>{
//         axios.get(`${productUrl}/products/${productId}`)
//         .then((res) => {
//             setProduct(res.data)
//             console.log(res.data)

//         }).catch((err) =>{
//             console.log(err)
//         })

//     }, [productId])
//   return (
//     <LayOut>
//     <div>
//         <ProductCard product={product}
//         />
//     </div>
//     </LayOut>
//   )
// }

// export default ProductDetail

// import React, { useEffect, useState } from 'react';
// import LayOut from '../../Components/LayOut/LayOut';
// import styles from './ProductDetail.module.css';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { productUrl } from '../../Components/API/EndPoints';
// import ProductCard from '../../Components/Products/ProductCard';
// import Loader from '../../Components/Loader/Loader'

// const ProductDetail = () => {
//     const { productId } = useParams();
//     const [product, setProduct] = useState({productId});
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setIsLoading(true)
//         if (!productId) return; //  Prevent API call with undefined ID

//         axios.get(`${productUrl}/products/${productId}`)
//         .then((res) => {
//             setProduct(res.data);
//             console.log(res.data);
//             setIsLoading(false)
//         }).catch((err) => {
//             console.log(err);
//             setIsLoading(false)
//         });

//     }, [productId]); //  Added productId as a dependency

//     return (
//         <LayOut>

//                 {/* {isLoading? (<Loader/>):(<ProductCard product={product}/>)} */}

//                  {product && product.id ? (  //  Prevents errors if product isn't loaded
//                     <ProductCard product={product} />
//                 ) : (
//                     <p>Loading product...</p>
//                 )}

//         </LayOut>
//     );
// };

// export default ProductDetail;

// import React, { useEffect, useState } from 'react';
// import LayOut from '../../Components/LayOut/LayOut';
// import styles from './ProductDetail.module.css';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { productUrl } from '../../Components/API/EndPoints';
// import ProductCard from '../../Components/Products/ProductCard';
// import Loader from '../../Components/Loader/Loader';

// const ProductDetail = () => {
//     const {productId} = useParams();
//     const [product, setProduct] = useState({});
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null); // Store error message

//     useEffect(() => {
//         if (!productId || product.id) return; // If product is already available, don't fetch again

//         setIsLoading(true);
//         setError(null); // Reset error before fetching

//         axios.get(`${productUrl}/products/${productId}`)
//             .then((res) => {
//                 setProduct(res.data);
//             })
//             .catch((err) => {
//                 console.error("Error fetching product:", err);
//                 setError("Failed to load product.");
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             });

//     }, [productId, product.id]); // Only fetch if productId changes and product is not already loaded

//     return (
//         <LayOut>
//             {isLoading ? (
//                 <Loader />
//             ) : error ? (
//                 <p style={{ color: "red" }}>{error}</p>
//             ) : product && product.id ? (
//                 <ProductCard product={product} />
//             ) : (
//                 <p>Product not found</p>
//             )}
//         </LayOut>
//     );
// };

// export default ProductDetail;

import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Components/API/EndPoints";
import ProductCard from "../../Components/Products/ProductCard";
import Loader from "../../Components/Loader/Loader";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // if (!productId || product.id) return; // Prevent fetching if product exists
    setIsLoading(true);

    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId, product.id]); // Avoid refetching if product is already loaded

  return (
    <LayOut>
      {
      isLoading ? (
        <Loader />
      ) : product && product.id ? (
        <ProductCard product={product} 
        flex={true}
        renderDesc = {true}
        />) : (
        <p>Product not found</p>)}
    </LayOut>
  )
}

export default ProductDetail;
