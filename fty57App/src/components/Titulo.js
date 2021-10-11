import React from "react"
import { Text } from "react-native"
import Estilo from "./estilo"

export default props =>{
     return (
          <React.Fragment>
               <Text style={Estilo.txtG}>
                    {props.principal}
               </Text>
               <Text>
                    {props.secundario}
               </Text>
          </React.Fragment>  
     )
}

// Não estou retornando uma View, estou retornando 2 textos mesmo
// React.Fragment - Fragment - <> </> 
// Retornar mais de um elemento em JSX, sem envolver em uma View

