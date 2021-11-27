import React from 'react'
import { StyleSheet, View, Text } from "react-native"

export default props => {
     return (
          <View style={styles.container}>
               <Text style={styles.text}>Sobre</Text>
               <Text style={styles.text}>Nome: {props.route.params.nome}</Text>
               <Text style={styles.text}>Idade: {props.route.params.idade}</Text>
               <Button
                    title="Voltar"
                    onPress={() => props.navigation.goBack()}
               />
          </View>
     )

}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
     },
     text: {
          fontSize: 24,
          fontWeight: 'bold',
          fontFamily: 'Arial'
     }
})

