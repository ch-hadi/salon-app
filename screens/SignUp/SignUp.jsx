import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
export const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Add your signup logic here
    // For example, you can create a new user account and navigate to the login screen
    // (Note: This is a basic example and doesn't include proper authentication)
    alert('Sign up successful! Please log in.');
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onChangeText={text => setFullName(text)}
          value={fullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLinkText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

// ... (Rest of the code remains the same)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
      },
      inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#333',
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 16,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
      },
      button: {
        backgroundColor: '#007bff',
        padding: 14,
        borderRadius: 8,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      forgotPassword: {
        marginTop: 16,
        alignItems: 'center',
      },
      forgotPasswordText: {
        color: '#007bff',
        fontSize: 16,
      },
  loginLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  loginLinkText: {
    color: '#007bff',
    fontSize: 16,
  },
});


