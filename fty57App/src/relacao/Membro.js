import React from "react"
import { Text } from "react-native"
import style from "../components/estilo"

export default props => {
     return (
          <Text style={style.txtG}>
               {props.nome} {props.sobrenome}
          </Text>
     )
}
