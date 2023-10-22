import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Input = ({ retext, data, setData, setreaddtoggleIn }) => {
  const [readdtext, setreAddText] = useState(retext.text);

  const readdTexthandle = (text) => {
    setreAddText(text);
  };

  const handleSubmit = () => {
    if (readdtext !== "") {
      const update = data.map(item => {
        if (item.id === retext.id) {
          return { ...item, text: readdtext };
        } else {
          return item;
        }
      });

      setData(update);
      setreaddtoggleIn(false);
      setreAddText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={readdtext}
        onChangeText={readdTexthandle}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>확인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    paddingTop: 80,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'darkorange',
    borderRadius: 30,
    height: 40,
    paddingLeft: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'orange',
    width: 90,
    height: 35,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    right: 3,
    top: "205%"
  },
});

export default Input;