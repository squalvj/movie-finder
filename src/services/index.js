import axios from 'axios';
import apiList from './list'
import config from 'react-native-config'
import {dispatch} from './../utils'
import {
   showLoader,
   hideLoader
} from './../reducers/Common'
const {
   API_URL,
   API_KEY
} = config
const TIMEOUT = 20000 //20 sec
export const list = apiList

export const call = (obj, errHandling = false) => {
   const {
      url, 
      method,
      header,
      data,
      params
   } = obj
   const CancelToken = axios.CancelToken;
   let cancel;
   
   const theParams = {
      ...params,
      apikey: API_KEY,
   }
   const theHeader = {
      'Content-Type': 'application/json',
      ...header
   };
   
   const config = {
      baseURL: `${API_URL}${url}`,
      timeout: TIMEOUT,
      headers: theHeader,
      method: method,
      params: theParams,
      data,
      responseType: 'json',
      cancelToken: new CancelToken(function (c) {
         cancel = c
      })
   }
   let instance = axios.create()

   // useful for custom error handling
   const theErroHandling = !!errHandling ? response => wrapperCustomHandler(response, errHandling) : resIntersceptor

   // Add a request interceptor
   instance.interceptors.request.use(config => reqInterceptor(config, cancel), interceptReqErr);

   // Add a response interceptor
   instance.interceptors.response.use(theErroHandling, interceptResErr);
   
   return instance.request(config).then(theHandler);
}

const wrapperCustomHandler = (response, callback) => {
   if (__DEV__)
      console.log(`${response.config.url} `, response.data);

   dispatch(hideLoader()); 
   return callback(response);
}

const theHandler = (res, err) => {
   // CHECKING LOGIC FROM DOWNSTREAM IF YOU 
   // HAVE SOME ERROR CODE STRUCTURE
   return res
}

// ---------------------- REQUEST INTERCEPTOR ----------------------
const reqInterceptor = (config, cancel) => {
   // do checking if necessary, to cancel the request being fired
   if (__DEV__)
      console.log(`${config.baseURL} `, {config})
   // cancel() for canceling the request
   dispatch(showLoader())
   return config
}

const interceptReqErr = error => {
   alert(error)
   return Promise.reject(error);
}
// ---------------------- / ----------------------------------------


// ---------------------- RESPONSE INTERCEPTOR ----------------------
const resIntersceptor = response => {
   // TRANSFORM DATA FROM DOWNSTREAM INTO WHATEVER YOU WANT
   if (__DEV__)
      console.log(`${response.config.url} `, response.data)

   dispatch(hideLoader());
   return response.data
}

// GENERIC ERROR RESPPONSE HANDLING, E.G NO INTERNET
const interceptResErr = error => {
   dispatch(hideLoader())
   alert(error)
   return Promise.reject(error);
}
// ---------------------- / ----------------------------------------