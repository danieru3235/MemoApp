import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.Button}>
        <View>
          <Text style={styles.ButtonTitle}>
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
    backgroundColor: '#E31676',
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
    color: '#fff',
  },

});

export default CircleButton;
