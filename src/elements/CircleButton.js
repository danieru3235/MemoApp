import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.Button, style, { backgroundColor: bgColor }]}>
        <View>
          <Text style={[styles.ButtonTitle, { color: textColor }]}>
            {this.props.children}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, hight: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },

  ButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
  },

});

export default CircleButton;
