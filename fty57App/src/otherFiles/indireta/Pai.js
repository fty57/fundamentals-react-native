import React, {useState} from 'react'
import Filho from "./Filho"
import { Text } from 'react-native'
import Estilo from "../../components/estilo"



export default props =>{
     const [texto, setTexto] = useState("")
     const [num, setNum] = useState(0)

     function exibirValor(num, texto){
          setNum(num)
          setTexto(texto)
     }

    return (
         <>
         <Text style={Estilo.txtG}>
              {texto}{num}</Text>
          <Filho 
               min={1}
               max={60}
               funcao={exibirValor}
          />
          </>
    )
}

// Para mostrar um número na tela eu preciso criar um estado - useState
// Uma comunicação indireta, pode ser quando se passa uma função para o componente filho

