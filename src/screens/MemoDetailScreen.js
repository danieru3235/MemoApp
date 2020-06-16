import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.MemoHeader}>
          <Text style={styles.MemoHeaderTitle}>講座のアイデア</Text>
          <Text style={styles.MemoHeaderDate}>2020</Text>
        </View>

        <View style={styles.MemoHeaderContent}>
          <Text>口座のアイデア</Text>
        </View>

        <CircleButton name="pencil" color="white" style={styles.editButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  MemoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },

  MemoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },

  MemoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },

  MemoHeaderContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    fontSize: 15,
    backgroundColor: '#fff',
    flex: 1,
  },

  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
