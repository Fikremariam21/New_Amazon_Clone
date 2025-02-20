 
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
        renderAdd={true}
        />) : (
        <p>Product not found</p>)}
    </LayOut>
  )
}

export default ProductDetail;
