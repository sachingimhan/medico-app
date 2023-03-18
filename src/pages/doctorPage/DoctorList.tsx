import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

type Doctor = {
  id: string;
  name: string;
  specialty: string;
};

type DoctorListProps = {
  doctors: Doctor[];
  onSelectDoctor: (doctor: Doctor) => void;
};

const DoctorList: React.FC<DoctorListProps> = ({doctors, onSelectDoctor}) => {
  const renderItem = ({item}: {item: Doctor}) => {
    return (
      <TouchableOpacity
        style={styles.doctorItem}
        onPress={() => onSelectDoctor(item)}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={doctors}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.doctorList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorList: {
    minWidth: '100%',
  },
  doctorItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 2,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#888',
  },
});

export default DoctorList;
