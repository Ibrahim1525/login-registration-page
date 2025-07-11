// Fake DB to simulate registered users
const users = [];

function toggleForm() {
    document.querySelector('.sign-in').classList.toggle('active');
    document.querySelector('.sign-up').classList.toggle('active');
}

// Show login form by default
document.querySelector('.sign-in').classList.add('active');

// Handle login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert(`Welcome, ${user.name}!`);
    } else {
        alert('Invalid email or password.');
    }

    this.reset();
});

// Handle registration
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;

    const exists = users.some(u => u.email === email);

    if (exists) {
        alert('Email already registered!');
        return;
    }

    users.push({ name, email, password, dob, address });
    alert(`Registered successfully as ${name}. Please login.`);
    toggleForm();
    this.reset();
});
