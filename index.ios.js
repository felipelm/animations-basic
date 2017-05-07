/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Timing from './app/timing';
import Spring from './app/spring';
import Card from './app/card';
import Interpolate from './app/interpolate';
import Rotation from './app/rotation';
import Sequence from './app/sequence';
import Stagger from './app/stagger';
import Parallel from './app/parallel';
import FlipCard from './app/flip-card';

export default class animationsBasic extends Component {
  render() {
    return (
      <FlipCard/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('animationsBasic', () => animationsBasic);
