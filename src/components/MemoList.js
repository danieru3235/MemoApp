import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (

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


    );
  }
}

const styles = StyleSheet.create({
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
});

export default MemoList;
