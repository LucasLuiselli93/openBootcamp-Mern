import React from 'react'

const Cotizacion = ({resultado}) => {
    if (Object.keys(resultado).length ===0) return null
    return (
        <div>
            <p>El precio es: <span>{resultado.PRICE}</span> </p>
        </div>
    )
}

export default Cotizacion
