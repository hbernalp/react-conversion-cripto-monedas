import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label `
    color: #ffff;
    display: block;
    font-family: 'lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding:12px;
    border-radius: 11px;
    margin-bottom: 20px;


`

const useSelectMonedas = (label, opciones) => {

    //Consumiendo el State
    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
            //Agregando los props al select
            value={state}
            onChange={ e => setState( e.target.value)} //Leer el state
            
            >
                <option values="">Seleccione</option>

                {opciones.map( opcion =>(
                    <option
                        key={opcion.id} // id del Select statico del Formulario
                        value={opcion.id} //Es lo que se va a almacenar en el State, id seleccionado desde el formulario

                    >{opcion.nombre}</option>
                ))}

            </Select>        
        </>
    )

    return [ state, SelectMonedas]
  
}

export default useSelectMonedas;
