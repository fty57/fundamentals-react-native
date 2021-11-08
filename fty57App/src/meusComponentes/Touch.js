import React, { useState } from 'react'
import { TouchableHighlight, View, StyleSheet, Text } from 'react-native'


export default props => {
     const [count, setCount] = useState(0);
     const onPress = () => setCount(count + 1);

     return (
          <View style={styles.container}>
               <TouchableHighlight onPress={onPress} underlayColor='red'>
                    <View style={styles.button}>
                         <Text>RED</Text>
                    </View>
               </TouchableHighlight>
               <TouchableHighlight  onPress={onPress} underlayColor='green'>
                    <View style={styles.button}>
                         <Text>GREEN</Text>
                    </View>
               </TouchableHighlight>
               <TouchableHighlight  onPress={onPress} underlayColor='blue'>
                    <View style={styles.button}>
                         <Text>BLUE</Text>
                    </View>
               </TouchableHighlight>
          </View>
     );
}


const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 10
     },
     button: {
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10
     },
     countContainer: {
          alignItems: "center",
          padding: 10
     },
     countText: {
          color: "#FF00FF"
     }
});

// Ao pressionar o botão o underlayColor chamado, responsável pela cor da camada de toque
// Se você não tiver a função onPress o botão não passa de uma caixa cinza