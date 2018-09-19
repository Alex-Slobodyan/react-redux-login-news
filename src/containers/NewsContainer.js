import React from 'react'
import { connect } from 'react-redux'
import News from '../components/news/'
import Spinner from '../components/spinner'

import { getDatanews } from '../actions/NewsAction'

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.getDatanews()
  }
  render() {
    const { news } = this.props
    return (
      <React.Fragment>
        <News data={news} />
        <Spinner isFetching={news.loader} />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  getDatanews
}

const mapStateToProps = ( state ) => {
  return ( {
    news: state.news
  } )
}

export default connect( mapStateToProps, mapDispatchToProps )( NewsContainer )
