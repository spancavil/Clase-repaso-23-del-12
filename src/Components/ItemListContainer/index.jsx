import React, { useEffect, useState } from 'react'
import { getItems, getItemsAsync } from '../../Services/getItems'
import { ItemList } from '../ItemList'

export const ItemListContainer = () => {

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
                products.length === 0 ?
                <h1> Loading ... </h1>
                :
                <ItemList products = {products}/>
            }
        </>
    )
}
