/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated
} from 'react-native';

export default class Parallel extends Component {
  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(1);
  }
  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedValue1,{
        toValue: 300,
        duration: 300
      }),
      Animated.spring(this.animatedValue2, {
        toValue:3,
      })
    ]).start()
  }
  render() {
    const animatedStyles = {
      transform: [
        {translateY: this.animatedValue1},
        {scale: this.animatedValue2}
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    backgroundColor: "#333",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  }
});
