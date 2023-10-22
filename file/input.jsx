import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Input = ({ addText }) => {
  const [inputText, setInputText] = useState('');

  const handleAddText = () => {
    if (inputText !== '') {
      addText(inputText);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="오늘의 일정을 넣어 주세요"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddText}>
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
    paddingTop:80,
    position:"relative"
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
    position:"absolute",
    right:3,
    bottom:"6%",
    zIndex:99
  },
});

export default Input;
