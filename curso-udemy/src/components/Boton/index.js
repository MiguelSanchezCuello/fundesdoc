import React from "react";

export default function Boton(props) {
  return <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Mi nuevo boton {props.numero}</button>;
}
