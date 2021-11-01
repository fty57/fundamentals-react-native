import React from "react"
import { Text } from "react-native"

export default props => {
     return (
          <>
               <Text>[Início] Membros da Família: </Text>
               {props.children}
               <Text>[Fim] Membros da Família </Text>
          </>
     )
}

// Assim você acessa os filhos que você passou dessa forma
// props.childen onde você quer que seja colocado os filhos