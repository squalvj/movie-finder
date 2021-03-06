import React, {Component} from 'react';
import {Animated, SafeAreaView} from 'react-native';
import ModalWrapper from 'components/Modal'
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import StartupContainer from './container/StartupContainer'
import MovieDetail from './container/MovieDetail'
import COMMONCSS from 'styles'

const {
  Wrapper
} = COMMONCSS

const MainPages = createStackNavigator(
  {
    StartupPage: { screen: StartupContainer },
    MovieDetail: { screen: MovieDetail },
  },
  {
    initialRouteName: 'StartupPage',
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false,
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
      },
    }),
    animationEnabled: false,
    swipeEnabled: false,
    lazy: true,
  }
);

// THIS IS USEFUL FOR FUTURE USE IF WANT TO IMPLEMENT SIDEBAR
const AppNavigator = createDrawerNavigator(
  {
    Main: { screen: MainPages },
  },
  {
    initialRouteName: 'Main',
  }
);

export default class App extends Component{
  navigator

  render() {
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <SafeAreaView style={{flex: 1}}>
        <Wrapper>
          <AppContainer
            screenProps={'locked-closed'}
            ref={c => {
              this.navigator = c;
            }}
          />
          <ModalWrapper />
        </Wrapper>
      </SafeAreaView>
    );
  }
}
