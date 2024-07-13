import React from "react";
import Card from "../Card";

export default function Body() {
  const datos = [
    {
      url: "https://www.shutterstock.com/shutterstock/photos/2418102205/display_1500/stock-vector-anime-cartoon-characters-cute-cats-in-spring-pictures-happy-cute-art-animals-kittens-pets-2418102205.jpg",
      name: "name1",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in",
    },
    {
      url: "https://www.shutterstock.com/shutterstock/photos/2418102205/display_1500/stock-vector-anime-cartoon-characters-cute-cats-in-spring-pictures-happy-cute-art-animals-kittens-pets-2418102205.jpg",
      name: "name2",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in",
    },
    {
      url: "https://www.shutterstock.com/shutterstock/photos/2418102205/display_1500/stock-vector-anime-cartoon-characters-cute-cats-in-spring-pictures-happy-cute-art-animals-kittens-pets-2418102205.jpg",
      name: "name3",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in",
    },
  ];

  return (
    <div className="flex flex-col  mx-5">
      <div className="flex flex-row justify-center">
        <div className="m-5 w-2/5">
          <h2 className="text-3xl font-semibold">Titulo de Body</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in
            perspiciatis autem, nobis tempore saepe accusantium hic
            necessitatibus debitis dolorum qui, provident eligendi aut eveniet
            quae, deleniti reprehenderit voluptatibus veniam natus aspernatur
            ullam ipsa adipisci aperiam enim.
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
      <div className="flex flex-row">
        <Card datos={datos} />
      </div>
    </div>
  );
}
