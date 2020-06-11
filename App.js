import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>MEMONT</Text>
          </View>
        </View>

        <View style={styles.MemoList}>
          <View style={styles.MemoListItem}>
            <Text style={styles.MemoTitle}>講座のアイテム</Text>
            <Text style={styles.MemoDate}>2020</Text>
          </View>

          <View style={styles.MemoListItem}>
            <Text style={styles.MemoTitle}>講座のアイテム</Text>
            <Text style={styles.MemoDate}>2020</Text>
          </View>

          <View style={styles.MemoListItem}>
            <Text style={styles.MemoTitle}>講座のアイテム</Text>
            <Text style={styles.MemoDate}>2020</Text>
          </View>

          <View style={styles.MemoListItem}>
            <Text style={styles.MemoTitle}>講座のアイテム</Text>
            <Text style={styles.MemoDate}>2020</Text>
          </View>

          <View style={styles.MemoListItem}>
            <Text style={styles.MemoTitle}>講座のアイテム</Text>
            <Text style={styles.MemoDate}>2020</Text>
          </View>

        </View>

        <View style={styles.MemoAddButton}>
          <Text style={styles.MemoAddButtonTitle}>+</Text>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },

  MemoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  MemoAddButtonTitle: {
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  },

  MemoList: {
    width: '100%',
    flex: 1,
  },

  MemoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },

  MemoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },

  MemoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },

  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, hight: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10,
  },

  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },

});
