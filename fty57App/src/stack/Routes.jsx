import Home from './Home'
import About from './About'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigation } from '@react-navigation/stack-navigation'

const Stack = createStackNavigation()

export default function Routes(){
     return(
          <NavigationContainer>
               <Stack.Navigator
                    initialRouteName='About'
               >
                    <Stack.Screen
                         name='Home'
                         component={Home}
                         options={{title:'Tela Inicial'}}
                    />
                    <Stack.Screen
                         name='About'
                         component={About}
                         options={{title:'Sobre'}}
                    />
               </Stack.Navigator>
          </NavigationContainer>
     )
}