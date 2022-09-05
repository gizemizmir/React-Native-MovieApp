import React from 'react';
import {Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import SettingsStackNavigation from './settingStackNavigation';

const BottomNav = createBottomTabNavigator();

const EmptyScreen = () => {
  return (
    <View>
      <Text>Empty Screen</Text>
    </View>
  );
};

const BottomNavigation = () => {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen
        name="Home"
        component={EmptyScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Ionicons name="person-circle-sharp" size={25} />,
        }}
      />
      <BottomNav.Screen
        name="Search"
        component={EmptyScreen}
        options={{
          tabBarIcon: () => <Ionicons name="chatbubbles-outline" size={25} />,
        }}
      />
      <BottomNav.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarLabel: 'Setting',
          tabBarIcon: () => <Ionicons name="settings-outline" size={25} />,
        }}
        component={SettingsStackNavigation}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
