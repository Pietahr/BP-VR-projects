import React,{Component} from 'react';
import {Animated, Model, asset} from 'react-vr';

export default class PickleRick extends Component {
    render() {
        return (
            <Model source={{ obj: asset('pickle_rick.obj') }}
                style={{
                    transform: [{ translate: [0, -4, -10] }, { scale: 0.02 }, { rotateZ: 90 }]
                }}
                texture={asset('2.jpg')}
            />
        );
    }
}