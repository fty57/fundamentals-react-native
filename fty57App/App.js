import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CryptoHeader from './src/nftComponents/CryptoHeader';
import CryptoDivider from './src/nftComponents/CryptoDivider';


export default function App() {
  return (
    <SafeAreaProvider>
      <CryptoHeader/>
      <CryptoDivider/>
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


