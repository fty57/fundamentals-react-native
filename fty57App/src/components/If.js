export default props =>{
     if(props.teste){
          return props.children;
     }else{
          return false; 
     }
}

// return false - Significa que ele não vai renderizar nada