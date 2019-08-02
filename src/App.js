import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import StartupContainer from './container/StartupContainer'
import MovieDetail from './container/MovieDetail'
import COMMONCSS from './styles'

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
    console.log({Wrapper, COMMONCSS})
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <Wrapper>
        <AppContainer
          screenProps={'locked-closed'}
          ref={c => {
            this.navigator = c;
          }}
        />
      </Wrapper>
    );
  }
}
