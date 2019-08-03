import React, { Component, Fragment } from 'react'
import { Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { searchMovieById } from 'modules/Movie'
import styled from 'styled-components/native'
import COMMONCSS from 'styles'
import { get } from 'lodash'
const {
   Wrapper,
   Header,
   Container,
   ButtonCommon
 } = COMMONCSS

const WrapperNavbar = styled(Wrapper)`
   max-height: 50px;
   background-color: #3498db;
`;

const ContainerMovieDetail = styled(Wrapper)`

`;

const WrapperContent = styled(Wrapper)`
   padding: 20px;
`;

const ButtonBack = styled(ButtonCommon)`
   color: black;
   max-width: 50px;
`;

const Back = styled(Text)`
   color: white;
`;

const WrapperPoster = styled(View)`
   width: 100%;
   max-height: 500px;
   flex: 1;
`;

const Title = styled(Text)`
   font-size: 38px;
   margin-top: 30px;
`;

class MovieDetail extends Component {

   constructor(props) {
      super(props)
      this.state = {
         movie: {}
      }
   }

   componentWillMount() {
      const {navigation} = this.props
      const id = navigation.getParam('id', '')
      searchMovieById(id).then(e => this.setState({movie: e}))
   }

   render() {
      const {
         movie
      } = this.state
      const { navigation, isLoading } = this.props
      
      const poster = get(movie, 'Poster', null)
      const title = get(movie, 'Title', '')

      const theContent = isLoading 
         ? <ActivityIndicator style={{flex: 1}} size="large" color="#0000ff" /> 
         : <WrapperContent>
            <WrapperPoster>
               <Image resizeMode={'contain'} style={{flex: 1}} source={{uri: poster}}/>
               <Title>{title}</Title>
            </WrapperPoster>
         </WrapperContent>
      return (
         <ContainerMovieDetail>
            <WrapperNavbar>
               <ButtonBack onPress={() => navigation.goBack()}>
                  <Back>BACK</Back>
               </ButtonBack>
            </WrapperNavbar>
            <ScrollView contentContainerStyle={{flex: 1}}>
               {theContent}
            </ScrollView>
         </ContainerMovieDetail>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return {
     
   };
 }
 
 const mapStateToProps = state => ({
   isLoading: state.common.isLoading,
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(MovieDetail);
 