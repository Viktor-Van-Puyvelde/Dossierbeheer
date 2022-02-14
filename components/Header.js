import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#20b15e',
    height: 80,
    paddingTop: 38,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  title: {
    color: '#F3F3F3',
    fontWeight: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
  }
})

export default Header;
