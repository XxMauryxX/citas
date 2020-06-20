import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProtoTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  // Crear State de Citas:
  const [cita, setCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // Crear State para errores de validación:
  const [error, setError] = useState(false);

  // Funcion que se ejecuta cada que se escribe en un input:
  const handleChange = (e) => {
    setCita({ ...cita, [e.target.name]: e.target.value });
  };

  // Extraer los valores:
  const { mascota, dueño, fecha, hora, sintomas } = cita;

  // Cuando el usuario preciona agregar cita:
  const sumitCita = (e) => {
    e.preventDefault();

    // Validar:
    if (
      mascota.trim() === "" ||
      dueño.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Eliminar el mensaje previo:
    setError(false);

    // Asignar un ID:
    cita.id = uuidv4();

    // Crear la cita:
    crearCita(cita);

    // Reiniciar:
    setCita({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2> Crear cita </h2>
      {error ? (
        <p className="alerta-error"> Todos los campos son obligatorios </p>
      ) : null}
      <form onSubmit={sumitCita}>
        <label> Nombre mascota: </label>
        <input
          type="text"
          name="mascota"
          placeholder="Nombre mascota"
          className="u-full-width"
          onChange={handleChange}
          value={mascota}
        />

        <label> Nombre dueño: </label>
        <input
          type="text"
          name="dueño"
          placeholder="Nombre dueño"
          className="u-full-width"
          onChange={handleChange}
          value={dueño}
        />

        <label> Fecha: </label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label> Hora: </label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label> Síntomas: </label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button className="u-full-width button-primary" type="submit">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.prototype = {
  crearCita: ProtoTypes.func.isRequired,
};

export default Formulario;
