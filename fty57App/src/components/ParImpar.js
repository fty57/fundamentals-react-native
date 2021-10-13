import React from "react"
import {View, Text} from "react-native"
import styles from "./estilo"

export default ({num = 0}) => {
     return(
          <View>
               <Text style={styles.txtG}>O resultado é:</Text>
               {num % 2 === 0
                    ? <Text style={styles.txtG}>Par</Text>
                    : <Text style={styles.txtG}>Ímpar</Text>}
          </View>
          
     )     
  
}

// Simples uso do operador ternário