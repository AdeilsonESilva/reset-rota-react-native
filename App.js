import React, {Fragment} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Ade 1</Text>
      </SafeAreaView>
    </Fragment>
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  }
});

export default createAppContainer(AppNavigator);
