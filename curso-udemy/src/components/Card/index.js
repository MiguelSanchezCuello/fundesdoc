import React from "react";

export default function index(props) {
  let datos = props.datos;
  return (
    <>
      {datos.map((dato, index) => (
        <div className="flex flex-row m-5 mb-32" key={index}>
          <div className="w-2/5">
            <img src={dato.url} style={{ width: "100px" }} />
          </div>

          <div className="w-2/5">
            <h2 className="text-2xl font-semibold">{dato.name}</h2>
            <p className="text-md">{dato.descripcion}</p>

            <p className="text-sm text-center">Descripcion corta</p>
          </div>
        </div>
      ))}
    </>
  );
}
