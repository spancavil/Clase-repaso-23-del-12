import React, { useContext } from 'react'
import { Products } from '../../Context/ProductProvider'

export const Item = ({title, image, price}) => {

    const {cantidad, onAdd} = useContext(Products)

    return (
        <div style={{
            width: "20vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
        }}>
            <h4>{title}</h4>
            <img src={image} alt="imagen producto" style={{width: "90%"}}></img>
            <h4>{price}</h4>
            <h5>{cantidad}</h5>
            <button onClick={onAdd}> Agregar uno a cantidad</button>
        </div>
    )
}
