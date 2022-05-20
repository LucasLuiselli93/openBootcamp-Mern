import React from 'react'
import styled from "@emotion/styled";

const MensajeError = styled.p`
background-color: #b7322c;
padding:1rem;
color:white;
text-transform:uppercase;
text-align:center;
font-family:"Arial", sans-serif;
font-weight:bold;
`

const Error = ({mensaje}) => {
    return (
       <MensajeError>{mensaje}</MensajeError>
    )
}

export default Error
