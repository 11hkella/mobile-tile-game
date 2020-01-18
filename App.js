import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import GameBoard from './components/GameBoard.js'
import Player from './components/Player.js'
import constants from './constants.js';


class App extends Component {
  state = {
    playerPosition: [4, 4]
  }

  onSwipeUp = (gestureState) => {
    let position = [...this.state.playerPosition]
    position[1] -= 1
    if (position[1] >= 0) {
      this.setState({ playerPosition: position })
    }
  }

  onSwipeDown = (gestureState) => {
    let position = [...this.state.playerPosition]
    position[1] += 1
    if (position[1] < constants.GRID_HEIGHT) {
      this.setState({ playerPosition: position })
    }
  }

  onSwipeLeft = (gestureState) => {
    let position = [...this.state.playerPosition]
    position[0] -= 1
    if (position[0] >= 0) {
      this.setState({ playerPosition: position })
    }
  }

  onSwipeRight = (gestureState) => {
    let position = [...this.state.playerPosition]
    position[0] += 1
    if (position[0] < constants.GRID_WIDTH) {
      this.setState({ playerPosition: position })
    }
  }

  onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        this.onSwipeUp(gestureState);
        break;
      case SWIPE_DOWN:
        this.onSwipeDown(gestureState);
        break;
      case SWIPE_LEFT:
        this.onSwipeLeft(gestureState);
        break;
      case SWIPE_RIGHT:
        this.onSwipeRight(gestureState);
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
        onSwipe={this.onSwipe}
        config={config}
        style={styles.app}
      >
        <GameBoard >
          <Player
            x={this.state.playerPosition[0] * constants.CELL_SIZE}
            y={this.state.playerPosition[1] * constants.CELL_SIZE}
          />
        </GameBoard>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#cccccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  }
})

export default App;
