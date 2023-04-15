import "./main.css";
import { card } from "../Card/card.js";

import cafeOlla from "../../assets/images/cafe.png";

const cafes = [
  {
    name: "Café de olla",
    imagen: cafeOlla,
    description:
      "El café de olla es un café preparado con café molido, azúcar, canela y agua. Se sirve en una olla de barro o de metal, y se acompaña con leche condensada, crema o nata.",
    price: 20,
  },
  {
    name: "Café con leche",
    imagen: "img/cafe.png",
    description:
      "El café con leche es una bebida que se prepara con café molido, agua y leche. Se sirve en una taza o vaso, y se acompaña con azúcar.",
    price: 15,
  },
  {
    name: "Café americano",
    imagen: "img/cafe-americano.png",
    description:
      "El café americano es una bebida que se prepara con café molido, agua y azúcar. Se sirve en una taza o vaso, y se acompaña con leche.",
    price: 15,
  },
];

export const main = () => {
  return `
    <main>
      <section>
        <h1>MAKING PEOPLE HAPPY</h1>

        <h2>COFFEE SHOP.</h2>

        <div class="cafe__container">
          ${cafes.map((cafe) => `${card(cafe)}`).join("")}
        </div>
      </section>
    </main>
`;
};
