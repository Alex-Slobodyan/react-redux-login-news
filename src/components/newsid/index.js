import React, { Component } from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find'

import styles from './index.css'

class NewsId extends Component {

  findId = () => {
    const { newsID } = this.props
    const { id } = this.props.match.params
    return find( newsID, { publishedAt: id.trim() } )
  }

  render() {
    const news = this.findId()
    return (
      <div className={styles.news}>
        <header>{news.title}</header>
        <img className={styles.news__img} src={news.urlToImage} alt={news.title} />
        <p>{news.content}</p>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return ( {
    newsID: state.news.items
  } )
}

export default connect( mapStateToProps, null )( NewsId )
