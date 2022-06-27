import { useState } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import CriptoImagen from './img/imagen-criptos.png'



function App() {
   
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
      <Imagen 
      src={CriptoImagen}
      alt='Imagen de las monedas' 
      />

      <div>
        <Heading>Monedas de Cambio al Instante, <br></br> incluye Criptomonedas</Heading>
        
        {/* Se hace el llamado del componente Formulario */}
        <Formulario />

      </div>

    </Contenedor>
    
    

  )
}

export default App
