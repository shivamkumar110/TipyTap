import  React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Card from './Card.js';
export default class CardContainer extends Component {
    shouldBeHighlighted(outer, inner) {
        return highlightedRow === outer && highlightedColumn === inner
    }
    render() {
        const cards = [];
        const difficulty = 4;
        const highlightedRow = this.props.highlightedRow;
        const highlightedColumn = this.props.highlightedColumn;
        for (let outer = 0; outer < difficulty;  outer++) {
            for (let inner = 0; inner < difficulty; inner++) {
                cards.push(<Card key={outer + '' + inner} style={styles.layout}></Card>)  
            }
          }
        return (
            <ScrollView>
                <Text>{highlightedRow}</Text>
                <View
                style={styles.container}>{cards}</View>
            </ScrollView>)
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: "center",
      alignItems: 'center',
      borderColor: 'blue',
      flexGrow: 1,
      justifyContent: 'space-around',
      borderWidth: 2
    },
    // layout: {
    //     flex: 1
    // }
  })