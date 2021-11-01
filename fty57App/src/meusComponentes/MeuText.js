import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'



export default () => {
     const [number, setNumber] = useState(0);

     return (
          <View>

               <TextInput
                    style={styles.input}
                    onChangeText={(newNumber) => {
                         return setNumber(number + newNumber);
                    }}
               />

               <Text style={styles.textShow}>{`O novo número é ${number}`}</Text>

               <Button 
                    onPress={() => {setNumber(0)}}
                    title="Limpar"
                    color="#841584"
               />
          </View>
     )
}

const styles = StyleSheet.create({
     input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
     },
     textShow : {
          fontSize: 20,
          margin: 12,
     },
});