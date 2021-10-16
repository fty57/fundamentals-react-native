import React, { Component } from "react"
import { Text } from "react-native"
import style from "../components/estilo"

export default class Mega extends Component {

     render() {
          return (
               <Text style={style.txtG}>
                    Gerador de Mega-Sena {this.props.qtdeNumeros}
               </Text>
          )
     }
}

// render() - Função responsável por renderizar o seu componente na tela
// Nesse conceito de classe, você utiliza o "this"
// Classe é uma forma diferente de definir uma função