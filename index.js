import { header } from "./components/Header/header";
import { hero } from "./components/Hero/hero";
import { main } from "./components/Main/main";
import { footer } from "./components/Footer/footer";

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
