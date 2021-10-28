import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import Stack from "./src/navegacao/Stack"

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaView>
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
// Eu criei uma constante no JavaScript, então preciso chamar ela lá dentro de um par de chaves
// justifyContent = Centraliza com base no eixo vertical - eixo principal
// alignItems = Centraliza com base no eixo horizontal - eixo cruzado
// Alt + DownArrow = Adiciona o código a zona de comentário abaixo