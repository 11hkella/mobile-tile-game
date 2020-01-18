import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import constants from '../constants.js'


export default class Player extends Component {
    render() {
        return (
            <View style={{ ...styles.player, top: this.props.y, left: this.props.x }} />
        )
    }
}

const styles = StyleSheet.create({
    player: {
        borderRadius: 50,
        backgroundColor: 'red',
        width: constants.CELL_SIZE,
        height: constants.CELL_SIZE,
        position: 'absolute',
        zIndex: 3,
    }
})