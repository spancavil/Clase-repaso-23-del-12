import React, { useContext, useEffect, useState } from 'react'
import { Products } from '../../Context/ProductProvider'
import { getItems, getItemsAsync } from '../../Services/getItems'
import { ItemList } from '../ItemList'

export const ItemListContainer = () => {

    const {globalProducts} = useContext(Products);
    const [products, setProducts] = useState([]); 

    useEffect( ()=> {
        const fnAuxiliar = async () => {
            const productos = await getItemsAsync()
            setProducts(productos)
        }
        fnAuxiliar();
        /* console.log(getItems);

        const response = getItems().
        then(response => (response)) */

        return(()=> {
        })
    }, [])

    return (
        <>
            {
                globalProducts.length === 0 ?
                <h1> Loading ... </h1>
                :
                <ItemList products = {globalProducts}/>
            }
        </>
    )
}
