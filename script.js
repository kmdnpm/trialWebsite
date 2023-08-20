const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');
const logoutButton = document.getElementById('logout-button');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // In a real application, you'd validate user credentials here.
    // For this example, we'll assume a simple username and password.
    if (username === 'user' && password === 'password') {
        loginForm.style.display = 'none';
        dashboard.style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

logoutButton.addEventListener('click', function () {
    loginForm.style.display = 'block';
    dashboard.style.display = 'none';
});

const newsBanners = document.querySelectorAll('.news-banner');
newsBanners.forEach(banner => {
    banner.addEventListener('click', function () {
        alert(`Clicked on ${banner.innerText}`);
    });
});

// ... previous code ...

document.addEventListener('DOMContentLoaded', function () {
    const loggedIn = localStorage.getItem('loggedIn');
    const loginForm = document.getElementById('login-form');
    const dashboard = document.getElementById('dashboard');
    const logoutButton = document.getElementById('logout-button');
    const menuLink = document.getElementById('menu-link');

    if (loggedIn === 'true') {
        loginForm.style.display = 'none';
        dashboard.style.display = 'block';
    }

    loginForm.addEventListener('submit', function (event) {
        // ... previous code ...
        if (username === 'user' && password === 'password') {
            localStorage.setItem('loggedIn', 'true');
            // ... previous code ...
        }
    });

    logoutButton.addEventListener('click', function () {
        localStorage.setItem('loggedIn', 'false');
        loginForm.style.display = 'block';
        dashboard.style.display = 'none';
    });
});
