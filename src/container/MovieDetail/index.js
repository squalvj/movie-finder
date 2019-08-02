import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
class MovieDetail extends Component {
   render() {
      return (
         <View>
            <Text>MOVIE</Text>
         </View>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return {
     
   };
 }
 
 const mapStateToProps = state => ({
   movies: state.movies
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(MovieDetail);
 