import React, {Component} from 'react';
import PickleRick from './components/PickleRick';

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
        <Pano source={asset('chess-world.jpg')}/>
      <PickleRick/>
      <Box
        dimWidth={10}
        dimDepth={1}
        dimHeight={1}
        style={{transform: [{translate: [0, 0, -10]}, /*{rotateX : -45}, {rotateY: -45}*/]}}
      />
      <Cylinder
        radiusTop={0.5}
        radiusBottom={0.5}
        dimHeight={4}
        segments={12}
        style={{transform: [{translate: [2, -2, -10]}, /*{rotateX : -45}, {rotateY: -45}*/]}}
      />
            <Cylinder
        radiusTop={0.5}
        radiusBottom={0.5}
        dimHeight={4}
        segments={12}
        style={{transform: [{translate: [-3, -2, -10]}, /*{rotateX : -45}, {rotateY: -45}*/]}}
      />
      </View>

    );
  }
}

AppRegistry.registerComponent('testVR', () => testVR);