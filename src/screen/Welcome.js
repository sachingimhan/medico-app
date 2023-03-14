import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Center} from '@builderx/utils';

const window = Dimensions.get('window');
const screenHeight = window.height;
const screenWidth = window.width;

function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rect: {
    top: 0,
    left: 0,
    height: screenHeight * 0.432,
    position: 'absolute',
    backgroundColor: 'rgba(85,159,210,1)',
    borderBottomRightRadius: screenWidth * 0.1,
    borderBottomLeftRadius: screenWidth * 0.1,
    right: 0,
  },
  image: {
    top: 0,
    left: 0,
    width: '100%',
    height: screenHeight * 0.5,
    position: 'absolute',
  },
  welcomeTo: {
    top: screenHeight * 0.5,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-700',
    color: 'rgba(117,117,117,1)',
    fontSize: screenWidth * 0.05,
    width: screenWidth,
    height: screenHeight * 0.47,
    textAlign: 'center',
  },
  medico: {
    top: screenHeight * 0.53,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: screenWidth * 0.08,
    width: screenWidth,
    height: screenHeight * 0.77,
    textAlign: 'center',
  },
  group: {
    top: screenHeight * 0.7,
    left: screenWidth * 0.1,
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
  },
  button: {
    top: 0,
    left: 0,
    width: screenWidth * 0.8,
    height: screenHeight * 0.08,
    position: 'absolute',
    backgroundColor: 'rgba(42,49,119,1)',
    borderRadius: screenWidth * 0.07,
  },
  create: {
    top: screenHeight * 0.016,
    left: screenWidth * 0.325,
    position: 'absolute',
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: screenWidth * 0.06,
    textAlign: 'center',
  },
  group2: {
    top: screenHeight * 0.78,
    left: 0,
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
  },
  imAlreadyAMember: {
    top: screenHeight * 0.01,
    left: screenWidth * 0.157,
    position: 'absolute',
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: screenWidth * 0.04,
  },
  button2: {
    top: screenHeight * 0.01,
    left: screenWidth * 0.17,
    width: screenWidth * 0.4,
    height: screenHeight * 0.08,
    position: 'absolute',
  },
});

export default Welcome;
