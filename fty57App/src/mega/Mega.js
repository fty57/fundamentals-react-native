import React, { Component } from "react"
import { Text, TextInput, Button, View, StyleSheet} from "react-native"
import style from "../components/estilo"

import MegaNumero from "./MegaNumero"

export default class Mega extends Component {

     state = {
          qtdeNumeros: this.props.qtdeNumeros,
          numeros : []
     }

     alterarQtdeNumero = (qtde) =>{
          this.setState({qtdeNumeros: + qtde})
     }

     gerarNumeroNaoContido = nums => {
          const novo = parseInt(Math.random() * 60) + 1
          // Esse código lhe fornece um valor aleatório entre 1 e 60
          return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
     }

     gerarNumeros = () =>{
          const numeros = Array(this.state.qtdeNumeros)
               .fill()
               .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
               .sort((a,b) => a - b)
          this.setState({numeros})
     }

     exibirNumeros = () =>{
          const nums = this.state.numeros
          return nums.map((num => {
               return <MegaNumero key= {num} num={num}/>
          }))
     }
     
/*      gerarNumeros = () =>{
          const {qtdeNumeros} = this.state
          const numeros=[]
          for(let i = 0; i<qtdeNumeros; i++) {
               numeros.push(this.gerarNumeroNaoContido(numeros))
          }

          numeros.sort((a,b) => a - b)
          this.setState({numeros})
     } */

     render() {
          return (
               <>
                    <Text style={style.txtG}>
                         Gerador de Mega-Sena {this.state.qtdeNumeros}
                    </Text>
                    
                    <TextInput
                         keyboardType={"number-pad"}
                         style={{borderBottomWidth:1}}
                         placeholder="Qtd de Números"
                         value = {`${this.state.qtdeNumeros}`}
                         onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                    />
                    <Button 
                         title="Gerar"
                         onPress={this.gerarNumeros}
                    />
                    <View style={styles.flexViewContainer}>
                         {this.exibirNumeros()}
                    </View>
                    
               </>
          )
     }
}
const styles = StyleSheet.create({
     flexViewContainer: {
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: "center"
     }
})

// render() - Função responsável por renderizar o seu componente na tela
// Nesse conceito de classe, você utiliza o "this"
// Classe é uma forma diferente de definir uma função
// Sempre que for alterar o estado do componente use o setState