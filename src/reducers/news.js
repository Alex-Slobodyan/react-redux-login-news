import {
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FINALLY
} from '../actions/NewsAction'

const initialState = {
  loader: true,
  items: ''
}

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        items: action.payload
      }

    case FETCH_NEWS_FINALLY:
      return {
        ...state,
        loader: false
      }

    default:
      return state
  }
}
