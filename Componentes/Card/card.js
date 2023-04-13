export const card = (cafe) => {
  return `
  <div class= "card">
        <div class="card-img">
            <img src="${cafe.imagen}" alt="${cafe.name}" />
        </div>
        <div class="card-body">
            <h2>${cafe.name}</h2>
            <p>${cafe.description}</p>
            <p class="price">$${cafe.price}</p>
        </div>
    </div>
    `;
};
