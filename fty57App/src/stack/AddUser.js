import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';

import firebase from '../firebase/firebase-config'

export default AddUser = () => {
     const initialState = { name: '', email: '', phone: '' }
     const [state, setState] = useState(initialState)

     /*const addNewUser = () => {
          // Essa é a função que vai ser utilizada para comunicar com o firebase
          console.log(state);
     }*/

     // Toda vez que você usa um async você precisa de um await
     // Espere minha aplicação concluir para você ir adiante

     const addNewUser = async () => {
          try{
               await firebase.db
               .collection('users')
               .add({
                    name: state.name,
                    email: state.email,
                    phone: state.phone
               })
               console.log('OK')
               // Navegaria para a listagem de usuários
          }catch(error){
               console.log(error);
          }
     }

     const handleChangeText = (value, string) => {
          setState({...state, [string] : value})
          // Você já alimentou o state com tudo que tinha antes.
          // Você alimenta uma unidade a mais
          // Agora que você adicionou cochetes no string, ele torna-se uma propriedade.
     }

     return (
          <ScrollView style={styles.container}>
               <View style={styles.input}>
                    <TextInput
                         placeholder='Name'
                         value={state.name}
                         onChangeText={(value) => handleChangeText(value, 'name')}
                    />
               </View>

               <View style={styles.input}>
                    <TextInput
                         placeholder='Email'
                         value={state.email}
                         onChangeText={(value) => handleChangeText(value, 'email')}
                    />
               </View>

               <View style={styles.input}>
                    <TextInput
                         placeholder='Phone'
                         value={state.phone}
                         onChangeText={(value) => handleChangeText(value, 'phone')}
                    />
               </View>

               <View>
                    <Button
                         title='Add User'
                         onPress={() => addNewUser}
                    />
               </View>
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          padding: 35
     },
     input: {
          flex: 1,
          padding: 0,
          top: 0,
          marginBottom: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#CCC'
     },
})