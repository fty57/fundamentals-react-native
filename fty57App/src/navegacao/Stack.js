import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"
import PassoStack from "../components2/PassoStack"

const Stack = createNativeStackNavigator()

export default props => {
     return (
          <Stack.Navigator initialRouteName="TelaA"
               screenOptions={{ headerShown: true }}>
               <Stack.Screen name="TelaA"
                    options={{ title: "Informações Iniciais" }}>
                    {props => (
                         <PassoStack {...props} avancar="TelaB">
                              <TelaA />
                         </PassoStack>
                    )}

               </Stack.Screen>
               <Stack.Screen name="TelaB">
                    {props => (
                         <PassoStack {...props} voltar avancar="TelaC" 
                         avancarParams={{numero: 2021}}>
                              <TelaB />
                         </PassoStack>
                    )}
               </Stack.Screen>
               <Stack.Screen name="TelaC">
                    {props => (
                         <PassoStack {...props} voltar avancar="TelaC">
                              <TelaC {...props}/>
                         </PassoStack>
                    )}
               </Stack.Screen>
          </Stack.Navigator>
     )

}

// O name é a rota, se você não personalizar ele vai usar o título