import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Card from './components/Card.js'
import CardContainer from './components/CardContainer.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Edited Text</Text>
      <CardContainer highlightedRow={'shivam'}></CardContainer>
    </View>
  );
}
let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    borderColor: 'green',
    borderWidth: 2,
    padding: 20,
    height: ScreenHeight
  },
});
