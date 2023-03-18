import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DashboardTile = ({title, value, onPress, color}: any) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color ? color : '#fff'}]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  valueContainer: {
    backgroundColor: '#eee',
    borderRadius: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DashboardTile;
