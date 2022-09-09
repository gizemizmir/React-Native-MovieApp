import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import MovieDetailsScreen from '../screens/movieDetails';
import SignInScreen from '../screens/signIn';
import SignUpScreen from '../screens/signUp';
import BottomNavigation from './bottomNavigation';

const MainStackNav = createStackNavigator();
const MainStackNavigation = () => {
  const theme = useSelector(state => state.theme.activeTheme);
  const authUser = useSelector(state => state.auth.authUser);

  return (
    <MainStackNav.Navigator
      initialRouteName={'BottomNav'}
      screenOptions={{
        headerShown: false,
      }}>
      {authUser && Object.keys(authUser).length !== 0 ? (
        // Check there is a registered user in State
        <>
          <MainStackNav.Screen name="BottomNav" component={BottomNavigation} />
          <MainStackNav.Screen
            name="MovieDetails"
            component={MovieDetailsScreen}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: theme.backgroundColor,
              },
              headerTitleStyle: {
                color: theme.color,
              },
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
