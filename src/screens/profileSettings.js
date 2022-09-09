import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import {setAuth} from '../store';

const ProfileSettings = () => {
  const user = useSelector(state => state.auth.authUser);
  const theme = useSelector(state => state.theme.activeTheme);
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const state = {
    email: user?.email,
    username: user?.username,
  };

  const handleUpdate = () => {
    // update user from json server by ID
    axios
      .put(`http://localhost:3000/users/${user.id}`, {
        email: state.email,
        username: state.username,
        password: user?.password,
      })
      .then(response => {
        if (response.status === 200) {
          // Save user AsyncStorage
          storeData(response.data);
          // Get user AsyncStorage to save in Global State
          getData();
          navigate('Settings');
        }
      });
  };

  const storeData = async data => {
    // Save user AsyncStorage
    await AsyncStorage.setItem('user', JSON.stringify(data));
  };

  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem('user');
    if (jsonValue != null) {
      // Incoming data is saved to Global State
      dispatch(setAuth({auth: JSON.parse(jsonValue)}));
    }
  };

  return (
    <View
      style={[
        styles.profileContainer,
        {backgroundColor: theme?.backgroundColor},
      ]}>
      <View style={styles.formArea}>
        <Text style={[styles.inputLabel, {color: theme.color}]}>Email</Text>
        <TextInput
          style={[styles.input, {color: theme.color}]}
          label="email"
          placeholder={user?.email}
          placeholderTextColor={theme.greyText}
          onChangeText={text => {
            state.email = text;
          }}
        />
        <Text style={[styles.inputLabel, {color: theme.color}]}>Username</Text>
        <TextInput
          style={[styles.input, {color: theme.color}]}
          label="userName"
          placeholder={user?.username}
          placeholderTextColor={theme.greyText}
          onChangeText={text => {
            state.username = text;
          }}
        />
        <Pressable style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    display: 'flex',
    flex: 1,
  },
  formArea: {
    width: '90%',
    height: '90%',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneArea: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    marginBottom: 20,
  },
  picker: {
    width: '35%',
    borderWidth: 1,
    borderColor: '#686868',
    borderRadius: 4,
  },
  phoneInput: {
    width: '62%',
    height: 50,
    borderWidth: 1,
    borderColor: '#686868',
    fontSize: 20,
    padding: 10,
    borderRadius: 4,
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#686868',
    marginBottom: 20,
    padding: 10,
    borderRadius: 4,
  },
  inputLabel: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  phoneLabel: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default ProfileSettings;
