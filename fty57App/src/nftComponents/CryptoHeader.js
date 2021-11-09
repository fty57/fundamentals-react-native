import React from 'react'
import { Header } from 'react-native-elements'


export default CryptoHeader => {

     return (
          <Header
               barStyle='light-content'
               backgroundColor='#2D2E36'
               leftComponent={{ icon: 'home', color: '#fff', iconStyle: { color: '#DA18A3' } }}
               centerComponent={{ text: 'CryptoMarkeyPlace', style: { color: '#fff' } }}
               rightComponent={{ icon: 'menu', color: '#fff' }}
          />
     )
}