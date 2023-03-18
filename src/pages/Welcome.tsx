import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const window = Dimensions.get('window');
const screenHeight = window.height;
const screenWidth = window.width;

const Welcome = ({navigation}: any) => {
  const handleLogin = () => {
    // Navigate to the next screen
    navigation.navigate('Login');
  };
  const handleSignup = () => {
    // Navigate to the next screen
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../asset/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Medico!</Text>
      <Text style={styles.subtitle}>Your personal medical assistant</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    margin: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Welcome;
