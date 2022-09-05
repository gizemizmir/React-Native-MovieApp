/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import MainStackNavigation from './navigation/mainStackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {},
});

export default App;
