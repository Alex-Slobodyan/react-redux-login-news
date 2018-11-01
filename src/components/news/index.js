import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import take from 'lodash/take'

import styles from './index.css'

const News = ( { data } ) => {
  return (
    <div className={styles.news}>

      {data.items.length ? data.items.map( ( item, index ) => {
        return (
          <article key={index} className={styles.news__item}>
            <Link to={`/news-description/${ item.publishedAt } `} className={styles.news__link}>
              <header className={styles.news__header}>{take( item.title, 50 )}...</header>
              <div className={styles.news__img} style={{ backgroundImage: `url(${ item.urlToImage })` }}></div>
            </Link>
          </article>
        )
      } ) : null}
    </div>
  )
}

News.proptypes = {
  data: PropTypes.array.isRequired,
}

export default News
