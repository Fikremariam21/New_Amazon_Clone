import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";
import {auth} from "../../Utility/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {DataContext} from '../../Components/DataProvider/DataProvider.jsx';


function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const[{user},  dispatch] = useContext(DataContext);

  console.log(user)
  const authHandler = async(e) =>{
    e.preventDefault();
    // console.log(e.target.name);
    if(e.target.name === "Signin"){

      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        dispatch({
          type: 'SET_USER',
          user: userCredential.user, 

        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });

    } else{
  }
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      dispatch({
        type: Type.SET_USER,
        user: userCredential.user, 

      });
    });
       
     
  }

  return (
    <section className={styles.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className={styles.logo}
        />
      </Link>
      <div className={styles.login_container}>
        <h1> Sign in</h1>

        <form action="">
          <div> 
          <label htmlFor="email"> Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" required />
          </div>

          <div> 
          <label htmlFor="password"> Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" required />

          </div>
          <button type="submit" name="Signin" onClick={authHandler} className={styles.btn_signIn}> Sign In</button>
        </form>
        {/* Agreement */}
        <p className={styles.terms_links}> 
        By continuing, you agree to Amazon's
           <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088" style={{ textDecoration: 'underline' , color: '#007185'}}>  Conditions of Use </a>
           and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496" style={{ textDecoration: 'underline', color: '#007185'}}> Privacy Notice</a>
        </p>
        <a> 
        <p className={styles.help}> Need help?</p>
        </a>
        <hr className={styles.help_hr}/> 
        <p className={styles.buying_for_work}> Buying for Work?
          <br/>
          <a> Shop on Amazon Business</a>

        </p>

      </div>

      {/* Create account btn */}
      <div className={styles.newToAmazon_container}> 
        <span className={styles.newToAmazon}> New to Amazon? </span>
      </div>
      <button type="submit" name="SignUp" onClick={authHandler} className={styles.btn_createAccount}> Create your Amazon Account</button>

      <hr className={styles.create_account_hr}/>

      <div className={styles.footer_links_container}>
        <div> <a> condition of Use</a></div>
        <div> <a> Privacy Notice</a></div>
        <div> <a> Help</a></div>
      </div>
      <p className={styles.copy_right}>&copy; 1996-2025, Amazon.com, Inc. or its affiliates</p>

    </section>
  );
}

export default Auth;
