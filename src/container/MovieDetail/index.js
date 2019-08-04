import React, { Component, Fragment } from 'react'
import { Text, View, Image, ScrollView } from 'react-native';
import Loader from 'components/Loader'
import { connect } from 'react-redux';
import { searchMovieById } from 'modules/Movie'
import styled from 'styled-components/native'
import COMMONCSS from 'styles'
import { get } from 'lodash'
import { checkImageExist } from 'utils'
const {
   Wrapper,
   ButtonCommon
 } = COMMONCSS

const WrapperNavbar = styled(Wrapper)`
   max-height: 50px;
   background-color: #3498db;
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
   height: 350px;
`;

const Title = styled(Text)`
   font-size: 38px;
   margin-top: 30px;
   margin-bottom: 10px;
`;

const Bold = styled(Text)`
   font-size: 17px;
   font-weight: bold;
`;

const Normal = styled(Text)`
   font-size: 14px;
`;

const Row = styled(View)`
   flex-direction: row;
   align-items: baseline;
   flex-wrap: wrap;
   margin-bottom: 5px;
`;

class MovieDetail extends Component {

   constructor(props) {
      super(props)
      this.state = {
         movie: {}
      }
   }

   componentWillMount() {
      const { navigation } = this.props
      const id = navigation.getParam('id', '')
      searchMovieById(id)
         .then(e => this.setState({movie: e}))
         .catch(() => {
            navigation.goBack()
         })
   }

   render() {
      const {
         movie
      } = this.state
      const { navigation, isLoading } = this.props
      
      const poster = get(movie, 'Poster', null)
      const title = get(movie, 'Title', '')
      const director = get(movie, 'Director', '')
      const actors = get(movie, 'Actors', '')
      const genre = get(movie, 'Genre', '')
      const plot = get(movie, 'Plot', '')
      const ratings = get(movie, 'Ratings', []).map((e,i) => (
         <Fragment key={i}>
            <Row>
               <Normal>Source: </Normal>
               <Normal>{e.Source}</Normal>
            </Row>
            <Row>
               <Normal>Rating: </Normal>
               <Normal>{e.Value}</Normal>
            </Row>
         </Fragment>
      ))

      const movieDetailRenderer = () => (
         <ScrollView style={{flex: 1}}>
            <WrapperContent>
               <WrapperPoster>
                  <Image resizeMode={'contain'} style={{flex: 1}} source={{uri: checkImageExist(poster)}}/>
               </WrapperPoster>
                  <Title>{title}</Title>
               <Row>
                  <Bold>Director: </Bold>
                  <Normal>{director}</Normal>
               </Row>
               <Row>
                  <Bold>Actors: </Bold>
                  <Normal>{actors}</Normal>
               </Row>
               <Row>
                  <Bold>Genre: </Bold>
                  <Normal>{genre}</Normal>
               </Row>
               <Row>
                  <Bold>Ratings: </Bold>
               </Row>
               {ratings}
               <Row>
                  <Bold>Plot: </Bold>
                  <Normal>{plot}</Normal>
               </Row>
            </WrapperContent>
         </ScrollView>
      )

      const theContent = isLoading 
         ? <Loader />
         : movieDetailRenderer()

      return (
         <Wrapper>
            <WrapperNavbar>
               <ButtonBack onPress={() => navigation.goBack()}>
                  <Back>BACK</Back>
               </ButtonBack>
            </WrapperNavbar>
            {theContent}
         </Wrapper>
      )
   }
}

function mapDispatchToProps() {
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
 