import React from "react"
import {Text, FlatList} from "react-native"
import styles from "../components/estilo"

import produtos from "./produtos"

export default props =>{
     const produtoRender = ({item: p}) =>{
          return <Text style={styles.txtG}>{p.id} - R${p.preco}</Text>
     }
     return(
          <>
               <Text style={styles.txtG}>Lista de Produtos V2</Text>
               <FlatList>
                    data ={produtos}
                    keyExtractor = {i=> `${i.id}`}
                    renderItem={produtoRender}
               </FlatList>
          </>
     )
}

// A função map, transforma os elementos de um array em outro array modificado
// Transformar o objeto produto em um JSX
// React gosta de pedir chaves - Atributo key 