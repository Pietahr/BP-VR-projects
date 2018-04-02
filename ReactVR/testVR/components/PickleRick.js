import React,{Component} from 'react';
import {Animated, Model, asset, AnimatedModel, View} from 'react-vr';

import Easing from 'react-native';

const DISTANCE = 8;

export default class PickleRick extends Component {

  constructor() {
      super();

      this.state = { spin: new Animated.Value(0), slide: new Animated.Value(DISTANCE) };
  }

  componentDidMount() {
    Animated.parallel([
      this.spinAnimation(),
        Animated.timing(
          this.state.slide,
          {
           toValue: -DISTANCE,
           duration: 6000,
           easing: Easing.ease,
           delay: 2000
          }
        )
    ]).start();

      //this.spinAnimation();
  }

  spinAnimation() {
      this.state.spin.setValue(0);
      Animated.timing(
          this.state.spin,
          {
              toValue: 1,
              duration: 1000,
              easing: Easing.linear
          }
      ).start(() => this.spinAnimation());
  }

    render() {
      const spin = this.state.spin.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 360]
      });

      const AnimatedModel = Animated.createAnimatedComponent(Model);

        return (
          <View>
            <AnimatedModel source={{ obj: asset('pickle_rick.obj') }}
                style={{
                    transform: [
                      {translateX: this.state.slide},
                      {translateY: 0},
                      {translateZ: -6},
                      { scale: 0.01 },
                      { rotateY: spin}
                  ]
                }}
                texture={asset('2.jpg')}
            />
            </View>
        );
    }
}
