import React from 'react';
import { Text } from 'react-native';
import styles from './estilo'
import If from "./If"

export default props  => {
     const usuario = props.usuario || {}
     return(
          <>
               <If teste={usuario && usuario.nome && usuario.email}>
                    <Text style={styles.txtG}>Usuário Logado:</Text>
                    <Text style={styles.txtG}>{usuario.nome} - {usuario.email}</Text>
               </If>
               
          </>
          
     )
}

// Se o o usuário estiver nulo, atribua um objeto vazio. Para evitar futuros problemas.
// null === null && !null === true && !!null === false