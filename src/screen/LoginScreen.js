import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { firebase } from '../config/firebase';



const LoginScreen = ({navigation}) => {
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
//const [error, setError] = useState(null);


const loginUser = (email, pass) => {
  firebase.auth().signInWithEmailAndPassword(email, pass)
  .then(() => {
    navigation.navigate('Home');
  })
  .catch((error) => {
   
  });
};

const signupUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email,password);
};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput placeholder="email" style={styles.text} onChangeText={(value)=>{setEmail(value)}}></TextInput>
      <TextInput placeholder="password" style={styles.text} onChangeText={(value)=>{setPass(value)}}></TextInput>
      <View></View>
      <Button title="Login" style={styles.text} onPress={() => loginUser( email, pass)}/>
      <View></View>
      <Button title="SignUp" style={styles.text} onPress={() => signupUser( email, pass)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    fontSize: 30
  }
});


 

export default LoginScreen;
