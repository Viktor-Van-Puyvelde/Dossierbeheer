import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import mock from "../mockData";

const TreatmentsDetails = ({ navigation }) => {
  const [date, setDate] = useState([]);

  useEffect(() => {
    setDate(navigation.getParam('date'));
  })

  console.log(date);

  return(
    <View>
      <Text>{date}</Text>
    </View>
  )
}

export default TreatmentsDetails;