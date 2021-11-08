import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import MyPressable from './src/meusComponentes/MyPressable';


export default function App() {
  return (
    <SafeAreaView style={styles.center}>
      <MyPressable/>
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


