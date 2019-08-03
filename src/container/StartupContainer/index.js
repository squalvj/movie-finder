import React, { Component } from 'react'
import { Image, Text, View, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { searchMovie, addTheMovies } from 'modules/Movie'
import { get } from 'lodash'
import styled from 'styled-components/native'
import ListItem from 'components/List'
import Loader from 'components/Loader'
import {
   toggleModal,
   checkImageExist
} from 'utils'
import COMMONCSS from 'styles'
const {
   Wrapper,
   Header,
   Container,
   ButtonCommon
 } = COMMONCSS

const HeaderMovie = styled(Header)`
   text-align: center;
   margin: 30px 0px;
`;

const WrapperForm = styled(Wrapper)`
   margin: 10px 0px;
   flex-direction: row;
   align-items: center;
   max-height: 50px;
`;

const Input = styled(TextInput)`
   border: 1px solid black;
   width: 100%;
   flex: 1;
   height: 100%;
   padding: 7px;
`;

const ButtonS = styled(ButtonCommon)`
   flex: 1;
   max-width: 70px;
   background: transparent;
   border: 1px solid black;
   border-left-width: 0px;
`;
class StartupContainer extends Component {
   constructor(props) {
      super(props)
      this.state = {
         input: '',
         searchQuery: '',
         isInfiniteScrollRun: true
      }
   }

   handleSearch = () => {
      const { isLoading } = this.props
      const { input, searchQuery } = this.state

      // check if is loading and previous query same with now query, then dont do repetitive
      if (isLoading || searchQuery === input) return false;

      this.setState({
         searchQuery: input,
         isInfiniteScrollRun: false
      }, () => searchMovie(input));
   }

   _renderItem = (item, index) => {
      return (
         <ListItem 
            key={index}
            title={item.Title}
            id={item.imdbID}
            image={checkImageExist(item.Poster)}
            content={item.Year}
            handleClick={this.handlePressList}
            handleClickImage={this.handlePressImage}
         />
      )
   }

   handlePressList = id => {
      const { navigation } = this.props
      navigation.navigate('MovieDetail', {
         id,   
      });
   }

   handlePressImage = img => {
      const content = <View style={{flex: 1}}>
         <Image style={{flex: 1}} source={{uri: img}} />
      </View>
      toggleModal(content)
   }

   handlePagination = () => {
      const { movies, isLoading } = this.props
      const { searchQuery } = this.state
      const offsetMovies = 10;
      const totalResult = parseInt(get(movies, 'totalResults', 0));
      const moviesCount = get(movies, 'Search', []).length
      const isPaginationStillExist = moviesCount < totalResult
      const thePage = Math.ceil(moviesCount / offsetMovies) + 1
      if (isPaginationStillExist && !isLoading){
         addTheMovies(searchQuery, thePage)
         this.setState({
            isInfiniteScrollRun: true
         })
      }
   }

   trackScroll = ({nativeEvent}) => {
      if(this.isCloseToBottom(nativeEvent)){
         this.handlePagination()
      }
   }

   isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
      return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
   }

   render() {
      const {
         movies,
         isLoading
      } = this.props
      const {
         input,
         isInfiniteScrollRun
      } = this.state
      const theContent = isLoading && !isInfiniteScrollRun
         ? <Loader />
         : <Wrapper>
            <ScrollView style={{paddingBottom: 50}} onScroll={this.trackScroll} >
               {(movies.Search || []).map((item, index) => {
                  return this._renderItem(item, index)
               })}

               {isLoading && <Loader />}
            </ScrollView>
         </Wrapper>
      
      return (
         <Container>
            <Wrapper>
               <HeaderMovie>MOVIE FINDER !!!</HeaderMovie>
               <WrapperForm>
               <Input
                  onChangeText={text => this.setState({input: text})}
                  value={input}
               />
               <ButtonS onPress={this.handleSearch}>
                  <Text>FIND</Text>
               </ButtonS>
               </WrapperForm>
               {theContent}
            </Wrapper>
         </Container>
      )
   }
}

function mapDispatchToProps() {
   return {
    
   };
 }
 
 const mapStateToProps = state => ({
   isLoading: state.common.isLoading,
   movies: state.movies.movies
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(StartupContainer);
 