import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import CriptoImagen from './img/imagen-criptos.png'



function App() {

  //Validando que tipos de monedas selecciona el usuario, utilizando el state
  const [monedas, setMonedas] = useState({}) //El use state se define como un objeto ya que va a recibir diferente informacion del formulario

  //Creamos objeto para los resultados de la consulta de la api
  const [resultado, setResultado] = useState({})

  //Creando el Spinner barra de cargando en el proyecto
  const [cargando, setCargando] = useState(false) // inicia en false para que no aparezca cargando desde que inicia la aplicación

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      //Llamando la Api para consultar la moneda a cotizar desde los datos que se ponen en el teclado
      const cotizarCripto = async () => {
        setCargando(true)

        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        
        //Hacemos Fetch para traer los datos
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        //Cuando los datos de busqueda de la api son dinamicos, las variables que tenemos definidas se colocan en la llamada de la consulta de la API
        //console.log(resultado.DISPLAY[criptomoneda][moneda]) //De esta forma busca por la variacion de los campos de la variable
        setResultado(resultado.DISPLAY[criptomoneda][moneda])

        setCargando(false)

      }
      cotizarCripto();
    }
  }, [monedas])
   
  // Creamos el componente de estilos
  // Es importnate el uso de los bactics, `` ya que estos son los que indican los estilos que va a utilizar el componente
  const Heading = styled.h1 `
    font-family: 'Lato', sans-serif;
    color: #fff;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;

    /* Creando la linea de subrayado del titulo */
    &::after {
      content: '';
      width: 200px;
      height: 3px;
      background-color: #66A2fe;
      display:block;
      margin: 10px auto 0 auto;
    }
  `

  const Contenedor = styled.div `
    max-width: 900px;
    margin: 0 auto;
    width:90%;
    @media(min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
  
  `
  const Imagen = styled.img `
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
  
  `

  return (
    <Contenedor>
      <Imagen src={CriptoImagen} alt='Imagen de las monedas' />

      <div>
        <Heading>Monedas de Cambio al Instante, <br></br> incluye Criptomonedas</Heading>
        
        {/* Se hace el llamado del componente Formulario */}
        <Formulario 
          setMonedas={setMonedas}
        />
        
        {/* mostrando el mensaje de Cargando */}
        {cargando && <Spinner />}

        {/* mostrando los resultados cuando se ha dado click en el boton de cotizar */}
        {resultado.PRICE && <Resultado resultado={resultado} />}

      </div>

    </Contenedor>
    
    

  )
}

export default App
