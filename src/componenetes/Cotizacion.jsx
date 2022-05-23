import React from 'react'

const Cotizacion = ({resultado}) => {
    if (Object.keys(resultado).length ===0) return null
    return (
        <div className="bg-white text-center p-3 ">
            <p className="p-2">El precio actual es de: <strong>{resultado.PRICE}</strong> </p>
            <hr />
            <p>El precio mas bajo en el dia fue de: <strong>{resultado.LOWDAY}</strong> </p>
       
        </div>
    )
}

export default Cotizacion
