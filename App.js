/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './component/Login';
import Chat from './component/Chat';
import Contact from './component/Contact';
import LeanRedux from './component/LeanRedux';
import store from './redux/store';
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login page'}}
          />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="LeanRedux" component={LeanRedux} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
