import React from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import styles from './Product.module.css'

import {products} from '../../data/products'

import { FaCartArrowDown } from "react-icons/fa";


const Product = () => {

const {id} = useParams()

const product = products[id-1]

const navigate = useNavigate()

console.log(product)
  return (
    <div className={styles.product}>
        <h2>Product</h2>

        <div className={styles.prodContainer}>
            <p className={styles.line}>ID do produto: <span className={styles.prodId}>{id}</span></p>
            <p className={styles.line}>Nome do produto: <span className={styles.prodName}>{product.name}</span></p>
            <p className={styles.line}>Preço: <span className={styles.prodPrice}>{product.price}</span></p>
            <p className={styles.line}>Descrição:</p>
            <p className={styles.prodDescription}>{product.description}</p>
            <p><img className={styles.prod_img} src={'/prod/' + product.img} alt="" height={200}/></p>
          
            
            <a href="">
                <FaCartArrowDown className={styles.cart}/> <br />
                add to cart
            </a>
            
           
        </div>

        <div className={styles.backBtn}>
           <button onClick={() => navigate('/')}>Voltar</button>
        </div>

    </div>
  )
}

export default Product