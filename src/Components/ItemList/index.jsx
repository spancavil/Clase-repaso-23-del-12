import React from 'react'
import { Item } from '../Item'

export const ItemList = ({products}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            {products.map( (item)=> {
                return <Item title={item.title} image={item.image} price = {item.price}/>
            } )}
        </div>
    )
}
