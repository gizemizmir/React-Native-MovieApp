import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import ProfileSettingsScreen from '../screens/profileSettings';
import SettingsScreen from '../screens/settings';
import ThemeSettingsScreen from '../screens/themeSettings';

const SettingsStackNav = createStackNavigator();
const SettingsStackNavigation = () => {
  const theme = useSelector(state => state.theme.activeTheme);

  return (
    <SettingsStackNav.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <SettingsStackNav.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
        }}
      />
      <SettingsStackNav.Screen
        name="ThemeSettingsScreen"
        component={ThemeSettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
          headerTitle: 'Theme Setting',
        }}
      />
      <SettingsStackNav.Screen
        name="ProfileSettingsScreen"
        component={ProfileSettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
          headerTitle: 'Profile Setting',
        }}
      />
    </SettingsStackNav.Navigator>
  );
};

export default SettingsStackNavigation;
