import React, {useContext, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const SignUp = () => {
  const state = {
    email: '',
    username: '',
    password: '',
    isLogin: true,
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
        <Pressable style={styles.button} onPress={{}}>
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
  pageLabel: {
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
  pageLabel: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 45,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SignUp;
