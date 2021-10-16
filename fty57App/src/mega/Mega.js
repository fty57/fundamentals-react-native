import React, { Component } from "react"
import { Text, TextInput } from "react-native"
import style from "../components/estilo"

export default class Mega extends Component {

     state = {
          qtdeNumeros: this.props.qtdeNumeros 
     }

     alterarQtdeNumero(qtde){
          this.setState({qtdeNumeros})
     }

     render() {
          return (
               <>
                    <Text style={style.txtG}>
                         Gerador de Mega-Sena {this.state.qtdeNumeros}
                    </Text>
                    <TextInput
                         placeholder="Qtd de Números"
                         value = {this.state.qtdeNumeros}
                         onChangeText={this.alterarQtdeNumero}
                    />
               </>
          )
     }
}

// render() - Função responsável por renderizar o seu componente na tela
// Nesse conceito de classe, você utiliza o "this"
// Classe é uma forma diferente de definir uma função
// Sempre que for alterar o estado do componente use o setState