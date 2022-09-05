import React from 'react';
import {Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

const EmptyScreen = () => {
  return (
    <View>
      <Text>Empty Screen</Text>
    </View>
  );
};

const SettingsStackNav = createStackNavigator();
const SettingsStackNavigation = () => {
  return (
    <SettingsStackNav.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <SettingsStackNav.Screen
        name="Setting"
        component={EmptyScreen}
        options={{}}
      />
      <SettingsStackNav.Screen
        name="ThemeSettingsScreen"
        component={EmptyScreen}
        options={{}}
      />
      <SettingsStackNav.Screen
        name="ProfileSettingsScreen"
        component={EmptyScreen}
        options={{}}
      />
    </SettingsStackNav.Navigator>
  );
};

export default SettingsStackNavigation;
