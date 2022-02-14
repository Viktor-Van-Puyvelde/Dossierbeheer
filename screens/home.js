import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

const Home = ({ navigation }) => {

  const pressHandler = (uri) => {
    navigation.navigate(uri);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Maak nieuwe klant aan" onPress={() => pressHandler('MakeNewCustomers')}/>
        <Button title="Zoek naar klant" onPress={() => pressHandler('SearchCustomers')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer:{
    paddingTop: '50%',
  },
})

export default Home;