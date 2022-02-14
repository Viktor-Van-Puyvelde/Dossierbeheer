import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import mock from "../mockData";

const SearchCustomer = ({ navigation }) => {
  const [customers, setCustomers] = useState(mock);

  return (
    <View style={styles.container}>
      <FlatList 
        data={customers}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CustomerDetail', item)}>
            <Text>{item.forName} {item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default SearchCustomer;