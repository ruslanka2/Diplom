function getUsersFromLocalStorage() {
    const usersString = localStorage.getItem('users');
    if (usersString) {
      users = JSON.parse(usersString);
    }
  }
  
  function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Проверяем наличие пользователя с введенным email и паролем в базе данных
    const user = Object.values(users).find(user => user.email === email && user.password === password);
  
    if (user) {
      // Пользователь найден, перенаправляем на страницу личного кабинета
      window.location.href = 'index.html';
    } else {
      // Пользователь не найден, выводим сообщение об ошибке
      alert('Пользователь с таким email и паролем не найден');
    }
  }
  
  document.getElementById('join').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
  });
  
  getUsersFromLocalStorage();