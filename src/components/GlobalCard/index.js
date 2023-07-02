import styles from './GlobalCard.module.css'

function GlobalCard({status, total, style}){

    return(
        <div className={styles.card}>
            <div className={styles.card__detail}>
                <h2 className={styles.card__title}>{status}</h2>
                <h1 className={styles[style]}>{total}</h1>
                <a href="#" className={styles.card__detail}>Lihat detail</a>
            </div>
        </div>
    )
}

export default GlobalCard;