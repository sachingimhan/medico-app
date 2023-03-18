import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface IHeader {
  title: string;
  onLogoutPress: () => void;
  isBackNavigation?: () => void;
  onPressAdd?: () => void;
}
const Header: FC<IHeader> = ({
  title,
  onLogoutPress,
  isBackNavigation,
  onPressAdd,
}) => {
  return (
    <View style={styles.container}>
      {isBackNavigation && (
        <TouchableOpacity onPress={isBackNavigation}>
          <Icon name="chevron-left" size={28} color="#fff" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.sideBtn}>
        {onPressAdd && (
          <TouchableOpacity onPress={onPressAdd}>
            <Icon name="power-off" size={28} color="#fff" />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onLogoutPress}>
          <Icon name="power-off" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#3f51b5',
  },
  sideBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Header;
