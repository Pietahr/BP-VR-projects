import React, { Component } from 'react';
import {  View, Cylinder, Box } from 'react-vr';

export default class Platform extends Component {
    constructor() {
        super();
    }

    render() {
        const platformHeight = 0.3;

       return <View 
                style={{transform: [{translate: [0, 0, 0]}]
                }}
                    >
                    <Cylinder
                        radiusTop={0.4}
                        dimHeight={platformHeight}
                        segments={32}
                        style={{color:'darkgrey'}}
                    />
                    <Box
                        dimWidth={0.7}
                        dimDepth={2}
                        dimHeight={platformHeight}
                        style={{color:'darkgrey',
                                transform: [{translate: [0, 0, -1.5]}]
                        }}
                    />
               {/*}     <Cylinder
                        radiusTop={1.2}
                        dimHeight={platformHeight}
                        segments={32}
                        style={{color:'darkgrey',
                                transform: [
                                    {translate: [0, 0, -3]},
                                    {scaleX: 2}
                                ]
                }}

                    />
                                */}
      </View>
    }
}

module.exports = Platform;