import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default props => {
     return (
          <View style={{ flex: 1 }}>
               <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    {
                         props.voltar
                              ? <Button title="Voltar" onPress={() => props.navigation.goBack()} />
                              : false
                    }
                    {
                         props.avancar
                              ? <Button title="Avançar" onPress={() => props.navigation.navigate(
                                   props.avancar, 
                                   props.avancarParams )} />
                              : false
                    }

               </View>
               <View style={{ flex: 1 }}>
                    {props.children}
               </View>
          </View>
     )

}

// navigation.navigate não adiciona uma tela caso você clique em avançar
// navigation.push adiciona uma tela por cima da outra, caso você clique em avançar
