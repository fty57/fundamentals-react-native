import React from 'react'
import {Text} from 'react-native'
import Estilo from "../../components/estilo"

export default props =>{
    return (
         <>
              <Text style={Estilo.txtG}>{props.a}</Text>
              <Text style={Estilo.txtG}>{props.b}</Text>
         </>
         
    )
}

// Quando for ter reuso, é interessante usar essa prática
// Um componente muito grande, é mais interessante em quebrar em pequenas partes
