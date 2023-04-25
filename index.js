import { header } from "./components/Header/header";
import { hero } from "./components/Hero/hero";
import { main } from "./components/Main/main";
import { footer } from "./components/Footer/footer";
import { card } from "./components/Card/card";
import { cafes } from "./data/cafes";

// Importar "./main.css";
import "./index.css";

// Obtener el elemento del DOM con el id "app"
const app = document.querySelector("#app");

// Insertar el header en el DOM
app.insertAdjacentHTML("afterbegin", header());

app.insertAdjacentHTML("beforeend", hero());

// Insertar el main en el DOM
app.insertAdjacentHTML("beforeend", main());

//Insertar el main en el DOM
app.insertAdjacentHTML("afterend", footer());

//Insertar en el main en el DOM
// app.insertAdjacentHTML("beforeend", contact());

//FILTROS
function filtrar() {
  // Obtener todos los radios
  const radios = document.querySelectorAll("input[name=intensidad]");
  // Obtener el contenedor de los cafés
  const cafeContainer = document.querySelector("#shop");

  // Variable para guardar el valor del radio seleccionado
  let intensidad = "";

  // Agregar un listener a cada radio
  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      intensidad = radio.value;

      // Limpiar el contenedor de los cafés
      cafeContainer.innerHTML = "";

      // Filtrar los cafés y agregarlos al contenedor
      cafes
        .filter(cafe =>
          intensidad == "" ? true : cafe.intensidad === intensidad
        )
        .forEach(cafe => {
          cafeContainer.innerHTML += card(cafe);
        });
    });
  });
}

filtrar();
