import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default props => {
     return (
          <View style={{
               flexGrow: 1,
               justifyContent: "center",
               alignItems: "center",
               padding: 20,
               backgroundColor: props.corFundo || "#000" 
          }}>
               <Text style={{
                    fontSize: 50,
                    color: props.corTexto || "#FFF" 
               }}>
                    {props.children}
               </Text>
          </View>
     )

}
