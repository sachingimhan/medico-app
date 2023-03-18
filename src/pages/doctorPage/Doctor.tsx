import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import DoctorList from './DoctorList';
import ListOfDoctors from '../../data/DoctorList.json';
const Doctor: React.FC = ({navigation}: any) => {
  const handleTilePress = (tileName: string) => {
    // Navigate to the screen associated with the pressed tile
    navigation.push(tileName);
  };
  return (
    <>
      <Header
        title="Doctor"
        onLogoutPress={() => handleTilePress('Welcome')}
        isBackNavigation={() => navigation.goBack()}
      />
      <LinearGradient
        colors={['#3f51b5', '#2196f3']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <DoctorList
          doctors={ListOfDoctors}
          onSelectDoctor={(doctor: any) => {}}
        />
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    alignItems: 'center',
    minWidth: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  resultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    minWidth: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    padding: 20,
  },
  resultContainerList: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    width: '90%',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  resultDate: {
    fontSize: 16,
    color: '#fff',
  },
});
export default Doctor;
