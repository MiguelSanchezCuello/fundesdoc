import React from "react";

export default function Body() {
  return (
    <div className="flex flex-row justify-center mx-5">
      <div className="m-5 w-2/5">
        <h2 className="text-3xl font-semibold">Titulo de Body</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in
          perspiciatis autem, nobis tempore saepe accusantium hic necessitatibus
          debitis dolorum qui, provident eligendi aut eveniet quae, deleniti
          reprehenderit voluptatibus veniam natus aspernatur ullam ipsa adipisci
          aperiam enim.
        </p>
      </div>
      <div className="m-5 w-2/5 ml-32">
        <h2 className="text-3xl font-semibold">Titulo de Opciones</h2>
        <li>Opcion 1</li>
        <li>Opcion 2</li>
        <li>Opcion 3</li>
        <li>Opcion 4</li>
        <li>Opcion 5</li>
      </div>
    </div>
  );
}
