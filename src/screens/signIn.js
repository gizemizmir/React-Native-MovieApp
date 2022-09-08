import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const {navigate} = useNavigation();

  const state = {
    username: '',
    password: '',
    isLogin: true,
  };

  return (
    <SafeAreaView style={styles.form}>
      <View style={styles.formArea}>
        <Text style={styles.pageLabel}>Sign In</Text>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          label="username"
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
        <Pressable style={styles.button} onPress={{}}>
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
