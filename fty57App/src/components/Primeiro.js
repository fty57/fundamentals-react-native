import React from "react"
import { Text } from "react-native"
import Estilo from "./estilo"

export default () => {
     console.warn("Opa!")
     return(
          <Text style={Estilo.txtG}>Primeiro!</Text>
     )
}

// console.warn utiliza-se para entender como passar parâmetros para um componente