import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import MeuText from './src/meusComponentes/MeuText';
//import IMC from './src/meusComponentes/IMC';



export default function App() {
  return (
    <SafeAreaView style={styles.center}>
      <MeuText/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
  },
});


