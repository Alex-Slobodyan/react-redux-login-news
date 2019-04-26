import React from 'react'
import find from 'lodash/find'
import LinkBtn from '../../../../components/linkBtn'

import styles from './index.css'

const NewsId = ( { newsID, match } ) => {
  console.log('this.props.history', match.params)

  const findId = () => {
    const { id } = match.params
    return find( newsID, { publishedAt: id.trim() } )
  }

  const idNews = findId()
  return (
    <div className={styles.news}>
      <LinkBtn to="/news" label="Назад" translateId="btn.back" />
      <header className={styles.news__header}>{idNews.title}</header>
      <img className={styles.news__img} src={idNews.urlToImage} alt={idNews.title} />
      <p>{idNews.content}</p>
    </div>
  )
}

export default NewsId
