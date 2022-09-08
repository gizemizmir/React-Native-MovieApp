import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useSelector} from 'react-redux';

import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import SettingsStackNavigation from './settingStackNavigation';

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  const theme = useSelector(state => state.theme.activeTheme);

  return (
    <BottomNav.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: theme.backgroundColor},
        tabBarInactiveTintColor: theme.color,
      }}>
      <BottomNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Ionicons name="home-sharp" size={25} color={theme.color} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
          tabBarIcon: () => (
            <Ionicons name="search-sharp" size={25} color={theme.color} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Setting"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
          tabBarIcon: () => (
            <Ionicons name="settings-sharp" size={25} color={theme.color} />
          ),
        }}
        component={SettingsStackNavigation}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
