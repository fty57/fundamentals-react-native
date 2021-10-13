import React, { useState} from "react"
import { Text } from "react-native"
import Estilo from "../components/estilo"


import ContadorDisplay from "./ContadorDisplay"
import ContadorBotoes from "./ContadorBotoes"


export default props => {
     const [num, setNum] = useState(0);

     const inc = () => {
          setNum(num + 1)
     }

     const dec = () => {
          setNum(num - 1)
     }

     return(
          <>
               <Text style={Estilo.txtG}>Contador</Text>
               <ContadorDisplay num={num}/> 
               <ContadorBotoes inc={inc} dec={dec}/>
          </>
     )
}

// <ContadorDisplay num={num}/> - Direta = Passando o dado do Pai pro Filho
// <ContadorBotoes inc={inc} dec={dec}/> - Indireta = Passando funções pro componente Filho, pra quando acontecer um evento você notificar o Pai
// Redux ajuda no gerênciamento de estados