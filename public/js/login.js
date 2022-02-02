var localStorage = window.localStorage;
var keyUsers = "users";
var keyUser = "user";

var dataUsers = JSON.parse(localStorage.getItem(keyUsers));


window.onload = function () {
    if (localStorage.getItem(keyUser)) {
        window.location.href = window.location.href = "http://localhost:3000/";
    }
};

const login = () => {
  let correo = document.getElementById("correo").value;
  let contra = document.getElementById("contra").value;

  dataUsers.forEach((user) => {
    if (user.email == correo && user.password == contra) {
      localStorage.setItem(keyUser, JSON.stringify(user));
      window.location.href = window.location.href = "http://localhost:3000/";
    } else {
        document.getElementById('mensaje').classList.remove('d-none');
    }
  });
};

[0,0,1]

