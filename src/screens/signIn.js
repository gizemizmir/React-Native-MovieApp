import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {setAuth} from '../store';

const SignIn = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // get user from json server by username
    axios
      .get(`http://localhost:3000/users?username=${username}`)
      .then(response => {
        console.log('RESPONSE', response.data);
        if (response.status === 200 && response.data.length > 0) {
          // Password check
          if (response.data?.[0]?.password === password) {
            // Save user AsyncStorage
            storeData(response.data[0]);
            // Get user AsyncStorage to save in Global State
            getData();
          } else {
            Alert.alert('Wrong password!');
          }
        } else {
          Alert.alert('User not found!');
        }
      })
      .catch(error => {
        console.log('error', error);
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
        <Text style={styles.pageLabel}>Sign In</Text>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          label="username"
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
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <Text style={styles.signupLabel}>Don't have an account?</Text>
        <Pressable
          style={styles.buttonSignUp}
          onPress={() => {
            navigate('SignUp');
          }}>
          <Text style={styles.buttonSignUpText}>Sign Up</Text>
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
  pageLabel: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 45,
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
    marginBottom: 35,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  buttonSignUp: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  buttonSignUpText: {
    color: '#2196F3',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  signupLabel: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SignIn;
