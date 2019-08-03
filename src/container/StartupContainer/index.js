import React, { Component } from 'react'
import {Text} from 'react-native';
import COMMONCSS from 'styles'
import {connect} from 'react-redux'
import {searchMovie} from 'modules/Movie'
const {
   Wrapper
 } = COMMONCSS
class StartupContainer extends Component {

   componentWillMount() {
      searchMovie('batman')
   }
   render() {
      const {
         movies
      } = this.props
      
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
   isLoading: state.common,
   movies: state.movies.movies
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(StartupContainer);
 