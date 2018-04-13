import React, {Component} from 'react';
import PickleRick from './components/PickleRick';
import ButtonBlock from './components/ButtonBlock';
import FixedText from './components/FixedText';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box, Model, VrButton, Scene
} from 'react-vr';


class testVR extends Component {

  constructor() {
    super();
    this.state = { objects: [], i: 0};
}


  render() {

    let count = "# of objects: " + this.state.objects.length;

    return (
      <View >
        <Scene>
        <Pano source={asset('space.jpg')}/>
        <ButtonBlock onClick={() => this.generateObject()} color={'#16ae16'} message={'Add Object'} position={[-0.5, 0.85, -3]}/>
        <ButtonBlock onClick={() => this.clearObjects()} color={'#FF0000'} message={'Clear'} position={[0.5, 1, -3]}/>
        <FixedText message={count}/>
        {this.state.objects}
        </Scene>
      </View>
    );
  }

  clearObjects(){
    var newState = this.state; 
    newState.objects = [];
    this.setState(newState);
  }

  generateObject(){
    var newState = this.state; 
    newState.objects.push(
      // react needs unique key value in array to id objects for optimalisation
      <View key={this.state.i}>
        <PickleRick key={this.state.i} depth={this.generateRandomNumber(5,20)} height={this.generateRandomNumber(-7,7)}/> 
      </View>
    );
    newState.i = this.state.i + 1;
    this.setState(newState); 
  }

  generateRandomNumber(min, max){
    return rand = min + Math.random() * (max - min);
  }


}

AppRegistry.registerComponent('testVR', () => testVR);
