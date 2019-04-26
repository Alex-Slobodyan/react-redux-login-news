import { connect } from 'react-redux'
import NewsId from './components/newsId/'

const mapStateToProps = (state) => {
  return ({
    newsID: state.news.items
  })
}

export default connect(mapStateToProps, null)(NewsId)
