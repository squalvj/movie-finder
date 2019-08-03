import {
   list,
   call
} from './../services/index'
import {Alert} from 'react-native'
import { dispatch } from 'utils'
import {setMovies} from 'reducers/Movie'

export const searchMovie = (searchCriteria, page = 1) => {
   call(
      {
         url: list.search,
         method: 'get',
         params: {
            s: searchCriteria,
            page
         }
      },
      handlerSearchFailed
   ).then(e => dispatch(setMovies(e)))
}

export const searchMovieById = (id) => {
   return call(
      {
         url: list.search,
         method: 'get',
         params: {
            i: id,
         }
      },
   ).then(e => e).catch(() => Alert.alert(
      'Error',
      response.data.Error,
      {cancelable: false},
   ))
}

const handlerSearchFailed = response => {
   const isError = response && response.data && response.data.Error
   if (isError) {
      response.data.Search = []
      response.data.totalResults = 0
      Alert.alert(
         'Error',
         response.data.Error,
         {cancelable: false},
       );
   }
   return response.data
}