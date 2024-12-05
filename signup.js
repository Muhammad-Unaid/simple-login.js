document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if user already exists in localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert("Username already exists!");
        return;
    }

    // Save the new user to localStorage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to login page
    window.location.href = 'login.html';
});
