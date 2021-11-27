import React from 'react'
import { StyleSheet, View, Text, Button } from "react-native"

export default props => {
     return (
          <View style={styles.container}>
               <Text style={styles.text}>Página HOME</Text>
               <Button
                    title="Go to about page"
                    onPress={
                         ()=> props.navigation.navigate('About', {nome:'Álisson', idade: '20'})
                    }
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

