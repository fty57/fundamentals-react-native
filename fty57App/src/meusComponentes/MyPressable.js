import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default props => {
     const [count, setCount] = useState(0);
     const onPress = () => setCount(count + 1);

     return (
          <Pressable onPress={onPress}>
               <Text>I'm pressable!</Text>
               {console.warn(count)}
          </Pressable>
          
     )
}