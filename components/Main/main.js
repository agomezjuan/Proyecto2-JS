import "./main.css";
import { card } from "../Card/card.js";

import cafeOlla from "../../assets/images/cafe.png";

const cafes = [
  {
    name: "Espresso",
    imagen: "assets/cafe2.jpeg",
    description:
      "Un café muy concentrado hecho al pasar agua caliente a través de café molido finamente. Tiene un sabor intenso y se sirve en pequeñas tazas.",
    price: 3.5,
    intensidad: "Fuerte",
    aroma: "Galleta",
  },
  {
    name: "Americano",
    imagen: "assets/cafe3.jpeg",
    description:
      "Un espresso al que se le agrega agua caliente para diluirlo. Tiene un sabor más suave que el espresso puro.",
    price: 4,
    intensidad: "Suave",
    aroma: "Dulce",
  },
  {
    name: "Latte",
    imagen: "assets/cafe1.jpeg",
    description:
      "Una bebida de café hecha con espresso y leche caliente. Puede ser aromatizado con jarabes como vainilla o caramelo.",
    price: 2.85,
    intensidad: "Fuerte",
    aroma: "Floral",
  },
  {
    name: "Cappuccino",
    imagen: "assets/cafe6.jpeg",
    description:
      "Similar al latte, pero con una capa de espuma de leche en la parte superior. Tradicionalmente se toma por la mañana en Italia.",
    price: 4.5,
    intensidad: "Fuerte",
    aroma: "Galleta",
  },
  {
    name: "Macchiato",
    imagen: "assets/cafe7.jpg",
    description:
      "Una pequeña cantidad de leche caliente y espumada se agrega a un espresso, creando una bebida fuerte y con un toque cremoso.",
    price: 2.5,
    intensidad: "Fuerte",
    aroma: "Floral",
  },
  {
    name: "Mocha",
    imagen: "assets/cafe4.jpeg",
    description:
      "Una bebida de café que combina espresso, leche caliente y chocolate. A menudo se adorna con crema batida y virutas de chocolate.",
    price: 5,
    intensidad: "Media",
    aroma: "Avellana",
  },
  {
    name: "Flat White",
    imagen: "assets/cafe8.jpg",
    description:
      "Una bebida de café originaria de Australia y Nueva Zelanda, hecha con espresso y leche al vapor. Se distingue por tener menos espuma que un cappuccino.",
    price: 5.5,
    intensidad: "Media",
    aroma: "Avellana",
  },
  {
    name: "Frappé",
    imagen: "assets/cafe5.jpeg",
    description:
      "Un café frío batido con hielo, leche y jarabes dulces. A menudo se sirve con crema batida en la parte superior.",
    price: 6,
    intensidad: "Suave",
    aroma: "Avellana",
  },
  {
    name: "Irish Coffee",
    imagen: "assets/cafe9.jpg",
    description:
      "Una bebida alcohólica que combina café caliente, whisky irlandés y crema batida. Es una bebida perfecta para después de la cena.",
    price: 7.5,
    intensidad: "Suave",
    aroma: "Dulce",
  },
  {
    name: "Affogato",
    imagen: "assets/cafe10.jpg",
    description:
      "Un affogato es una bola de helado de vainilla con un shot de espresso caliente servido encima. Es una mezcla deliciosa de frío y caliente, con un sabor rico y complejo.",
    price: 6,
    intensidad: "Suave",
    aroma: "Galleta",
  },
  {
    name: "Doppio",
    imagen: "assets/cafe11.jpg",
    description:
      "Un doppio es una doble ración de espresso. Se prepara con una doble cantidad de café molido y se extrae en una taza más pequeña. Es una opción ideal para aquellos que quieren una dosis de cafeína más fuerte.",
    price: 4,
    intensidad: "Media",
    aroma: "Floral",
  },
  {
    name: "Turkish Coffee",
    imagen: "assets/cafe12.jpg",
    description:
      "El café turco es una bebida de café muy finamente molido, hervida en una pequeña cacerola con agua y azúcar. Se caracteriza por su cuerpo espeso y sabor fuerte, con una espuma fina en la parte superior.",
    price: 3,
    intensidad: "Fuerte",
    aroma: "Dulce",
  },
];

export const main = () => {
  return `
    <main>
      <section>
        <div class="cafe__container" id="shop">
          ${cafes.map((cafe) => `${card(cafe)}`).join("")}
        </div>
      </section>
    </main>
`;
};
