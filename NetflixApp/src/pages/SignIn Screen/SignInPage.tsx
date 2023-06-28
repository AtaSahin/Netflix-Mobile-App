import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './SignInPage.styles';
import {useNavigation} from '@react-navigation/native';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('HomePage');
    console.log('Sign in:', email, password);
  };

  const handleRecoverPassword = () => {
    // Perform password recovery logic here
    console.log('Password recovery:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Text style={styles.recoverPassword} onPress={handleRecoverPassword}>
        Forgot your password?
      </Text>
    </View>
  );
};

export default SignInPage;
