import "./card.css";

export const card = (cafe) => {
    return `
  <div class= "card">
        <div class="card-img">
            <img src="${cafe.imagen}" alt="${cafe.name}"/ class="cafe-producto">
        </div>
        <div class="card-body">
            <h2>${cafe.name}</h2>
            <h5>${cafe.aroma}</h5>
            <p>${cafe.description}</p>
            <h4> ${cafe.intensidad}</h4>

            <h3>${cafe.price}€</h3>
            <button class="btn">Añadir</button>
        </div>
    </div>
    `;
};
