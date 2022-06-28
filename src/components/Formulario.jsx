import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'


 //Creando el StyledComponent del boton
 const InputSubmit = styled.input`
 background-color: #9497ff;
 border: none;
 width: 100%;
 padding: 10px;
 color:#FFFF;
 font-weight: 700;
 text-transform: uppercase;
 font-size: 20px;
 border-radius: 5px;
 transition: background-color .3s ease;
 margin-top: 20px;

    /* creando el evento hover del boton */
    &:hover{
        background-color: #7a7dfe;
        color: #ffff;
        cursor: pointer;
    }
`

const Formulario = () => {

    //Llamando el State 
    const [criptos, setCriptos] = useState([]) //El useState escucha el stado de la informacion de la api en el setcriptos

    //Validadndo el State  para el error , revisa que los campos del formulario tengan datos
    const [error, setError] = useState(false)

   // llamando el Hook perdonalizado, pero NO del global sino del return que se necesita dede la funcion del Hook
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige el tipo de moneda a calcular', monedas)
    
  //llamando la criptomoneda desde el formulario, llegando a la API
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige la criptomoneda de Cambio', criptos) //Criptos va a tomar el dato seleccionado desde el state
    
    //Llamando la Api
    useEffect(() =>{
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD' 
            const respuesta = await fetch(url) //Espera hasta que halla cargado todo lo que llama la url
            const resultado = await respuesta.json()
            
            //Creando el arreglopara traer la informacion que se necesita desde la API
            const arrayCriptos = resultado.Data.map( cripto => {

                const objeto = {  //organizando la informacion que necesitamos desde la api
                    id: cripto.CoinInfo.Name,  
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto  //Este return va llenando el arrayCriptos
            })
            setCriptos(arrayCriptos)  //Llevando la informacion de la API al State de React
        }
        consultarAPI();

    }, [])

    //Validando los campos del formulario
    const handleSubmit = e => {
        e.preventDefault()

        if([moneda, criptomoneda].includes('')){
            setError(true)
            return
        }
        setError(false)
    }

  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form
            // validando los campos del formulario
            onSubmit = {handleSubmit}
        >

            <SelectMonedas />
            <SelectCriptomoneda />
            
            <InputSubmit type="submit" value="Cotizar" />
        </form>
    
    </>
  )
}

export default Formulario