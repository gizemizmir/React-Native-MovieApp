import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.settingsContainer}>
      <Text>Settings Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    backgroundColor: '#FFF',
  },
});

export default Settings;
