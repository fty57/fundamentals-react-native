import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import Touch from './src/meusComponentes/Touch';


export default function App() {
  return (
    <SafeAreaView style={styles.center}>
      <Touch/>
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


