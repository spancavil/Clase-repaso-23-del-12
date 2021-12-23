import React from 'react';

//Destructuring de objetos
export const Lista = ({paisesRecibidos, valorAleatorio}) => {

    console.log(paisesRecibidos, valorAleatorio);

    const paisesModificados = [...paisesRecibidos, {pais: "Peru", capital: "Lima"}]

    return (
        <ul>
            {paisesModificados.map( ({pais, capital}) => {
                return <li key={pais}> Pais: {pais}, capital: {capital}</li>
            })}
        </ul>
    )
}

