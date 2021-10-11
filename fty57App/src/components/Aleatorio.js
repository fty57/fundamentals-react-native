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
