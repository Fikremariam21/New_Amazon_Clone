import React, { useContext } from "react";
import styles from "./Cart.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from '../../Components/Products/ProductCard'
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

const Cart = () => {
  const [{basket, user}, dispatch] = useContext(DataContext);
  const total = basket?.reduce((amount, item) => amount + item.price, 0);
  console.log(basket);
  return (
    <LayOut>
      <section className={styles.cart_container}>
        <div className={styles.cart_items}>
          <h2> Hello </h2>
          <h3> Your shopping basket </h3>
          <hr/>
          {
            basket?.length === 0 ? <h3> Your basket is empty </h3> :
            basket?.map((item, id) => {
              return<ProductCard
              product={item}
              renderDesc={true}
              renderAdd={false}
              flex={true}
              key={id}
              />
            })
          }

        </div>
        
          {basket?.length !==0&&
          <div className={styles.cart_total}>
            <div> 
            <p> Subtotal ({basket?.length} items)</p>
            <CurrencyFormat amount = {total}/>
            </div>
            <span> 
              <input type="checkbox" />
              <small> This order contains a gift </small>
            </span>
            <Link to="/Payment"> Continue to checkout </Link>
           </div>

          }
        
      </section>
    </LayOut>
  );
};

export default Cart;
