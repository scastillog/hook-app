import React, { useState, useRef, useEffect } from 'react';
// el useNavigate se utiliza para redireccionar a otro componente. maneja la navegación.
import { useNavigate } from 'react-router-dom';
import './UseForm.css';

const UseForm = () => {
  // guardamos la referencia con inputRef para poder dar foco en el input.
  const inputRef = useRef();
  // guardamos en el estado los datos del formulario.
  const [state, setState] = useState({
    nombre: '',
    apellido: '',
    programador: false,
    lenguaje: ''
  });
  // manejamos los cambios de los inputs.
  const handleOnChange = (event) => {
    setState((preState) => ({
      ...preState,
      [event.target.name]: event.target.value
    }));
  };
  // damos foco en el input al cargar:
  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, []);
  // al no tener nada en el array de dependencias solo se ejecutará en el montaje.// ejemplo de mostrar en consola cambios del estado.
  useEffect(() => {
    console.log(state.nombre);
    console.log(state.apellido);
  }, [state]);

  // controlamos los radio buttons
  const handleRadioCheck = (event) => {
    setState((preState) => ({
      ...preState,
      programador: event.target.value === 'si'
    }));
  };

  // controlamos el select
  const handleSelect = (event) => {
    setState((preState) => ({
      ...preState,
      lenguaje: event.target.value
    }));
  };
  // hook para manipular la navegación.
  const history = useNavigate();
  // al pulsar el botón 'cancelar' direccionamos a la home.
  const moveButton = () => {
    history('/');
  };
  return (
    <>
      <h1>Formulario</h1>
      <form className="row">
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            name="nombre"
            ref={inputRef}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Apellido"
            className="form-control"
            name="apellido"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3">
          <filedset>
            <legend>Eres desarrollador de software</legend>
            <label htmlFor="ratioNo">
              <input type="radio" name="developer" value="no" onChange={handleRadioCheck} id="ratioNo" />
              NO
            </label>
            <label htmlFor="ratioSi">
              <input type="radio" name="developer" value="si" onChange={handleRadioCheck} id="ratioSi" />
              SI
            </label>
          </filedset>
        </div>
        {state.programador && (
          <div className="col-md-3">
            <label htmlFor="lenguaje">
              Seleccione el lenguaje en el cual programas:
              <select name="lenguaje" onChange={handleSelect} className={state.lenguaje === 'js' && 'errorPrueba'}>
                <option selected value="">
                  seleccione su lenguaje
                </option>
                <option value="js">Javascript</option>
                <option value="py">python</option>
                <option value="rb">ruby</option>
              </select>
            </label>
          </div>
        )}
        <div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button type="button" className="btn btn-primary">
            Limpiar
          </button>
          <button type="button" className="btn btn-secundary" onClick={moveButton}>
            cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default UseForm;
