import React from 'react'
import styles from '../Style/Header.module.css'
import menuBurger from '../Images/burger.png';

export default function Header() {
    return (
        <div className={styles.headerBackground}>
            
            <div className={styles.mainContainer}>

                <div className={ styles.container }>

                    <h1 className={styles.brand}>HELSINGIN SANOMAT</h1>
                    <nav className={styles.nav}>
                        <a href="#" className={styles.navElement}>Etusivu</a>
                        <a href="#" className={styles.navElement}>Uutiset</a>
                    </nav>

                </div>

                <nav className={ styles.nav }>

                    <a href="#" className={styles.navElement}><span className={styles.navElementSelected}>Tilaa</span></a>
                    <a href="#" className={styles.navElement}>Kirjaudu</a>
                    <a href="#" className={styles.navElement}>Valkikko</a>
                    <img className={styles.menuBurger} src={menuBurger} alt="menu-burger"></img>

                </nav>

            </div>
        </div>
            
    )
}
