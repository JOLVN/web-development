import React from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
    return (
      <div className={styles.container}>
        <div className={styles.searchBar}>
          Search a product <input type="text" onChange={ props.onSearchFieldChange } value={ props.productSearchString }/>
        </div>
        <div className={styles.searchBarContainer}>
        </div>
      </div>
    )
}
