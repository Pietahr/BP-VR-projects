import React from 'react';
import {
  Text,
  View,
  VrButton, Box
} from 'react-vr';

class ButtonBlock extends React.Component {
  render() {
    return (
        <View 
        style={{ 
          margin: 0.25
          //transform: [{translate: this.props.position}]
          }}>
          <VrButton onClick={this.props.onClick} onLongClick={this.props.onLongClick}>
            <Box
            dimWidth={0.5}
            dimDepth={0.5}
            dimHeight={0.5}
            style={{ color:this.props.color, opacity:0.8}}>
            </Box>
            <Text style={{ fontSize: 0.1, layoutOrigin:[0.5,0.5], textAlign:"center", transform: [{translate: [0, 0, 0.25]}]}}>
              {this.props.message}
            </Text>
          </VrButton>
        </View>
    )
  }
}
module.exports = ButtonBlock;