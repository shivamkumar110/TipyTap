import React, {Component} from 'react';
import Card from './Card.js';
import utils from './utils/utils.js'

class CardRow extends Component {
    render() {
        const cardRow = [] 
        for (let outer = 0; outer < this.props.numberOfCardsInRow;  outer++) {
            cardRow.push(<Card key={utils.generateId()} style={styles.layout}></Card>)
        }
        return (
            <View>
                {cardRow}
            </View>
        )
    }
}
export default CardRow
