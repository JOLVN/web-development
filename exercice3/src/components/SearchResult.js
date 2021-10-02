import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
        
          { props.isBestSeller ? <div className={styles.bestSellerTag}>BestSeller</div> : '' }
        
          <div><img className={styles.image} src={`/images/${props.image}`} alt={props.image} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={styles.author}>by {props.author}</div>
        
          <div className={styles.rating}>
            <div className={styles.stars}>
            
              { props.rating >= 1 ? <img src="/images/star.png" alt="star"></img> : '' }
              { props.rating >= 2 ? <img src="/images/star.png" alt="star"></img> : ''}
              { props.rating >= 3 ? <img src="/images/star.png" alt="star"></img> : ''}
              { props.rating >= 4 ? <img src="/images/star.png" alt="star"></img> : ''}
              { props.rating >= 5 ? <img src="/images/star.png" alt="star"></img> : ''}

            </div>
            <div className={styles.numberOfRates}>
              {props.numberOfRates}
            </div>
          </div>

          {props.isAvailable
            ? <div className={styles.price}>${props.price} <span className={styles.shippingPrice}>+ ${props.shippingPrice} shipping</span></div>
            : 'Currently unavalaible'
          }
        </div>
    </div>
  )
}
