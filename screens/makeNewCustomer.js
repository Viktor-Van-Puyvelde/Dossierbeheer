import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MakeNewCustomer = () => {
  return (
    <View style={styles.container}>
      <Text>nieuwe klant toevoegen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default MakeNewCustomer;