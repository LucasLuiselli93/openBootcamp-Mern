import React, {useEffect, useState} from 'react'
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda"
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';
import Error from './Error';




const Boton = styled.input`
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color:#66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color:white;
    transition:background-color .3s ease;
    
    &:hover {
        background-color:#326AC0;
        cursor:pointer;
    }

`;




const Formulario = ( { setMoneda, setCrypto}) => {

   const [listadoCryptos, setListadoCryptos] = useState([])
   const [errorValidacion, setErrorValidacion] = useState(false)


    const MONEDAS =[
        {codigo:"USD", nombre: "Dolar de Estados Unidos"},
        {codigo:"ARS", nombre: "Peso argentino"},
        {codigo:"EUR", nombre: "EURO"},
        {codigo:"GBP", nombre: "Libra Esterlina"}
    ]

    //hook de monedas
    const [elegirMoneda,SelectMoneda,] = useMoneda("Elige tu moneda", "",MONEDAS);
    // hook de crypto
    const  [elegirCrypto,SelectCrypto] = useCrypto("Elige tu crypto", "",listadoCryptos )



    useEffect(() => {
      const consultarApi = async ()=>{
          const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
          const resultado = await axios.get(url)
          setListadoCryptos(resultado.data.Data)
          console.log(resultado)
      }
      consultarApi()

    }, [])


    const cotizarMoneda = e =>{
        e.preventDefault();

        //validar campos
        if (elegirCrypto === "" || elegirMoneda ===""){
            setErrorValidacion(true)
            return
        }
        // pasar los datos al componente principal
        setErrorValidacion(false);
        setMoneda(elegirMoneda)
        setCrypto(elegirCrypto)
    }

    return (
        <div>
            <form
                onSubmit={cotizarMoneda}
            >
                {errorValidacion ? <Error mensaje="Todos los campos son obligatorios"/> : null}
                <SelectMoneda/>
                <SelectCrypto/>
                <Boton
                    type="submit"
                    value="calcular"
                
                />
            </form>
            <h3></h3>
            <p></p>
        </div>
    )
}

export default Formulario
