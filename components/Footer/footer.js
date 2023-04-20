import "./footer.css";

export const footer = () => {
  return `
    <footer>
    <div class="sombra">
    </div>
      <div class ="titulo-texto">
        <h1>Cafe</h1>
      </div>
      <nav class="menu-footer">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      <div class="redes-sociales">
        <ul>
          <li>
          <a href="#"
            ><img src="./assets/facebook.png" alt="Facebook logo"
          /></a>
          </li>
          <li>
          <a href="#"
            ><img src="./assets/twitter.png" alt="Twitter logo"
          /></a>
          </li>
          <li>
          <a href="#"
            ><img src="./assets/tik-tok.png" alt="TikTok Logo"
          /></a>
          </li>
        </ul>
      </div>
    </footer>
  `;
};
