import React from 'react';
import ButtonBlock from './ButtonBlock';
import {
  Text,
  View,
  VrButton, Box
} from 'react-vr';

class ButtonGroup extends React.Component {

    constructor(props){
        super(props);
    }
  render() {
    return (
          <View
          style={{
            width: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            transform: [{ translate: [0, 1.2, -3] }],
            layoutOrigin: [0.5,0.5] 
          }}>
            <ButtonBlock 
              onClick={() => this.props.addFigures('trump','',1, true,1)}
              onLongClick={() => this.props.addFigures('trump','',1, true,10)}
              color={'purple'} 
              message={'Trump'}
            />
            <ButtonBlock 
              onClick={() => this.props.addFigures('goku','',10, true,1)} 
              onLongClick={() => this.props.addFigures('goku','',10, true,10)} 
              color={'blue'} 
              message={'Goku'}/>
            <ButtonBlock 
              onClick={() => this.props.addFigures('stormtrooper','stormtrooper.png',0.5, true,1)} 
              onLongClick={() => this.props.addFigures('stormtrooper','stormtrooper.png',0.5, true,10)} 
              color={'green'} 
              message={'Troop'}/>
            <ButtonBlock 
              onClick={() => this.props.addFigures('Deer','',1, false,1)} 
              onLongClick={() => this.props.addFigures('Deer','',1, false,10)} 
              color={'yellow'} 
              message={'Deer'}/>
            <ButtonBlock 
              onClick={() => this.props.addFigures('pickle_rick','2.jpg',0.01, false,1)} 
              onLongClick={() => this.props.addFigures('pickle_rick','2.jpg',0.01, false,10)} 
              color={'orange'} 
              message={'Rick'}/>
            <ButtonBlock onClick={() => this.props.clearObjects()} color={'red'} message={'Clear'}/>
        </View>
        )
        
    }
}

module.exports = ButtonGroup;