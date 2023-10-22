import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from './item';

const List = ({ data, selectedItemId, toggleStrongAndB, deleteLi, redOver, readdt }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Item
            item={item}
            isSelected={item.id === selectedItemId}
            toggleStrongAndB={() => toggleStrongAndB(item.id)}
            deleteLi={deleteLi}
            redOver={redOver}
            readdt={readdt}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
});

export default List;