const users = [
  {
    id: 1,
    first_name: "Goldie",
    email: "gmander0@narod.ru",
    password: "asd456",
  },
  {
    id: 2,
    first_name: "Biddy",
    email: "bgerleit1@squarespace.com",
    password: "asd456",
  },
];

var localStorage = window.localStorage;
var keyUsers = "users";
var keyUser = "user";

window.onload = function () {
  cargarDatos();
};

const cargarDatos = () => {
  if (!localStorage.getItem(keyUsers)) {
    // guardar en local storage
    localStorage.setItem(keyUsers, JSON.stringify(users));
    console.log("Guardando datos");
  }

  if (!localStorage.getItem(keyUser)) {
    window.location.href = "http://localhost:3000/login.html";
    return;
  }

  const user = JSON.parse(localStorage.getItem(keyUser));

  document.getElementById('user').innerHTML = user.first_name;
  


  // obtener en local storage
  //const userData = JSON.parse(localStorage.getItem(keyUsers));
  //   localStorage.clear();
  //   console.log(userData);
};

const cerrarSesion = () => {
  localStorage.removeItem(keyUser);
  window.location.href = window.location.href =
    "http://localhost:3000/login.html";
};
