import React, {Component} from 'react';
import Figure from './components/Figure';
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
    this.state = { objects: [], i: 0, position: [0,0,0]};
}


  render() {

    let count = "# of objects: " + this.state.objects.length;

    return (
      <Scene style={{
        transform: [
          {translate: this.state.position}
        ]
      }}>
      <View >

        <Pano source={asset('space.jpg')}/>
        <View
        style={{
          width: 5,
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'center',
          transform: [{ translate: [0, 0.6, -3] }],
          layoutOrigin: [0.5,0.5] 
        }}>
        <ButtonBlock 
          onClick={() => this.generateFigure('trump','',1, true,1)}
          onLongClick={() => this.generateFigure('trump','',1, true,10)}
          color={'purple'} 
          message={'Trump'}
        />
        <ButtonBlock 
          onClick={() => this.generateFigure('goku','',10, true,1)} 
          onLongClick={() => this.generateFigure('goku','',10, true,10)} 
          color={'blue'} 
          message={'Goku'}/>
        <ButtonBlock 
          onClick={() => this.generateFigure('stormtrooper','stormtrooper.png',0.5, true,1)} 
          onLongClick={() => this.generateFigure('stormtrooper','stormtrooper.png',0.5, true,10)} 
          color={'green'} 
          message={'Troop'}/>
        <ButtonBlock 
          onClick={() => this.generateFigure('Deer','',1, false,1)} 
          onLongClick={() => this.generateFigure('Deer','',1, false,10)} 
          color={'yellow'} 
          message={'Deer'}/>
        <ButtonBlock 
          onClick={() => this.generateFigure('pickle_rick','2.jpg',0.01, false,1)} 
          onLongClick={() => this.generateFigure('pickle_rick','2.jpg',0.01, false,10)} 
          color={'orange'} 
          message={'Rick'}/>
        <ButtonBlock onClick={() => this.clearObjects()} color={'red'} message={'Clear'}/>
        </View>
        <FixedText message={count}/>
        {this.state.objects}

      </View>
      </Scene>
    );
  }

  clearObjects(){
    var newState = this.state; 
    newState.objects = [];
    this.setState(newState);
  }

  generateFigure(assetName, textureName, scale, hasMtlFile, nrOfTimes){
    var newState = this.state; 
    let times = 1;
    do {
    newState.objects.push(
      // react needs unique key value in array to id objects for optimalisation
      <View key={this.state.i}>
        <Figure key={this.state.i} 
                    z={this.generateRandomNumber(5,20)} 
                    y={this.generateRandomNumber(-7,7)} 
                    x={this.generateRandomNumber(4,12)} 
                    asset={assetName}
                    texture={textureName}
                    scale={scale}
                    mtl={hasMtlFile}/> 
      </View>
    );
    times = times +1;
    newState.i = this.state.i + 1;
  } while(times <= nrOfTimes);

    this.setState(newState); 
  }

  generateRandomNumber(min, max){
    return rand = min + Math.random() * (max - min);
  }


}

AppRegistry.registerComponent('testVR', () => testVR);
