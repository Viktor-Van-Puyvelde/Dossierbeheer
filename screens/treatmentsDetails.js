import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import mockTreat from '../mockTreatments'

const TreatmentsDetails = ({ navigation }) => {
  const [id, setId] = useState(navigation.getParam('id'));
  const [treatments, setTreatments] = useState(mockTreat);

  useEffect(() => {
    setTreatments(treatments.filter(t => t.customerId === id));
  }, [])

  return(
    <View>
      <Text>{id}</Text>
      <View>
        {treatments.map((item, key) => 
        <Text key={key}>
          Datum: {item.date}{"\n"}
          Aandoening: {item.condition}{"\n"}
          Behandeling: {item.treatment}{"\n"}{"\n"}
        </Text>
        )}
      </View>
    </View>
  )
}

export default TreatmentsDetails;