import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import SettingsStackNavigation from './settingStackNavigation';

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Ionicons name="home-sharp" size={25} />,
        }}
      />
      <BottomNav.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <Ionicons name="search-sharp" size={25} />,
        }}
      />
      <BottomNav.Screen
        name="Setting"
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="settings-sharp" size={25} />,
        }}
        component={SettingsStackNavigation}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
