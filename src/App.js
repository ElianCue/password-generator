import React, { useState, useEffect } from 'react';
import './App.css';
import ImageLogo from './img/logo.png'
import styled from 'styled-components';
import { BotonIncrementar, BotonDisminuir, BotonCheck, BotonGenerar} from './components/Botones';
import generarPassword from './funciones/password';

function App() {

  const [configuracion, cambiarConfiguracion] = useState({
    numeroDeCaracteres : 7,
    simbolos: true,
    numeros: true,
    mayusculas: true
  });

  const [passwordGenerado, cambiarPasswordGenerado] = useState('');

  useEffect(() => {
		cambiarPasswordGenerado(generarPassword(configuracion));
	}, [configuracion]);

  const incrementarNumeroCaracteres = () =>{
    cambiarConfiguracion((configuracionAnterior)=>{
      const nuevaConfiguracion = {...configuracionAnterior};

      nuevaConfiguracion.numeroDeCaracteres += 1;

      return nuevaConfiguracion
    });
  }

  const disminuirNumeroCaracteres = () =>{

    if (configuracion.numeroDeCaracteres > 1){
      cambiarConfiguracion((configuracionAnterior)=>{
        const nuevaConfiguracion = {...configuracionAnterior};
  
        nuevaConfiguracion.numeroDeCaracteres -= 1;
  
        return nuevaConfiguracion
      });
    }

  }

  const toggleSimbolos = () =>{
    cambiarConfiguracion((configuracionAnterior)=>{
      const nuevaConfiguracion = {...configuracionAnterior};

      nuevaConfiguracion.simbolos =!nuevaConfiguracion.simbolos;

      return nuevaConfiguracion

    })
  }
  const toggleNumeros = () =>{
    cambiarConfiguracion((configuracionAnterior)=>{
      const nuevaConfiguracion = {...configuracionAnterior};

      nuevaConfiguracion.numeros =!nuevaConfiguracion.numeros;

      return nuevaConfiguracion

    })
  }
  const toggleMayusculas = () =>{
    cambiarConfiguracion((configuracionAnterior)=>{
      const nuevaConfiguracion = {...configuracionAnterior};

      nuevaConfiguracion.mayusculas =!nuevaConfiguracion.mayusculas;

      return nuevaConfiguracion

    })
  }


  
  const onSubmit = (e) =>{
    e.preventDefault();
    cambiarPasswordGenerado(generarPassword(configuracion));
  }



  return (
    <div className="container">
      <Logo>
        <img src={ImageLogo} alt="" />
      </Logo>

      <from onSubmit={onSubmit}>
          <Fila>
              <label>Numero de Caracteres:</label>
              <Controles>

                <BotonDisminuir click={disminuirNumeroCaracteres} />

                <span>{configuracion.numeroDeCaracteres}</span>

                <BotonIncrementar click={incrementarNumeroCaracteres} />

              </Controles>
          </Fila>

          <Fila>
            <label>¿Incluir Simbolos?</label>

            <BotonCheck seleccionado={configuracion.simbolos}  click={toggleSimbolos} />
            
          </Fila>

          <Fila>
            <label>¿Incluir Numeros?</label>

            <BotonCheck seleccionado={configuracion.numeros} click={toggleNumeros} />

          </Fila>

          <Fila>
            <label>¿Incluir Mayusculas?</label>

            <BotonCheck seleccionado={configuracion.mayusculas} click={toggleMayusculas} />

          </Fila>

          <Fila>

            <BotonGenerar password={passwordGenerado}/>
            <Input className='passwordTxt' type="text" readOnly={true} value={passwordGenerado} />

          </Fila>
      </from>
    </div>
  );
}


export default App;

const Logo = styled.div`

  img{
    width: 100%;
    vertical-align:top;
  }
`
const Fila = styled.div`
  margin-bottom: 40px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:10px
`

const Controles = styled.div`
  display:flex;
  justify-content: space-between;
  text-align: center;

  & > *{
    flex: 1;
  }

  span{
    line-height: 40px;
    background: #33257E;
    max-height:40px
  }
`

const Input = styled.input`
  width:100%
  border-radius: 4px;
  border: 1px solid rgba(255,255,255, .25);
  color: #fff;
  height:40px;
  line-height:40px;
  cursor: pointer;
  transition: all .3s ease;
  background: none;

  &:hover{
    border: 1px solid rgba(255,255,255, .50);
  }

  &::selection{
    background: #212139;
  }
`

