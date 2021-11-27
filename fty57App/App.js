import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context'
import Routes from './src/stack/Routes'

// Você mata sua aplicação antes de instalar as dependências sempre
export default function App() {
  return (
    <SafeAreaProvider>
      <Routes/>
    </SafeAreaProvider>
  )
}



