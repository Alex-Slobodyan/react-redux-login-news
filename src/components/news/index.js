import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './index.css'

const News = ( { data } ) => {
  return (
    <div className={styles.news}>

      {data.items.length ? data.items.map( ( item, index ) => {
        return (
          <article key={index}>
            <Link to={`/news-description/${ item.publishedAt } `}>
              <header >{item.title}</header>
              <img className={styles.news__img} src={item.urlToImage} alt={item.title} />
              <p>{item.description} </p>
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
