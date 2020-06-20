import React from "react";
import ProtoTypes from "prop-types";

const Citas = ({ cita, eliminarCita }) => {
  const { mascota, dueño, fecha, hora, sintomas, id } = cita;

  return (
    <div className="cita">
      <p>
        mascota: <span> {mascota}</span>
      </p>
      <p>
        dueño: <span> {dueño}</span>
      </p>
      <p>
        fecha: <span> {fecha}</span>
      </p>
      <p>
        hora: <span> {hora}</span>
      </p>
      <p>
        sintomas: <span> {sintomas}</span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

Citas.prototype = {
  cita: ProtoTypes.object.isRequired,
  eliminarCita: ProtoTypes.func.isRequired,
};

export default Citas;
