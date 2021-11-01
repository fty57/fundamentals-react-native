import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default ({altura,peso}) => {
     const imcValue = peso/(altura*2)
     if(!altura || !peso){
          return null
     }else{
          return(           
               <Text style={styles.txtStl}>
                    IMC: {imcValue}
               </Text>
          )
     }     
}

const styles = StyleSheet.create({
     txtStl : {
          padding : 10,
          fontSize : 20
     }
})