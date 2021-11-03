import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Collections from './src/meusComponentes/CollectionCity'

export default function App() {
  return (
    <SafeAreaView style={styles.center}>
      <Collections
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


