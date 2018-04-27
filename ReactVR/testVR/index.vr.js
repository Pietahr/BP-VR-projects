import React, {Component} from 'react';
import Figure from './components/Figure';
import ButtonGroup from './components/ButtonGroup';
import FixedText from './components/FixedText';
import Platform from './components/Platform';
import ButtonBar from './components/ButtonBar';
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
    AMOUNT_OF_ROUNDS = 20;

    this.state = { objects: [], i: 0, position: [0,0,0], isAutomatic: false, barColor:'white'};
    // bind methods to be able to use them in child components.
    this.addFigures = this.addFigures.bind(this);
    this.clearObjects = this.clearObjects.bind(this);
    this.setAutomatic = this.setAutomatic.bind(this);

    // test recording
    // this.addFigures('pickle_rick','2.jpg',0.01, false,30);
}

  // trump: 1270 faces
  // goku: 3535 faces
  // storm trooper: 6518 faces
  // deer: 38945 faces
  // pickle rick: 71902 faces
  // models from https://clara.io/library, https://free3d.com/
  
  render() {
    let count = "# of objects: " + this.state.objects.length;

    return (
      <Scene 
        style={{
          transform: [
            {translate: this.state.position}
          ]
        }}>
        <View >
          <Pano source={asset('space.jpg')}/>
          <ButtonBar setAutomatic={this.setAutomatic} barColor={this.state.barColor}/>
          <ButtonGroup clearObjects={this.clearObjects} addFigures={this.addFigures}/>
          <FixedText message={count}/>
          <Platform/>
          {this.state.objects}
        </View>
      </Scene>
    );
  }

  setAutomatic(){
    var newState = this.state;

    if(this.state.isAutomatic){
      newState.barColor = 'white';
    } else {
      newState.barColor = 'green';
    }
    newState.isAutomatic = !this.state.isAutomatic;
    console.log(newState.isAutomatic);
    this.setState(newState);
  }

  clearObjects(){
    var newState = this.state; 
    newState.objects = [];
    this.setState(newState);
  }


  addFigures(assetName, textureName, scale, hasMtlFile, nrOfTimes){

    if(!this.state.isAutomatic){  
        this.generateFigure(assetName, textureName, scale, hasMtlFile, nrOfTimes);
    } 
    else {
        for(let i = 1; i <=AMOUNT_OF_ROUNDS; i++){
          setTimeout(() => 
          {
            console.log("Round: " + i);
            this.generateFigure(assetName, textureName, scale, hasMtlFile, i)
          },(1000*i)
        );
      }
    } 
  }

  generateFigure(assetName, textureName, scale, hasMtlFile, nrOfTimes){
        let times = 1;
    var newState = this.state; 
    do {
        newState.i = this.state.i + 1;
        coZ = this.generateRandomNumber(-8,-30);
        coY = this.generateRandomNumber(-3,3);
        coX = this.generateRandomNumber(2,8);

        newState.objects.push(
            // react needs unique key value in array to id objects for optimalisation
            <View key={this.state.i}>
              <Figure key={this.state.i} 
                          z={coZ} 
                          y={coY} 
                          x={coX} 
                          asset={assetName}
                          texture={textureName}
                          scale={scale}
                          mtl={hasMtlFile}/> 
            </View>
          );
          // console.log("position= [x: " + coX + " y: " + coY + "z: " + coZ + "]");
          times = times +1;
    } while(times <= nrOfTimes);
      this.setState(newState); 
  }

  generateRandomNumber(min, max){
    return rand = min + Math.random() * (max - min);
  }


}

AppRegistry.registerComponent('testVR', () => testVR);
