import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native'
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

const ButtonCommon = styled(TouchableOpacity)`
  background: #3498db;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 100%;
  flex: 1;
`

export default {
   Wrapper,
   Header,
   Container,
   ButtonCommon
}