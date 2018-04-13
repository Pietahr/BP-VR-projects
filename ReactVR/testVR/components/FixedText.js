import React, { Component } from 'react';
import { Animated, Model, Text, asset, View, VrButton, VrHeadModel } from 'react-vr';

export default class FixedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hmRot: VrHeadModel.rotation()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => { this.tick() }, 50);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick() {
        this.setState({
            hmRot: VrHeadModel.rotation()
        });
    }

    handleClick() {
        this.setState({ message: "You can only press this VrButton once" });
    }

    render(){
        let {hmRot} = this.state;
        return (
          <View
            style={{
              position: 'absolute',
              layoutOrigin: [0.5, 0.5],
              transform: [
                {translate: [0, 0, 0]},
                {rotateX: hmRot[0]},
                {rotateY: hmRot[1]},
                {rotateZ: hmRot[2]}
              ]
            }}>
            <Text
              style={{
                position: 'absolute',
                layoutOrigin: [0.5, 0.5],
                color: '#FFFFFF',
                transform: [
                  {translate: [1.7, 1, -2]},
                ]
              }}>
                {this.props.message}
            </Text>
          </View>
        );
      }


}