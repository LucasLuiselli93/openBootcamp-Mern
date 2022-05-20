import React, {Fragment, useState} from 'react'
import styled from "@emotion/styled";

const Label = styled.label`
    font-family: "Arial", sans-serif;
    color: white;
    text-transform:uppercase;
    font-weight:bold;
    font-size:2rem;
    margin-top:2rem;
    display:block;
    margin-bottom:1rem
`;

const Select = styled.select`
    width:100%;
    display:block
    color: white;
    padding:1rem;
    --webkit-appearence:none;
    border-radius:10px;
    border:none;
`;

 const useCrypto = (label,stateInicial,opciones) => {
  
    //state del custom hook
    const [state,setState] = useState(stateInicial);


  
  //funcion que se imprime en pantalla
    const SelectCrypto = ()=>(
       <Fragment>
           <Label>{label}</Label>
           <Select
                onChange={ (e)=>setState(e.target.value)}
                
                value={state}
            >
            
               <option value="">-- Seleccione: --</option>
                {opciones.map(opcion=>(
                   <option key={opcion.CoinInfo.id} value={opcion.CoinInfo.Name} > {opcion.CoinInfo.FullName}  </option>
               ))} 
           </Select>
           
       </Fragment>

    )

    return[state,SelectCrypto,setState];  

}
export default useCrypto