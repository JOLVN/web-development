import React from 'react'
import styles from '../Style/ArticleSideSection.module.css'

export default function ArticleSideSection(props) {
    return (
        <div className={styles.container}>
            
            <div className={styles.articleNumber}>
                {props.number}
            </div>

            <div>
                <span className={styles.topic}>{props.topic} | </span>
                <span className={styles.body}>
                    {props.body}
                </span>
            </div>
            
        </div>
    )
}
