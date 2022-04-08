import React from 'react';

const UseForm = () => {
  return (
    <>
      <h1>Formulario</h1>
      <form className="row">
        <div className="col-md-3">
          <input type="text" placeholder="Nombre" className="form-control" name="nombre" />
        </div>
        <div className="col-md-3">
          <input type="text" placeholder="Apellido" className="form-control" name="apellido" />
        </div>
        <filedset>
          <legend>Eres mayor de Edad</legend>
          <label htmlFor="ratioOne">
            <input type="radio" name="numero" value="1" />
            SI
          </label>
          <label htmlFor="ratioOne">
            <input type="radio" name="numero" value="2" />
            NO
          </label>
        </filedset>
        <div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button type="button" className="btn btn-primary">
            Limpiar
          </button>
        </div>
      </form>
    </>
  );
};

export default UseForm;
