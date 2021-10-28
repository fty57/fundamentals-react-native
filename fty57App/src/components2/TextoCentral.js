import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default props => {
     return (
          <View style={styles.App}>
               <Text style={styles.txtG}>
                    {props.children}
               </Text>
          </View>
     )

}

const styles = StyleSheet.create({
     App: {
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#000"
     },
     txtG: {
          fontSize: 50,
          color: "#FFF"
     }
})