import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Settings = () => {
  const {navigate} = useNavigation();
  const theme = useSelector(state => state.theme.activeTheme);

  const handleLogout = () => {};

  return (
    <View
      style={[
        styles.settingContainer,
        {backgroundColor: theme?.backgroundColor},
      ]}>
      <Image
        style={styles.profileImage}
        source={{uri: 'https://i.pravatar.cc/300?img=20'}}
      />
      <Pressable
        style={styles.settingButton}
        onPress={() => {
          navigate('ThemeSettingsScreen');
        }}>
        <Text style={styles.buttonText}>Theme</Text>
      </Pressable>
      <Pressable
        style={styles.settingButton}
        onPress={() => {
          navigate('ProfileSettingsScreen');
        }}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </Pressable>
      <Pressable style={[styles.settingButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  settingContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginBottom: 30,
  },
  settingButton: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2196F3',
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default Settings;
