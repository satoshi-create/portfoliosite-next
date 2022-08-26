import React from 'react'
import styles from "../styles/Button.module.css"

const Button = ({ value }) => {
  const {style,title}= value
  return <button className={`btn ${styles.cmnbtn} ${style}`}>{title}</button>;
}

export default Button