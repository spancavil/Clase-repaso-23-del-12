import React, { useEffect, useState } from 'react'
import { createContext } from "react";

export const Products = createContext();

export const ProductProvider = ({children}) => {

    const [cantidad, setCantidad] = useState (0);
    //EJEMPLO SI TUVIERAMOS CART
    // const [cart, setCart] = useState([])

    const onAdd = () => {
        setCantidad (cantidad + 1 );
    }

    useEffect(()=> {

    }, [])

    /* const addItem = (item) => {

        //NO IGUALAR ARRAYS
        const copiaCartMala = cart;

        //SI
        const copiaCart = [...cart];

        //NO
        setCart(cart.push(item))

        //SI
        setCart([...cart, item])

        const objetoCarrito = {
            id: 26261,
            desc: "Una bonita descripcion",
            photo: "./un/path/ficticio"
        }

        setCart([...cart, objetoCarrito])
    } */

    return (
        <Products.Provider value = {{
            onAdd, cantidad
        }}>
            {children}
        </Products.Provider>
    )
}
