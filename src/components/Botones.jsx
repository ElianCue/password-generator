import React from "react";
import styled from "styled-components";

export const BotonDisminuir = ({click}) => {
  return (
    <Boton onClick={click}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
    </Boton>
  )
}


export const BotonIncrementar = ({click}) => {
  return (
    <Boton onClick={click}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
    </Boton>  
)
}


export const BotonCheck = ({seleccionado, click}) => {
    
    if(seleccionado){
        return (
        <Boton onClick={click}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>
        </Boton>
      )
    } else{
        return(
            <BotonNoSeleccionado onClick={click}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </BotonNoSeleccionado>
        )
    }
    
}



export const BotonGenerar = (password) => {
  return (
    <BtnGenerar type="submit"   onClick={() => {
        navigator.clipboard.writeText(password.password) }}>
        <p>
            Generar
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
        </svg>
    </BtnGenerar>
  )
}





const Boton =styled.button`
  width: 100%;
  background: #685BFF;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  vertical-align: top;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s ease; 

  &:hover{
    background: #866FFD;
  }
`

const BtnGenerar = styled(Boton)`
    svg{
        margin-left:10px;
        
    }
`

const BotonNoSeleccionado = styled(Boton)`
    background: #33257E;

    &:hover{
        background: #33257E;
    }
`