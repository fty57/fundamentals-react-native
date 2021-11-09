import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CryptoHeader from './src/nftComponents/CryptoHeader';


export default function App() {
  return (
    <SafeAreaProvider>
      <CryptoHeader/>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
  },
});


