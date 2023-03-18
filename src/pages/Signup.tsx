import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';

const Signup = ({navigation}: any) => {
  const handleRouteDashboard = () => {
    navigation.navigate('Dashboard');
  };
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStackStack}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 360 360" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(0,111,188,1)"
              cx={180}
              cy={180}
              rx={180}
              ry={180}
            />
          </Svg>
          <Image
            source={require('../../asset/Signup-banner.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <TouchableOpacity style={styles.button1} onPress={handleRouteDashboard}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signIn1}>Sign Up</Text>
      <TextInput
        placeholder="   Full Name"
        returnKeyType="next"
        inlineImagePadding={0}
        autoFocus={true}
        style={styles.textInput1}
      />
      <TextInput
        placeholder="   Phone Number"
        returnKeyType="next"
        inlineImagePadding={0}
        autoFocus={false}
        style={styles.textInput2}
      />
      <TextInput
        placeholder="   Password"
        returnKeyType="next"
        inlineImagePadding={0}
        autoFocus={false}
        secureTextEntry={true}
        style={styles.textInput3}
      />
      <View style={styles.group}>
        <View style={styles.textInput4Row}>
          <TextInput
            placeholder="   Day"
            returnKeyType="next"
            inlineImagePadding={0}
            autoFocus={false}
            style={styles.textInput4}
          />
          <TextInput
            placeholder="   Month"
            returnKeyType="next"
            inlineImagePadding={0}
            autoFocus={true}
            style={styles.textInput5}
          />
          <TextInput
            placeholder="   Year"
            returnKeyType="next"
            inlineImagePadding={0}
            autoFocus={true}
            style={styles.textInput6}
          />
        </View>
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ellipse: {
    top: 67,
    width: 452,
    height: 452,
    position: 'absolute',
    left: 0,
  },
  image: {
    top: 0,
    left: 23,
    width: 406,
    height: 406,
    position: 'absolute',
  },
  ellipseStack: {
    top: 30,
    left: 0,
    width: 452,
    height: 519,
    position: 'absolute',
  },
  button1: {
    top: 0,
    left: 66,
    width: width - 40,
    height: 60,
    position: 'absolute',
    backgroundColor: 'rgba(42,49,119,1)',
    borderRadius: 20,
    alignItems: 'center',
  },
  signUp: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
  },
  ellipseStackStack: {
    width: 452,
    height: 549,
    marginTop: 370,
    marginLeft: -46,
  },
  signIn1: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
    textAlign: 'center',
    marginTop: -890,
  },
  textInput1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(197,202,220,1)',
    backgroundColor: 'rgba(242,245,252,1)',
    letterSpacing: 0,
    marginTop: 29,
    marginLeft: 20,
    marginRight: 20,
  },
  textInput2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(197,202,220,1)',
    backgroundColor: 'rgba(242,245,252,1)',
    letterSpacing: 0,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  textInput3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(197,202,220,1)',
    backgroundColor: 'rgba(242,245,252,1)',
    letterSpacing: 0,
    marginTop: 13,
    marginLeft: 20,
    marginRight: 20,
  },
  group: {
    width: width - 40,
    height: 45,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 20,
  },
  textInput4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(197,202,220,1)',
    backgroundColor: 'rgba(242,245,252,1)',
    letterSpacing: 0,
    flex: 1,
    marginRight: 7,
  },
  textInput5: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(197,202,220,1)',
    backgroundColor: 'rgba(242,245,252,1)',
    letterSpacing: 0,
    flex: 1,
    marginRight: 7,
    marginLeft: 7,
  },
  textInput6: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(197,202,220,1)',
    backgroundColor: 'rgba(242,245,252,1)',
    letterSpacing: 0,
    flex: 1,
    marginLeft: 7,
  },
  textInput4Row: {
    height: 45,
    flexDirection: 'row',
    flex: 1,
  },
});

export default Signup;
