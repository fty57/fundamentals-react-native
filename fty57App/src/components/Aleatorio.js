import React from "react"
import { Text } from "react-native"
import Estilo from "./estilo"

export default ({min, max}) =>{
     const delta = max - min + 1;
     const aleatorio = parseInt(Math.random() * delta) + min;
     return(
          <Text style={Estilo.txtG}>  
               O valor aleatório é: {aleatorio}
          </Text>
     )
}

// Props = propriedades
// props.min ou props.max - Propriedades são somente de leitura
// Mas não é interessante você mecher nessas propriedades de leitura, crie novas variáveis

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
//npm install --save react-native-vector-icons