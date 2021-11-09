import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyTextInput from './src/meusComponentes/MyTextInput'


export default function App() {
  return (
    <View style={styles.center}>
      <MyTextInput/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
  },
});


