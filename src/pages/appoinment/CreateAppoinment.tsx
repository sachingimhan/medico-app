import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateAppoinment = ({navigation}: any) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentNotes, setAppointmentNotes] = useState('');

  const handleDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSaveAppointment = () => {
    // Save appointment logic goes here
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Appointment</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.datePicker}>
        <Text style={styles.label}>Date and Time:</Text>
        <Text style={styles.date}>{date.toLocaleString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Appointment Type"
        value={appointmentType}
        onChangeText={setAppointmentType}
      />
      <TextInput
        style={[styles.input, styles.notesInput]}
        placeholder="Notes"
        value={appointmentNotes}
        onChangeText={setAppointmentNotes}
        multiline={true}
      />
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveAppointment}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  date: {
    fontSize: 18,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  notesInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  saveButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#3f51b5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CreateAppoinment;
