import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DashboardTile from '../components/DashboardTile';
import Header from '../components/Header';

const Dashboard = ({navigation}: any) => {
  const handleTilePress = (tileName: string) => {
    // Navigate to the screen associated with the pressed tile
    navigation.push(tileName);
  };

  return (
    <>
      <Header
        title="Dashboard"
        onLogoutPress={() => handleTilePress('Welcome')}
        // isBackNavigation={true}
      />
      <LinearGradient
        colors={['#3f51b5', '#2196f3']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <View style={styles.container}>
          <View style={styles.row}>
            <DashboardTile
              title="Appointments"
              value="5"
              onPress={() => handleTilePress('Appointments')}
              color="#FA9700"
            />
            <DashboardTile
              title="Medications"
              value="3"
              onPress={() => handleTilePress('Medications')}
              color="#97FA00"
            />
          </View>
          <View style={styles.row}>
            <DashboardTile
              title="Contact Doctor"
              value="2"
              onPress={() => handleTilePress('Doctor')}
              color="#FADC00"
            />
            <DashboardTile
              title="Results"
              value="4"
              onPress={() => handleTilePress('Results')}
              color="#00F6FA"
            />
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default Dashboard;
