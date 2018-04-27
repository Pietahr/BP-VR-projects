import React,{Component} from 'react';
import {Animated, Model, asset, AnimatedModel, View} from 'react-vr';

import Easing from 'react-native';


export default class Figure extends Component {
    
  constructor(props) {
      super(props);
        depth =  this.props.z;
        x = this.props.x
      this.state = { spin: new Animated.Value(0), slideX: new Animated.Value(x), slideZ: new Animated.Value(-depth) };
  }

  componentDidMount() {
    depth =  this.props.z;
    x = this.props.x
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
                toValue: -x,
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
                toValue: x,
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

        // check if a texture file is included.
        var opts = {};
        if (this.props.texture.length > 0) {
            opts['texture'] = asset(this.props.texture)
        }
        // check if mtl texture file is included.
        if(this.props.mtl){
            opts['source'] = {obj: asset(this.props.asset + '.obj'), mtl:asset(this.props.asset + '.mtl')}
        } else {
            opts['source'] = {obj: asset(this.props.asset + '.obj')}
        }

      const spin = this.state.spin.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 360]
      });

      const AnimatedModel = Animated.createAnimatedComponent(Model);

        return (
          <View>    
            <AnimatedModel 
                style={{
                    transform: [
                      {translateX: this.state.slideX},
                      {translateY: this.props.y},
                      {translateZ: this.state.slideZ},
                      { scale: this.props.scale },
                      { rotateY: spin}
                  ]
                }}
                {...opts}
            />
            </View>
        );
    }
}
