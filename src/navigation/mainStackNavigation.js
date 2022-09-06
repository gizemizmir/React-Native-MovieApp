import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../screens/signIn';
import SignUpScreen from '../screens/signUp';
import MovieDetailsScreen from '../screens/movieDetails';
import BottomNavigation from './bottomNavigation';

const MainStackNav = createStackNavigator();
const MainStackNavigation = () => {
  const user = {};

  return (
    <MainStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <>
          <MainStackNav.Screen name="BottomNav" component={BottomNavigation} />
          <MainStackNav.Screen
            name="MovieDetails"
            component={MovieDetailsScreen}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
            }}
          />
        </>
      ) : (
        <>
          <MainStackNav.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <MainStackNav.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerShown: true,
              headerTitle: '',
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#FFF',
                shadowOpacity: 0,
              },
            }}
          />
        </>
      )}
    </MainStackNav.Navigator>
  );
};

export default MainStackNavigation;
