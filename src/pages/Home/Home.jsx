import React from 'react'

import { products } from '../../data/products'

import styles from './home.module.css'

const Home = () => {

  return (
    <div className={styles.home}>

      <h2>on Sale!</h2>

      <div className={styles.prods_container}>
        {
          products.map((p, i) => (
            <div className={styles.prod_card} key={i}>
              <div className={styles.prod_name}>{p.name}</div>
              <img className={styles.prod_img} src={'/prod/'+ p.img} alt="" height={100}/>
              <div className={styles.prod_price}>R$ {p.price}</div>
              <div className={styles.prod_link}><a href={`/product/${p.id}`}>Details</a></div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Home