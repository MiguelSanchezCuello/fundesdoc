import React from "react";
import Boton from "../Boton/index";

export default function InicioBanner() {
  return (
    <>
      <div className="flex flex-row m-5">
        <div className="mx-5 w-2/5">
          <img src="https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg?w=360&t=st=1720819307~exp=1720819907~hmac=31c603268e9375fc00f9c50e9494954327278def950ce42e9722596e653f255a" />
        </div>
        <div className="mx-5 w-2/5">
          <h2 className="text-3xl font-semibold">Titulo</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in
            perspiciatis autem, nobis tempore saepe accusantium hic
            necessitatibus debitis dolorum qui, provident eligendi aut eveniet
            quae, deleniti reprehenderit voluptatibus veniam natus aspernatur
            ullam ipsa adipisci aperiam enim.
          </p>
          <div className="m-5 w-2/5">
            <Boton />
            <p className="text-sm text-center">Descripcion corta</p>
          </div>
        </div>
      </div>
    </>
  );
}
