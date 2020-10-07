import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import R from 'res/R';

interface ButtonProps {
    onPress: () => void
    title: string
}

export default class Default extends React.Component<ButtonProps> {
    render() {
        return (
            <>
                <TouchableHighlight style={styles.button} onPress={this.props.onPress}>
                    <Text>{this.props.title}</Text>
                </TouchableHighlight>
            </>
        );
    }
}

const styles = {
    button: {
        backgroundColor: R.colors.gold,
        padding: 15,
        borderRadius: 15
    }
};