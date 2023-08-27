let users = {};

function createid(users) {
  return Object.keys(users).length;
}

function checkUserExists(email) {
  for (let userId in users) {
    if (users[userId].email === email) {
      return true; // Пользователь с таким email уже зарегистрирован
    }
  }
  return false; // Пользователь с таким email не найден
}

// Получение данных пользователей из localStorage
function getUsersFromLocalStorage() {
  const usersString = localStorage.getItem('users');
  if (usersString) {
    users = JSON.parse(usersString);
  }
}

// Сохранение данных пользователей в localStorage
function saveUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}

// Обработчик события отправки формы регистрации
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let repeatPassword = document.getElementById("repeatPassword").value;
  let firstName = document.getElementById("firstName").value;

  // Проверить наличие пользователя с таким email в базе данных
  if (checkUserExists(email)) {
    alert("Пользователь с таким email уже зарегистрирован");
    // Перейти на страницу авторизации
    window.location.href = "registration.html";
    return;
  }

  if (password !== repeatPassword) {
    alert("Пароли не совпадают");
    return;
  }

  class User {
    constructor(lastName, email, password, firstName) {
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.firstName = firstName;
    }
  }

  const user = new User(lastName, email, password, firstName);
  const userId = 'id' + createid(users);
  users[userId] = user;

  // Сохранить данные пользователей в localStorage
  saveUsersToLocalStorage();

  // Перейти на страницу авторизации
  window.location.href = "join.html";
});

// При загрузке страницы получить данные пользователей из localStorage
getUsersFromLocalStorage();

// Просмотр базы данных пользователей
console.log(users);