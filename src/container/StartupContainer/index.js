import React, { Component } from 'react'
import {Text} from 'react-native';
import COMMONCSS from 'styles'
const {
   Wrapper
 } = COMMONCSS
export default class StartupContainer extends Component {
   componentDidMount() {
      
   }
   render() {
      return (
         <Wrapper>
            <Text>STARTUPCONTAINER</Text>
         </Wrapper>
      )
   }
}
