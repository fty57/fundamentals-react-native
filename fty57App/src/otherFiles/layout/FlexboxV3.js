import React from "react"
import { View, StyleSheet } from "react-native"
import Quadrado from "./Quadrado"

export default props => {
     return (
          <View style={style.FlexV3}>
               <Quadrado cor="#ff801a" lado={20}/>
               <Quadrado cor="#50d1f6" lado={30}/>
               <Quadrado cor="#dd22c1" lado={40}/>
               <Quadrado cor="#8312ed" lado={50}/>
               <Quadrado cor="#36c9a7" lado={60}/>
          </View>
     )
}

const style = StyleSheet.create({
     FlexV3: {
          flexDirection: 'row',
          justifyContent: "space-evenly",
          alignItems: "baseline",
          height: 350,
          width: "100%",
          backgroundColor: "#000"
     }
})

// Usando o flexDirection: "row", você troca
// o justifyContent cuida do eixo principal, cuidando agora da linha
// e o alignItems cuida do eixo cross, cuidando agora da coluna
// baseline != flex-start