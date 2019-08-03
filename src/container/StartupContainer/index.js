import React, { Component } from 'react'
import {SafeAreaView, Text, View, TextInput, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import COMMONCSS from 'styles'
import {connect} from 'react-redux'
import {searchMovie} from 'modules/Movie'
import styled from 'styled-components/native'
import ListItem from 'components/List'
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
   max-height: 50px;
`;
class StartupContainer extends Component {

   constructor(props) {
      super(props)
      this.state = {
         searchQuery: ''
      }
   }

   handleSearch = () => {
      const {
         searchQuery
      } = this.state
      searchMovie(searchQuery);
   }

   _renderItem = (item, index) => {
      return (
         <ListItem 
            title={item.Title}
            id={item.imdbID}
            image={item.Poster}
            content={item.Year}
            handleClick={this.handlePressList}
         />
      )
   }

   handlePressList = id => {
      console.log({id})
   }

   render() {
      const {
         movies,
         isLoading
      } = this.props
      const {
         searchQuery
      } = this.state
      const theContent = isLoading 
         ? <ActivityIndicator style={{flex: 1}} size="large" color="#0000ff" /> 
         : <FlatList 
               data={movies.Search || []}
               keyExtractor={(item) => item.imdbID}
               renderItem={({item, index}) => this._renderItem(item, index)}
               style={{flex: 1}}
               extraData={movies.Search}
            />
      
      return (
         <SafeAreaView style={{flex: 1}}>
            <Container>
               <Wrapper>
                  <HeaderMovie>MOVIE FINDER !!!</HeaderMovie>
                  <WrapperForm>
                  <Input
                     onChangeText={text => this.setState({searchQuery: text})}
                     value={searchQuery}
                  />
                  <ButtonS 
                     onPress={this.handleSearch}
                     title="FIND"
                  />
                  </WrapperForm>
                  {theContent}
               </Wrapper>
            </Container>
         </SafeAreaView>
      )
   }
}

function mapDispatchToProps(dispatch) {
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
 