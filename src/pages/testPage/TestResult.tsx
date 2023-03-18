import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import TestResultList from '../../data/Result.json';

interface TestResult {
  id: string;
  result: number;
  date: string;
}
const TestResult: React.FC = ({navigation}: any) => {
  const handleTilePress = (tileName: string) => {
    // Navigate to the screen associated with the pressed tile
    navigation.push(tileName);
  };
  const renderResultItem = ({item}: {item: TestResult}) => {
    return (
      <View style={styles.resultContainer}>
        <Text style={styles.resultTitle}>Result: {item.result}%</Text>
        <Text style={styles.resultDate}>Date: {item.date}</Text>
      </View>
    );
  };

  return (
    <>
      <Header
        title="Results"
        onLogoutPress={() => handleTilePress('Welcome')}
        isBackNavigation={() => navigation.goBack()}
      />
      <LinearGradient
        colors={['#3f51b5', '#2196f3']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <View style={styles.container}>
          {TestResultList.length ? (
            <FlatList
              data={TestResultList}
              keyExtractor={item => item.id}
              renderItem={renderResultItem}
              contentContainerStyle={styles.resultContainerList}
            />
          ) : (
            <Text>No results found</Text>
          )}
        </View>
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

export default TestResult;
