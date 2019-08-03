import React, { Component } from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native';
import COMMONCSS from 'styles'

const {
   Wrapper,
 } = COMMONCSS

const List = styled(Wrapper)`
   padding: 15px 0;
   flex-direction: row;
   width: 100%;
`;

const Title = styled(Text)`
   font-size: 18px;
`;

const Content = styled(Text)`
   font-size: 12px;
`;

const ImageList = styled(Image)`
   width: 50px;
   height: 50px;
   margin-right: 15px;
`;

export default class ListItem extends Component {
   render() {
      const {
         title,
         image,
         id,
         content,
         handleClick,
         handleClickImage
      } = this.props
      return (
         <List>
            <View>
               <ImageList onPress={() => handleClickImage(image)} source={{uri: image}} />
            </View>
            <TouchableOpacity style={{flex: 1}} key={id} onPress={() => handleClick(id)}>
               <Title numberOfLines={2}>{title}</Title>
               <Content>{content}</Content>
            </TouchableOpacity>
         </List>
      )
   }
}