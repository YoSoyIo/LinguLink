// Obtener la referencia a la div del navbar
const div_navbar = document.getElementById("div_navbar");

// Crear los elementos del navbar
const navbar = document.createElement("nav");
const logo = document.createElement("a");
const logoImg = document.createElement("img");
const navLinks = document.createElement("ul");

// Rutas de navegacion

const rutaIMG = "../Todos/IMG/";
const rutaJS = "../Todos/JS/";
const rutaCSS = "../Todos/CSS/";

// Añadir clases a los elementos
navbar.classList.add("navbar");
logo.classList.add("logo");
logoImg.classList.add("logo-img");
navLinks.classList.add("nav-links");

// Añadir texto y atributos de imagen
logo.textContent = "Mi sitio web";
logoImg.src = rutaIMG + "logo1.png";
logoImg.alt = "Logo del sitio web";

// Añadir elementos al navbar
logo.appendChild(logoImg);
navbar.appendChild(logo);
navbar.appendChild(navLinks);

// Crear los elementos de la lista de navegación
const links = ["Inicio", "Acerca de", "Contacto"];
links.forEach((link) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = link;
  a.href = "#" + link.toLowerCase().replace(" ", "-");
  li.appendChild(a);
  navLinks.appendChild(li);
});

// Añadir el navbar a la div
div_navbar.appendChild(navbar);
