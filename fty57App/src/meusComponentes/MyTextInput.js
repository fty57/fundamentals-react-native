import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

export default MyTextInput => {
     const [text, setText] = useState('');

     return (
          <View>
               <TextInput
                    style={styles.input}
                    placeholder='Escreve alguma coisa aqui'
                    onChangeText={text => setText(text)}
                    defaultValue={text}
               />
               <Text style={{ padding: 10, fontSize: 42 }}>
                    {text.split(' ').map((word) => word && '🍕').join(' ')}
               </Text>
          </View>
     )
}

const styles = StyleSheet.create({
     input: {
          height: 40,
          padding: 10,
          borderWidth: 1,
     }
})