import "./header.css";

export const header = () => {
  return `
      <header>
        <div class="logo">
          <img src="img/logo3.jpg" alt="logo">
        </div>
        <nav class="menu">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  `;
};
