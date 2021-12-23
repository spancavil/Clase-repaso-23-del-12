import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { db } from '../Firebase/config';
import { getDocs, collection } from 'firebase/firestore/lite';

export const Products = createContext();

export const ProductProvider = ({children}) => {


    const [cantidad, setCantidad] = useState (0);
    const [globalProducts, setGlobalProducts] = useState([])

    //EJEMPLO SI TUVIERAMOS CART
    // const [cart, setCart] = useState([])

    const onAdd = () => {
        setCantidad (cantidad + 1 );
    }

    useEffect(()=> {
        
        //FUNCION IIFE AUTOINVOCADA
        ( async()=> {
            const products = collection(db, 'products');

            const querySnapshot = await getDocs(products);

            console.log(querySnapshot);
            const aux = [];
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                aux.push({id: doc.id, ...doc.data() })
            });
            setGlobalProducts(aux);
        })()

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
            onAdd, cantidad, globalProducts
        }}>
            {children}
        </Products.Provider>
    )
}
