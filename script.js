// Fungsi untuk menyimpan data ke file
function saveData(username, password) {
  const data = `${username}:${password}\n`;
  const file = new File([data], 'data.txt', { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = 'data.txt';
  link.click();
}

// Fungsi untuk memeriksa apakah username dan password sudah terdaftar
function checkLogin(username, password) {
  const data = localStorage.getItem('data');
  if (data) {
    const userData = data.split('\n');
    for (const user of userData) {
      const [userUsername, userPassword] = user.split(':');
      if (username === userUsername && password === userPassword) {
        return true;
      }
    }
  }
  return false;
}

// Event listener untuk tombol login
document.getElementById('login-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (checkLogin(username, password)) {
    window.location.href = 'homepage.html';
  } else {
    alert('Username atau password salah!');
  }
});

// Event listener untuk tombol register
document.getElementById('register-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  saveData(username, password);
  alert('Akun berhasil dibuat!');
});