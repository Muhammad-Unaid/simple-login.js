document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the login form
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve the stored users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists and password matches
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // Redirect to dashboard
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials!');
    }
});
