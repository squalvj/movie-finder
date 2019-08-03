import React, { PureComponent } from 'react'
import { ActivityIndicator } from 'react-native'
export default class Loader extends PureComponent {
   render() {
      return (
         <ActivityIndicator style={{flex: 1}} size="large" color="#0000ff" /> 
      )
   }
}
