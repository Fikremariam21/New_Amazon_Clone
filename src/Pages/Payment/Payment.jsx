import React, { useContext, useState} from "react";
import styles from "./Payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import {
  useStripe,
  useElements,
  CardElement
} from '@stripe/react-stripe-js';
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

const Payment = () => {
  const [{ user, basket }] = useContext(DataContext);

  const totalItems = basket?.reduce((amount, item) => item.amount + amount, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount}, 0);

const [cardError, setCardError] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const handleChange= (e)=>{
    console.log(e)
    e?.error?.message? setCardError(e?.error?.message): setCardError("");

  }
  return (
    <LayOut>
      {/* Header */}
      <div className={styles.payment_header}>
        Checkout ({totalItems}) items{" "}
        {/*to make the item number dynamic, we will import our basket. In our case the basket is found in DataContext. The we will import useContext */}
      </div>
      {/* Payment method */}
      <section className={styles.payment}>
        {/* address */}
        <div className={styles.flex}>
          <h3> Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 Tabor Sub-City</div>
            <div> Hawassa, Ethiopia</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={styles.flex}>
          <h3> Review Items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={styles.flex}>
          <h3> Payment Method</h3>
          <div className={styles.payment__card__container}>
            <div className={styles.payment__details}> 
              <form action="">
                {/* Error */}
                {cardError && <small style={{ color: "red"}}>{cardError} </small>}

                {/* Card Element */}
                <CardElement onChange={handleChange}/>

                {/* Price */}
                <div className={styles.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "5px"}}>
                      <p > Total Order | </p> <CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button> Pay Now </button> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;
