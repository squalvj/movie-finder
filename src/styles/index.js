import styled from 'styled-components/native';
import {Button} from 'react-native'
// import {Dimensions} from 'react-native'
// const { width } = Dimensions.get('window');
import {
  View,
  Text
} from 'react-native'

const Wrapper = styled(View)`
  flex: 1;
`;

const Header = styled(Text)`
  font-size: 32px;
`

const Container = styled(Wrapper)`
  padding-left: 20px;
  padding-right: 20px;
`

const ButtonCommon = styled(Button)`
  background: #3498db;
`

export default {
   Wrapper,
   Header,
   Container,
   ButtonCommon
}