import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Text onPress={{}}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#FFF',
  },
});

export default Home;
