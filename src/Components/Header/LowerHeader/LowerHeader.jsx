import React from 'react'
import Styles from './LowerHeader.module.css'
import { IoMenu } from "react-icons/io5";



const LowerHeader = () => {
  return (
    <div className={Styles.lower_header}>
        <ul className={Styles.nav_list}>
            <li>
            <IoMenu />
                <p> All </p>
            </li>
            <li> Today's Deals </li>
            <li> Costumer Service </li>
            <li> Registry </li>
            <li> Gift Cards </li>
            <li> Sell </li>
            
        </ul>
    </div>
  )
}
export default LowerHeader