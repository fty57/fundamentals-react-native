import React, { useState } from "react"
import { Text, Button } from "react-native"
import Estilo from "./estilo"

export default props => {
     const [numero, setNumero] = useState(props.inicial)

     const inc =() =>{
          setNumero(numero + props.passo)
     }
     const dec =() => setNumero(numero - props.passo)

     return(
          <React.Fragment>
               <Text style={Estilo.txtG}>{numero}</Text>
               <Button title="+" onPress={inc}/>
               <Button title="-" onPress={dec}/>
          </React.Fragment>
     )
}

// useState é um tipo de root
// É uma função que recebe um array que tem 2 elementos
// useState ele recebe um valor inicial e retorna o próprio valor inicial e a função que será responsável por alterar o valor, usar como leitura e usar como função, e ele sabe como modificar a interface
