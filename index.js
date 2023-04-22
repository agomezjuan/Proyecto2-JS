import { header } from "./components/Header/header";
import { hero } from "./components/Hero/hero";
import { main } from "./components/Main/main";
import { footer } from "./components/Footer/footer";
import { contact } from "./components/Contact/contact";

// Importar "./main.css";
import "./index.css";

// Obtener el elemento del DOM con el id "app"
const app = document.querySelector("#app");

// Insertar el header en el DOM
app.insertAdjacentHTML("afterbegin", header());

app.insertAdjacentHTML("beforeend", hero());

// Insertar el main en el DOM

let intensidad = getIntensidad();
console.log(intensidad);
app.insertAdjacentHTML("beforeend", main(intensidad));

//Insertar el main en el DOM
app.insertAdjacentHTML("afterend", footer());

//Insertar en el main en el DOM
app.insertAdjacentHTML("beforeend", contact());

function getIntensidad() {
  const inputs = document.querySelectorAll('input[name="intensidad"]');
  let valor = "";
  inputs.forEach((input) => {
    input.addEventListener("click", () => {
      valor = input.value;
      console.log(valor);
    });
  });
  return valor;
}

//FILTROS

// const buscador = document.querySelector(".buscador");
// buscador.addEventListener(input, buscar);

// const buscar = (e) => {
//   const cafesproductosfiltered = cafes.filter((producto) =>
//     producto.name.toLowerCase().includes(e.target.value.toLowerCase)()
//   );

//   pintarproduxtos(cafesproductosfiltered);
// };

// const crearbotones = () => {;

// const divBotones = document.querySelector(".botones_Filtros");

// const categorias [];

// for (const cafe of cafes) {
// if (!categorias.includes(producto.categoria)) {
//   categorias.push(producto.categoria);
// }

// }

// }
