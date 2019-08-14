import  React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Card extends Component {
    render() {
        const highlighted = this.props.highlighted ? styles.highlighted : null
        return(
            <View class="card-container">
                <View style={[styles.card, highlighted]} onClick="handleCardClick">
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height: 100,
        width: 100,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'grey'
    },
    highlighted: {
        backgroundColor:  '#0095da'
    }
});