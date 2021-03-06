import React from 'react';
import {
  StyleSheet, View, TextInput, TouchableHighlight, Text,
} from 'react-native';

class SinupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          メンバー登録
        </Text>
        <TextInput style={styles.Input} value="Email Address" />
        <TextInput style={styles.Input} value="PassWord" />
        <TouchableHighlight style={styles.button} onPress={() => {}} underlayColor="#C70F66">
          <Text style={styles.buttontitle}>
            送信する
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
  },

  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },

  Input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 8,
  },

  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },

  buttontitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SinupScreen;
