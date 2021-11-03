import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import CollectionsCity from './src/meusComponentes/CollectionCity'

export default function App() {
  return (
    <SafeAreaView style={styles.center}>
      <CollectionsCity/>
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


