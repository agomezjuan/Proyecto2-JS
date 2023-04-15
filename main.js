import { header } from "./components/Header/header";
import { main } from "./components/Main/main";

// Importar "./main.css";
import "./main.css";

// Obtener el elemento del DOM con el id "app"
const app = document.querySelector("#app");

// Insertar el header en el DOM
app.insertAdjacentHTML("afterbegin", header());

// Insertar el main en el DOM
app.insertAdjacentHTML("beforeend", main());
