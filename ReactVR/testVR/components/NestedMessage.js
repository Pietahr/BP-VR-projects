import React, { Component } from 'react';
import { Animated, Model, Text, asset, View, VrButton } from 'react-vr';

export default class NestedMessage extends Component {
    constructor() {
        super();
        this.state = { message: "Pieter is cool", showMessage: true };
        {/*
        setTimeout(() => {
            this.setState({ message: "Hello Updated Message" });
          }, 5000);
        */}
    }
    
    componentDidMount() {
        this.setState({ showMessage: true });
    }
    
    handleClick() {
        this.setState({ message: "You can only press this VrButton once" });
    }

    render() {
        const showMessage = this.state.showMessage;
        return (
            <View>
                { showMessage ? (
                    <VrButton onClick={this.handleClick.bind(this)}>
                        <Text
                            style={{
                                backgroundColor: '#777879',
                                fontSize: 0.8,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                transform: [{ translate: [0, 2, -5] }],
                            }}>
                            {this.state.message}
                        </Text>
                    </VrButton>
                ) : (
                <Text></Text>
                )}
            </View>
        );
    }
};