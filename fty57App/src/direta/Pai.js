import React from 'react'
import Filho from './Filho'

export default props =>{
     let x = 13
     let y = 100
    return (
         <>
              <Filho a={x} b={y}/>
              <Filho a={x+100} b={y+200}/>
         </>
    )
}

// Comunicação Direta, por que o componente Pai tem acesso direto ao componente Filho;
// O componente Filho, pode ser pai de um componente Neto;
// Quando você precisa passar parâmetro de um componente maior para um componente abaixo;
