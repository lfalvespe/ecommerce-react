import React from 'react'

import styles from './Contact.module.css'

import { FcGoogle } from "react-icons/fc";
import { FcStart } from "react-icons/fc";
import { TiSocialInstagram } from "react-icons/ti";

const Contact = () => {
  return (
    <div className={styles.contact}>
        <h2>CONTACT</h2>
       <h4>Meet us on social media</h4>
        <ul>
          <li><FcGoogle className={styles.icon}/> ecommerce-react@gmail.com</li>
          <li><TiSocialInstagram className={styles.icon}/> instagram.com/ecommerce-react</li>
          <li><FcStart className={styles.icon}/> youtube.com/ecommerce-react</li>
        </ul>
    </div>
  )
}

export default Contact