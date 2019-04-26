import {
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_FINALLY
} from '../actionsTypes'

import { api } from '../../helpers/api'

export const getDatanews = () => async dispatch => {
  dispatch( { type: FETCH_NEWS_START } )

  try {
    const news = await api.fetchNews().then( response => response.articles )
    dispatch( {
      type: FETCH_NEWS_SUCCESS,
      payload: news
    } )
  } catch ( err ) {
    dispatch( {
      type: FETCH_NEWS_FAILURE,
      payload: err,
      error: true
    } )
  } finally {
    dispatch( {
      type: FETCH_NEWS_FINALLY
    } )
  }
}
