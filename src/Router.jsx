import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Results from './Pages/Results/Results';
import Auth from './Pages/Auth/Auth';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QwkXDAwsVVf7WtstCLULoxsyCWHFPiotYWv4mLAaj4WUHNxJLDVq9mpxJ4Ve3lsygIAliYPSnCDIzHehN0FHVk000c8WRuJxC');
const Routing = () => {
  return (
     <Router> 
      <Routes>
        <Route path='/' element={ <Landing/>}/>
        <Route path='/auth' element={ <Auth/>}/>
        <Route path='/payment' element= {
          <Elements stripe={stripePromise}>
             <Payment/>
          </Elements>
          }/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/cart' element={<Cart/>}/>  
        <Route path='/category/:categoryName' element={<Results/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>
        <Route path='signup' element={<Auth/>}/>  
      </Routes>
     </Router>
  )
}
export default Routing