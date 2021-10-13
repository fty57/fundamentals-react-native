import React from "react"
import {View ,Button, StyleSheet} from "react-native"

export default props => {
     return (
          <View style={style.Botoes}>
               <Button title="-" onPress={props.dec}/>
               <Button title="+" onPress={props.inc}/>
          </View>
     )
}


const style = StyleSheet.create({
     Botoes: {
          flexDirection: 'row',
     }
})

// Ctrl + Alt + Up Arrow or Down Arrow você pode editar mais linhas de uma vez