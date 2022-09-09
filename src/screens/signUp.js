import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {setAuth} from '../store';

const SignUp = () => {
  const dispatch = useDispatch();

  const state = {
    email: '',
    username: '',
    password: '',
  };

  const handlePostUser = () => {
    // post user json-server
    axios
      .post('http://localhost:3000/users', {
        email: state.email,
        username: state.username,
        password: state.password,
        avatar: 'https://i.pravatar.cc/150',
      })
      .then(response => {
        if (response.status === 201) {
          // Save user AsyncStorage
          storeData(response.data);
          // Get user AsyncStorage to save in Global State
          getData();
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
    <SafeAreaView style={styles.form}>
      <View style={styles.formArea}>
        <Text style={styles.pageLabel}>Sign Up</Text>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          label="email"
          onChangeText={text => {
            state.email = text;
          }}
        />
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          label="userName"
          onChangeText={text => {
            state.username = text;
          }}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          label="password"
          onChangeText={text => {
            state.password = text;
          }}
        />
        <Text style={styles.inputLabel}>Password Again</Text>
        <TextInput
          style={styles.input}
          label="passwordAgain"
          onChangeText={text => {
            state.password = text;
          }}
        />
        <Pressable style={styles.button} onPress={handlePostUser}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  formArea: {
    width: '90%',
    height: '90%',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
  pageLabel: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 45,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SignUp;
