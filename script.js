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
