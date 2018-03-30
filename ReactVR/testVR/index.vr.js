import React, {Component} from 'react';
import PickleRick from './components/PickleRick';
import NestedMessage from './components/NestedMessage';

import FixedText from './components/FixedText';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box, Model, Cylinder
} from 'react-vr';


class testVR extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('horseshoe-bend.jpg')}/>
        <FixedText message="# objects: "/>
        <NestedMessage/>
        <PickleRick/>
      </View>
    );
  }
}

AppRegistry.registerComponent('testVR', () => testVR);