import React from "react"
import {Button} from "react-native"

export default props => {
     function executar() {
          console.warn("Exec!!!")
     }
     return(
          <>
               <Button
                    title="Executar #01!"
                    onPress = {executar}
               />

               <Button 
                    title="Executar #02!"
                    onPress={function() { 
                         console.warn("Exec #02!!!")
                    }}
               />

               <Button 
                    title="Executar #03!"
                    onPress={() => console.warn("Exec #03!!!")}
               />

          </>

     )
}
// Dentro de uma função, você pode criar uma outra função
// executar() - No momento em que o código for lido, ele imprime o seu contéudo
// executar - No momento que o usuário clicar no botão, ele imprime o seu contéudo
// Você pode retornar uma função, a referencia de uma função, não ela propriamente