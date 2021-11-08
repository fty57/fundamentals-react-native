import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import MyScroll from './src/meusComponentes/MyScroll';
//import MyPressable from './src/meusComponentes/MyPressable';
import Touch from './src/meusComponentes/Touch';


export default function App() {
  return (
    <MyScroll/>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
  },
});


