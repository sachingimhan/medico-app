import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';

const MedicationScreen: React.FC = ({navigation}: any) => {
  const handleTilePress = (tileName: string) => {
    // Navigate to the screen associated with the pressed tile
    navigation.push(tileName);
  };
  return (
    <>
      <Header
        title="Medications"
        onLogoutPress={() => handleTilePress('Welcome')}
        isBackNavigation={() => navigation.goBack()}
      />
      <LinearGradient
        colors={['#3f51b5', '#2196f3']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.subtitle}>Upcoming Medications</Text>
            <View style={styles.medication}>
              <Text style={styles.medicationName}>Aspirin</Text>
              <Text style={styles.medicationTime}>8:00 AM</Text>
            </View>
            <View style={styles.medication}>
              <Text style={styles.medicationName}>Lipitor</Text>
              <Text style={styles.medicationTime}>1:00 PM</Text>
            </View>
            <View style={styles.medication}>
              <Text style={styles.medicationName}>Advil</Text>
              <Text style={styles.medicationTime}>6:00 PM</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#673AB7',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  medication: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#fff',
    marginBottom: 2,
  },
  medicationName: {
    flex: 1,
    fontSize: 16,
  },
  medicationTime: {
    fontSize: 16,
    color: '#757575',
  },
});

export default MedicationScreen;
