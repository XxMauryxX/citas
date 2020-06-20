import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./Formulario/Formulario.jsx";
import Citas from "./Citas/Citas.jsx";

function App() {
  // Citas en LocalStorage:
  let citasIniciales = JSON.parse(localStorage.getItem("Citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Crear State para almacenar las citas:
  const [citas, setCitas] = useState(citasIniciales);

  // UseEffect para verificar cuando un state cambia:
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("Citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("Citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // Función para crear cita:
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  // Funcion para eliminar cita:
  const eliminarCita = (id) => {
    const delet = citas.filter((cita) => {
      return cita.id !== id;
    });
    setCitas(delet);
  };

  // Mensaje opcional:
  const mensaje = citas.length === 0 ? "No hay citas" : "Administra tu cita";

  return (
    <Fragment>
      <h1> Administrador de pacientes: </h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2> {mensaje} </h2>
            {citas.map((cita) => {
              return (
                <Citas key={cita.id} cita={cita} eliminarCita={eliminarCita} />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
