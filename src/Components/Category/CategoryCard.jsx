
import React from 'react';
import styles from './Category.module.css'


const CategoryCard = ({data}) => {
  return (
    <div className={`${styles.category_card} `}> 

      <a href="/" className= " ">
        <span>
          <h2 className={`${styles.title}`}>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} className=''/>
        <p className=" ">Shop now</p>
      </a>
    </div>
  );
};

export default CategoryCard;