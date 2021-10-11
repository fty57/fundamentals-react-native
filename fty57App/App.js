import React from 'react';
import { View, StyleSheet } from 'react-native';

import Contador from "./src/components/Contador"
//import Botao from './src/components/Botao'
//import Titulo from "./src/components/Titulo"
//import Aleatorio from "./src/components/Aleatorio";
//import MinMax from "./src/components/MinMax"
//import CompPadrao, { Comp1, Comp2} from "./src/components/Multi.js"
//import Primeiro from "./src/components/Primeiro"



export default function App() {
  return (
    <View style={style.App}>
      <Contador inicial={100} passo={13}/>
      {/* 
      <Botao/>
      <Titulo principal="Cadastro de Produto" secundario = "Tela de Cadastro do Produto"/>
      <Aleatorio min={1} max={60}/>
      <MinMax min={3} max ={20}/>
      <MinMax min={2} max ={85}/> 
      <CompPadrao/>
      <Comp1/>
      <Comp2/>
      <Primeiro/>  */}
    </View> 
  )
}


const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems : "center",
    padding: 20
  },
})
 
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