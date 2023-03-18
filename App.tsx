/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Welcome from './src/pages/Welcome';
import Signup from './src/pages/Signup';
import Dashboard from './src/pages/Dashboard';
import CreateAppoinment from './src/pages/appoinment/CreateAppoinment';
import Appointment from './src/pages/appoinment/Appoinment';
import MedicationScreen from './src/pages/medication/Medication';
import TestResult from './src/pages/testPage/TestResult';
import Doctor from './src/pages/doctorPage/Doctor';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Appointments" component={Appointment} />
        <Stack.Screen name="CreateAppoinment" component={CreateAppoinment} />
        <Stack.Screen name="Medications" component={MedicationScreen} />
        <Stack.Screen name="Results" component={TestResult} />
        <Stack.Screen name="Doctor" component={Doctor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
