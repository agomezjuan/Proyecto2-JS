import "./main.css";
import { card } from "../Card/card.js";

import { cafes } from "../../data/cafes.js";

export const main = () => {
  return `
    <main>
      <section>
      <div class="filtro">
      <form>
      <input name="intensidad" type="radio" value="Fuerte" id="Fuerte">
      <label for="Fuerte">Fuerte</label>
      <input name="intensidad" type="radio" value="Media" id="Media">
      <label for="Media">Media</label>
      <input name="intensidad" type="radio" value="Suave" id="Suave">
      <label for="Suave">Suave</label>
      <input name="intensidad" type="radio" value="" id="Todos" checked>
      <label for="Todos">Todos</label>
      </form>
      </div>
        <div class="cafe__container" id="shop">
          ${cafes.map(cafe => `${card(cafe)}`).join("")}
        </div>
      </section>
    </main>
`;
};
