import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import constants from '../constants.js'


const tilePositions = []
for (let h = 0; h < constants.GRID_HEIGHT; h++) {
    for (let w = 0; w < constants.GRID_WIDTH; w++) {
        const tile = {
            x: h * constants.CELL_SIZE,
            y: w * constants.CELL_SIZE,
        }

        tilePositions.push(tile)
    }
}


export default class GameBoard extends Component {
    state = {
        tilePositions: tilePositions
    }

    render() {
        return (
            <View style={styles.board}>
                {this.state.tilePositions.map((el, i) => {
                    return (
                        <View key={i} style={{ ...styles.tile, top: el.y, left: el.x }} />
                    )
                })}
                <View>{this.props.children}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    board: {
        height: constants.GRID_HEIGHT * constants.CELL_SIZE,
        width: constants.GRID_WIDTH * constants.CELL_SIZE,
        backgroundColor: '#D6EAF8',
        position: 'absolute',
        borderRadius: 4,
    },
    tile: {
        borderWidth: 1,
        borderColor: '#5DADE2',
        borderRadius: 4,
        position: 'absolute',
        backgroundColor: '#AED6F1',
        width: constants.CELL_SIZE,
        height: constants.CELL_SIZE,
        zIndex: 2,
    }
})