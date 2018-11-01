import React from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find'
import LinkBtn from '../linkBtn'


import styles from './index.css'

const NewsId = ( { newsID, match } ) => {

  const findId = () => {
    const { id } = match.params
    return find( newsID, { publishedAt: id.trim() } )
  }

  const idNews = findId()
  return (
    <div className={styles.news}>
      <LinkBtn to="/news" label="Назад" />
      <header className={styles.news__header}>{idNews.title}</header>
      <img className={styles.news__img} src={idNews.urlToImage} alt={idNews.title} />
      <p>{idNews.content}</p>
    </div>
  )
}

const mapStateToProps = ( state ) => {
  return ( {
    newsID: state.news.items
  } )
}

export default connect( mapStateToProps, null )( NewsId )
