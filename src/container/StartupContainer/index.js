import React, { Component } from 'react'
import {Text} from 'react-native';
import COMMONCSS from 'styles'
import {connect} from 'react-redux'
const {
   Wrapper
 } = COMMONCSS
class StartupContainer extends Component {
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

function mapDispatchToProps(dispatch) {
   return {
    
   };
 }
 
 const mapStateToProps = state => ({
   isLoading: state.common
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(StartupContainer);
 