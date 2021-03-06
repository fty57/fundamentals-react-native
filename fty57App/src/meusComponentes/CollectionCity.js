import React, { useState } from 'react'
import { Button, Text, View, StyleSheet } from "react-native"

export default props => {

     const [forCount, setForCount] = useState(0)
     const [qxdCount, setQxdCount] = useState(0)
     const [limCount, setLimCount] = useState(0)
     const [juaCount, setJuaCount] = useState(0)
     
     // Que coisa chata :/
     
     return (
          <View>
               
               <Button
                    onPress={() => {return setForCount(forCount + 1)}}
                    title="Fortaleza"
                    color="#E1810E"
               />

               <Button
                    onPress={() => {return setQxdCount(qxdCount + 1)}}
                    title="Quixadá"
                    color="#E020C3"
               />

               <Button
                    onPress={() => {return setLimCount(limCount + 1)}}
                    title="Limoeiro"
                    color="#2F3EE0"
               />

               <Button
                    onPress={() => {return setJuaCount(juaCount + 1)}}
                    title="Juazeiro"
                    color="#2DE055"
               />

               <View style={styles.output}>
                    <Text style={styles.txtG}>
                         Fortaleza: {forCount}
                    </Text>

                    <Text style={styles.txtG}>
                         Quixadá: {qxdCount}
                    </Text>

                    <Text style={styles.txtG}>
                         Limoeiro do Norte: {limCount}
                    </Text>

                    <Text style={styles.txtG}>
                         Juazeiro: {juaCount}
                    </Text>
               </View>

               <View style={styles.output}>
                    <Text style={styles.txtG}>MAIS VOTADA(s): {auxMax}</Text>
                    <Text style={styles.txtG}>MENOS VOTADA(s): {auxMin}</Text>
               </View>

               <Button
                    title="Teste"
                    onPress={() => console.warn(compareFor())}
               />   

               {console.warn(auxMax, auxMin)}
               
          </View>

     )     
     
}


const styles = StyleSheet.create({
     output : {
          borderWidth: 5,
          backgroundColor: "gray"
     },
     txtG : {
          color : "#FFF"
     }
})
