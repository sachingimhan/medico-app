import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect} />
        <Image
          source={require('../../asset/Login-banner.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.group3}>
        <Text style={styles.signIn}>Sign In</Text>
        <View style={styles.group2}>
          <TextInput
            placeholder="     Enter Your Phone Number"
            returnKeyType="next"
            inlineImagePadding={0}
            autoFocus={true}
            style={styles.textInput}
          />
          <TextInput
            placeholder="     Enter Your Password"
            secureTextEntry={true}
            style={styles.textInput1}
          />
          <View style={styles.group1}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Welcome')}
              style={styles.button1}>
              <Text style={styles.text2}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width.valueOf();
const height = Dimensions.get('window').height.valueOf();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  rect: {
    top: 38,
    left: 135,
    width: 360,
    height: 323,
    position: 'absolute',
    backgroundColor: 'rgba(132,142,246,1)',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 100,
  },
  image: {
    top: 0,
    left: 0,
    width: 439,
    height: 439,
    position: 'absolute',
  },
  rectStack: {
    width: 495,
    height: 439,
    marginTop: 379,
    marginLeft: -135,
  },
  group3: {
    height: 269,
    marginTop: -790,
  },
  signIn: {
    fontFamily: 'roboto-700',
    color: 'rgba(45,45,45,1)',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  group2: {
    width: width,
    height: 207,
    marginTop: 25,
    marginLeft: 21,
  },
  textInput: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 47,
    width: width - 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(197,202,220,1)',
    backgroundColor: 'rgba(242,245,252,1)',
    letterSpacing: 0,
  },
  textInput1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 47,
    width: width - 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(197,202,220,1)',
    backgroundColor: 'rgba(242,245,252,1)',
    letterSpacing: 0,
    marginTop: 16,
  },
  group1: {
    width: width,
    height: 62,
    marginTop: 35,
  },
  button1: {
    width: width - 45,
    height: 60,
    backgroundColor: 'rgba(42,49,119,1)',
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
  },
  text2: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
});

export default Login;
