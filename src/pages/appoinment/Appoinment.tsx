import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';

const Appointment = ({navigation}: any) => {
  const [appointments, setAppointments] = useState([
    {id: '1', type: 'Check-up', date: new Date(2022, 11, 20, 10, 0)},
    {id: '2', type: 'Dental Cleaning', date: new Date(2022, 11, 28, 15, 30)},
    {id: '3', type: 'Eye Exam', date: new Date(2023, 0, 5, 9, 15)},
  ]);

  const handleAppointmentPress = (appointment: any) => {
    // Handle appointment press logic goes here
  };

  const renderAppointmentItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() => handleAppointmentPress(item)}
      style={styles.appointmentItem}>
      <Text style={styles.appointmentType}>{item.type}</Text>
      <Text style={styles.appointmentDate}>{item.date.toLocaleString()}</Text>
    </TouchableOpacity>
  );

  const handleTilePress = (tileName: string) => {
    // Navigate to the screen associated with the pressed tile
    navigation.navigate(tileName);
  };


  return (
    <>
      <Header
        title="Appoinments"
        onLogoutPress={() => handleTilePress('Welcome')}
        isBackNavigation={() => navigation.goBack()}
        onPressAdd={() => navigation.push('CreateAppoinment')}
      />
      <LinearGradient
        colors={['#3f51b5', '#2196f3']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={renderAppointmentItem}
            style={styles.list}
          />
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    width: '90%',
  },
  appointmentItem: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  appointmentType: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  appointmentDate: {
    fontSize: 16,
  },
});

export default Appointment;
