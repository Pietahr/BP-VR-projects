import React,{Component} from 'react';
import {Animated, Model, asset, AnimatedModel, View} from 'react-vr';

import Easing from 'react-native';

const xDISTANCE = 8;

export default class PickleRick extends Component {
    
  constructor(props) {
      super(props);
        depth =  this.props.depth;
      this.state = { spin: new Animated.Value(0), slideX: new Animated.Value(xDISTANCE), slideZ: new Animated.Value(-depth) };
  }

  componentDidMount() {
    depth =  this.props.depth;
    Animated.parallel([
        this.spinAnimation(),
        this.goRound()
    ]).start();
  }

  // spin object around Y-axis
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

    goRound() {
        Animated.sequence([
            Animated.timing(
                this.state.slideX,
                {
                toValue: -xDISTANCE,
                duration: 4000,
                easing: Easing.ease,
                }
            ),
            Animated.timing(
                this.state.slideZ,
                {
                toValue: depth,
                duration: 4000,
                easing: Easing.ease
                }),
            Animated.timing(
                this.state.slideX,
                {
                toValue: xDISTANCE,
                duration: 4000,
                easing: Easing.ease
                }
            ),
            Animated.timing(
                this.state.slideZ,
                {
                toValue: -depth,
                duration: 4000,
                easing: Easing.ease
                })
        ]).start(() => this.goRound());
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
                      {translateX: this.state.slideX},
                      {translateY: this.props.height},
                      {translateZ: this.state.slideZ},
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
