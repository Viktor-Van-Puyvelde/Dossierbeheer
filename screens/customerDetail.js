import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const CustomerDetail = ({ navigation }) => {
  const [id, setId] = useState([])
  const [forName, setForName] = useState([]);
  const [name, setName] = useState([]);
  const [place, setPlace] = useState([]);
  const [phonenumber, setPhonenumber] = useState([]);
  const [birthdate, setBirthdate] = useState([]);
  const [sex, setSex] = useState([]);
  const [deceases, setDeceases] = useState([]);
  const [medication, setMedication] = useState([]);
  const [treatments, setTreatments] = useState([]);

  const pressHandler = (uri, passing) => {
    navigation.navigate(uri, passing);
  }

  useEffect(() => {
    setId(navigation.getParam('id'))
    setForName(navigation.getParam('forName'));
    setName(navigation.getParam('name'));
    setPlace(navigation.getParam('place'));
    setPhonenumber(navigation.getParam('phonenumber'));
    setBirthdate(navigation.getParam('birthdate'));
    setSex(navigation.getParam('sex'));
    setDeceases(navigation.getParam('deceases'));
    setMedication(navigation.getParam('medication'));
    setTreatments(navigation.getParam('treatments'));
  })

  return (
    <View style={styles.container}>
      <Text>{forName}</Text>
      <Text>{name}</Text>
      <Text>{place}</Text>
      <Text>{phonenumber}</Text>
      <Text>{birthdate}</Text>
      <Text>{sex}</Text>
      <Text>{deceases}</Text>
      <Text>{medication}</Text>
      <Button title="Bekijk behandelinngen" onPress={() => pressHandler('TreatmentsDetails', {id})}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default CustomerDetail;