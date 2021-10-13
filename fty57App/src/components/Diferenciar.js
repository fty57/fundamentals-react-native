import React from "react"
import { Text, Platform } from "react-native"
import style from "./estilo"

export default props => {
     if(Platform.OS === "android") {
          return <Text style={style.txtG}>Android</Text>     
     } else if(Platform.OS === "ios") {
          return <Text style={Estilo.txtG}>iOS</Text>
     }else{
          return <Text style={Estilo.txtG}>Eita!</Text>
     }
     
}