import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card.js'
import CardContainer from './components/CardContainer.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Edited Text</Text>
      {/* <Card></Card> */}
      <CardContainer highlightedRow={'shivam'}></CardContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 2,
    padding: 20
  },
});
