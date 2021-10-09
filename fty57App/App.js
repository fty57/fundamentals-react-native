import React from 'react';
import { View } from 'react-native';

import CompPadrao, { Comp1, Comp2} from "./src/components/Multi.js"
import Primeiro from "./src/components/Primeiro"

export default function App() {
  return (
    <View>
      <CompPadrao/>
      <Comp1/>
      <Comp2/>
      <Primeiro/>
    </View> 
  )
}

 
// Notas:
// SafeAreaView - Permite colocar o texto e componentes dentro de uma área seguda no IOS
// Ele pega o código JSX - e vai mudá-los em componentes HTML, a partir de geração automática de código
// Se você for usar um JSX, você deve importar o react
// Existem componentes funcionais e componentes baseados em classes
// JavaScript é centrado em função
// "Tags" mais rigososas com o seu fechamento
// {/*<Primeiro/>*/} Dessa maneira você comenta um componente