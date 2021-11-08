import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import MyButtons from './src/meusComponentes/MyButtons';


export default function App() {
  return (
    <SafeAreaView style={styles.center}>
      <MyButtons/>
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


