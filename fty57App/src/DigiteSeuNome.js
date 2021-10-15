import React, { useState } from "react"
import {View, TextInput, Text} from "react-native"


export default props => {
     const [nome, setNome] = useState("Teste")
     return(
          <View>
               <Text>{nome}</Text>
               <TextInput
                    placeholder="Digite seu Nome"
                    value = {nome}
                    onChangeText={nome =>setNome(nome)}
               />
          </View>
          )
}

// Você não consegue, a partir da interface gráfica mudar o estado do seu componente
// Você altera o estado do seu componente, e a interface vai refletir essa alteração
// Ordem: Você chama a função para alterar o nome, na qual ela muda o estado - useState()
// Em seguida, a interface reflete o seu novo valor recebido
// O componente está amarrado ao estado - Vincula um TextInput a um valor
// No react não pode usar a interface para modificar o estado