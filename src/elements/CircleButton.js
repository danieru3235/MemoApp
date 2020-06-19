import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf5ae',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwsome');

class CircleButton extends React.Component {
state = {
  fontLoaded: false,
}

async componentWillMount() {
await Font.loadAsync({
    FontAwsome: fontAwsome,
  });

  this.setState({ fontLoaded: true });
}

render() {
  const { name, style, color } = this.props;

  let bgColor = '#E31676';
  let textColor = '#fff';

  if (color === 'white') {
    bgColor = '#fff';
    textColor = '#E31676';
  }

  return (
    <View style={[styles.Button, style, { backgroundColor: bgColor }]}>
      {
          this.state.fontLoaded ? (
            <CustomIcon name={name} style={[styles.ButtonTitle, { color: textColor }]} />
          ) : null
        }
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
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 32,
  },

});

export default CircleButton;
