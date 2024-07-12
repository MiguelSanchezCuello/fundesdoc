import React from "react";

const Boton = ({ setValor, valor }) => {
  return (
    <button
      onClick={() => {
        setValor(valor + 2);
      }}
      type="button"
      class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      Mi boton + 2
    </button>
  );
};
export default Boton;
