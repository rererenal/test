import React from 'react'
import styles from './Summary.module.css'

function Summary({URL}) {

  return (
    <div className={styles.container}>
        <div className={styles.summary}>
            <div className={styles.summary__title}>
                <h1>Summary</h1>
                <p>Summary Data Global</p>
            </div>
            <div className={styles.summary__image}>
                <img src={URL} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Summary