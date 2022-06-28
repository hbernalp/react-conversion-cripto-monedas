import styled from '@emotion/styled'

const Result = styled.div`
    color:#fff;
    font-family: 'Lato', sans-serif;
    display:flex;
    align-items: start;
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
font-size: 28px;
    span{
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    margin-top: 15px;
    width: 80px;
    height: 80px;
    padding: 20px;

`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Result>     
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="Imagen de la Cripto" 
        />

        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>El Precio mas Alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El Precio mas Bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Result>
  );
}

export default Resultado;
