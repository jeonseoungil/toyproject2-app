import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = ({ item, isSelected, toggleStrongAndB, deleteLi, redOver, readdt }) => {
  const { id, text } = item;
  const [redLine, setRedLine] = useState(false);
  const [toggleEnd, setToggleEnd] = useState(false);

  const over = (id) => {
    if (item.id === id) {
      setRedLine(true);
      setToggleEnd(true);
      redOver();
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={redLine ? styles.highlighted : styles.textStyle}>{id}</Text>
      <Text style={redLine ? styles.highlighted : styles.textStyle}>{text}</Text>
      {toggleEnd ? (
        <View style={styles.endToggle}>
          <Icon name="check-circle" size={30} color="#81f712" />
        </View>
      ) : (
        <TouchableOpacity style={styles.pButton} onPress={toggleStrongAndB}>
          <Text></Text>
        </TouchableOpacity>
      )}
      {isSelected && (
        <TouchableOpacity style={styles.strongButton} onPress={() => over(id)}>
          <Icon name="check" size={15} color="#81f712" />
        </TouchableOpacity>
      )}
      {isSelected && (
        <TouchableOpacity style={styles.bButton} onPress={() => deleteLi(id)}>
          <Icon name="trash" size={15} color="#81f712" />
        </TouchableOpacity>
      )}
      {isSelected && (
        <TouchableOpacity style={styles.pencilButton} onPress={() => readdt(id)}>
          <Icon name="pencil" size={15} color="#81f712" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
    alignItems: 'center',
    marginBottom: 30,
    paddingLeft: 20,
    overflow: "visible",
  },
  highlighted: {
    textDecorationLine: 'line-through',
    color: 'red',
    paddingLeft: 20,
    fontSize: 20,
  },
  textStyle: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  pButton: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 1,
    position: "absolute",
    right: 10,
  },
  strongButton: {
    width: 25,
    height: 25,
    borderColor: '#81f712',
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: "absolute",
    right: 35,
    top: "110%",
  },
  bButton: {
    width: 25,
    height: 25,
    borderColor: '#81f712',
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: "absolute",
    right: 5,
    top: "110%",
  },
  endToggle: {
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    right: 10,
  },
  pencilButton: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: "absolute",
    right: 65,
    top: "110%",
  },
});

export default Item;