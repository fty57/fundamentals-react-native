import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MyFlatList from './src/meusComponentes/MyFlatList'


export default function App() {
  return (
    <MyFlatList/>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
  },
});


