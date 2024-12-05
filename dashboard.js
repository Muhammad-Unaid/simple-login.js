// Check if user is logged in
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (!loggedInUser) {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
} else {
    // Display a welcome message
    document.getElementById('welcomeMessage').innerText = `Welcome, ${loggedInUser.username}!`;
}

document.getElementById('logoutButton').addEventListener('click', function() {
    // Clear the logged in user from localStorage and redirect to login page
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
});
