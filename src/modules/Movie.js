import {
   list,
   call
} from './../services/index'
import { dispatch } from 'utils'
import {setMovies} from 'reducers/Movie'

export const searchMovie = (searchCriteria, page = 1) => {
   call({
      url: list.search,
      method: 'get',
      params: {
         s: searchCriteria,
         page
      },
      handlerSearchFailed
   }).then(e => dispatch(setMovies(e)))
}

const handlerSearchFailed = response => {
   console.log('Search Movie Failed')
}