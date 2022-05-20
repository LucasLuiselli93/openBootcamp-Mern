import React, {useState, useEffect} from "react"
import styled from "@emotion/styled";
import imagen from "./Crypto.webp"
import Formulario from "./componenetes/Formulario";
import axios from "axios";
import Cotizacion from "./componenetes/Cotizacion";


const Contenedor = styled.div`
  max-width:600px;
  margin: 0 auto;
  @media (min-width:992px) {
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem
  }

`;

const Imagen = styled.img`
max-width:100%;
margin-top:3rem;
border-radius:50%
`;

const Heading = styled.h1`
  font-family: "Arial", sans-serif;
  color:white;
  text-align:left;
  font-weight:700;
  font-size:50px;
  margin-bottom:50px;
  margin-top 80px;

  &::after{
    content:"";
    height:6px;
    background-color:#66A2FE;
    display:block
  }
`;


function App() {

  const [moneda, setMoneda] =  useState("")
  const [crypto, setCrypto] =  useState("")
  const [resultado, setResultado] = useState({})

  useEffect(() => {
  
    if(moneda === "") return
    console.log("COTIZANDOOO")

    const cotizarCrypto = async () =>{
    

     
      //const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}=tsyms${moneda}`
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`
      const resultado = await axios.get(url)
      setResultado(resultado.data.DISPLAY[crypto][moneda])
  
    }
    cotizarCrypto()
  
  }, [moneda,crypto])

  return (
    <div className="App">
      <Contenedor>
        <div>
         <Imagen
         src={imagen}
         alt="imagen crypto"
         />
        </div>
        <div>
          <Heading>Cotiza Criptomonedas </Heading>

          <Formulario
            setMoneda ={setMoneda}
            setCrypto= {setCrypto}
          
          >Calcular</Formulario>
          <Cotizacion
            resultado = {resultado}
          />
        </div>
      </Contenedor>
    </div>
  );
}

export default App;
