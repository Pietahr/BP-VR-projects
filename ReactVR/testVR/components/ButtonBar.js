import React from 'react';
import {
  Text,
  View,
  VrButton, Box
} from 'react-vr';

class ButtonBar extends React.Component {
    render() {
        return (
            <VrButton onClick={this.props.setAutomatic} style={{   transform: [{translate: [0, 1.6, -2.7]}]}}>
                <Box
                    dimWidth={3}
                    dimDepth={0.3}
                    dimHeight={0.3}
                    style={{ 
                        color:this.props.barColor, 
                        opacity:0.4,
                        layoutOrigin:[0.5,0.5]
                        }}>
                </Box>
                <Text 
                    style={{ 
                        fontSize: 0.1, 
                        layoutOrigin:[0.5,0.5], 
                        textAlign:"center", 
                        color: 'white', 
                        transform: [{translate: [0, -0.05, 0.25]}]
                    }}>
                    Click and select a figure to start spawning objects automatically
                </Text>
            </VrButton>
        )
    }
}

module.exports = ButtonBar;