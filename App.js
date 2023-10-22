import { StatusBar, View, Text, StyleSheet } from 'react-native';
import Main from "./file/main"

export default function App() {
  StatusBar.setBackgroundColor('skyblue'); 
  return (
    <>
      <Main />
    </>
  );
}

