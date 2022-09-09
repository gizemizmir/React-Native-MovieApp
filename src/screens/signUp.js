import React, {useState} from 'react';
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
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [againPassword, setAgainPassword] = useState('');

  const state = {
    email: '',
    username: '',
    password: '',
  };

  const handlePostUser = () => {
    // post user json-server
    axios
      .post('http://localhost:3000/users', {
        email: email,
        username: username,
        password: password,
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
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          label="userName"
          value={username}
          onChangeText={text => {
            setUsername(text);
          }}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          label="password"
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <Text style={styles.inputLabel}>Password Again</Text>
        <TextInput
          style={styles.input}
          label="passwordAgain"
          value={againPassword}
          onChangeText={text => {
            setAgainPassword(text);
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
