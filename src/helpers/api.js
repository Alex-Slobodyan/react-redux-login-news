const ROOT_URL = 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=734952a0678e46479e04b1b10fa3074d'
import "babel-polyfill"

export const api = {
  async fetchNews() {
    const response = await fetch( `${ ROOT_URL }`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    } )

    if ( response.status !== 200 ) {
      throw new Error( 'Sorry error API' )
    }

    return await response.json();
  }
}

