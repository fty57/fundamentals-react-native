import React from "react"
import {Text} from "react-native"
import styles from "../components/estilo"

import produtos from "./produtos"

export default props =>{
     function obterLista(){
          return produtos.map(p =>{
               return (<Text>{p.id}) {p.nome} tem o preço R$ {p.preco}</Text>)
          })
     }

     return(
          <>
               <Text style={styles.txtG}>Lista de Produtos</Text>
               {obterLista()}
          </>
     )
}

// A função map, transforma os elementos de um array em outro array modificado
// Transformar o objeto produto em um JSX
// React gosta de pedir chaves - Atributo key 