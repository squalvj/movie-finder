import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import StartupContainer from './container/StartupContainer'
import MovieDetail from './container/MovieDetail'


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
    console.log({animated: Animated})
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <View style={{flex: 1}}>
        <Text></Text>
        <AppContainer
          screenProps={'locked-closed'}
          ref={c => {
            this.navigator = c;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
