import React from 'react'
import styles from '../Style/MainSection.module.css'

export default function MainSection() {
    return (
        <div className={styles.container}>

            <h2 className={styles.mainTitle}>Koronavirus</h2>
            <img className={styles.image} src="https://hs.mediadelivery.fi/img/978/7c68e136e3f4079929bde563bc6504f5.jpg.webp" alt="image-article"></img>

            <div className={styles.title}>
                <span className={styles.topic}>Koronavirus | </span>
                <span className={styles.body}>HS:n korona­katsaus: Sairaala­hoidossa olevien määrä pysytellyt tasaisena, ilmaantuvuus laskussa</span>
            </div>

            <div className={styles.informations}>
                Kaupunki 13:32
            </div>

        </div>
    )
}
