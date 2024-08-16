document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Sign up functionality will be implemented here.');
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const userType = document.getElementById('login-user-type').value;
    const username = document.getElementById('login-username').value;

    document.getElementById('login-section').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    if (userType === 'doctor') {
        document.getElementById('doctor-dashboard').style.display = 'block';
        document.getElementById('dashboard-title').innerText = `Welcome, Dr. ${username}`;
        // Load patient list
    } else {
        document.getElementById('patient-dashboard').style.display = 'block';
        document.getElementById('dashboard-title').innerText = `Welcome, ${username}`;
        // Load queue information and doctor schedule
    }
});

document.getElementById('finish-appointment').addEventListener('click', function () {
    alert('Finish appointment functionality will be implemented here.');
    // Remove patient from the list and update queue
});
