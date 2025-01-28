function login() {
    const userType = document.querySelector('input[name="userType"]:checked').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        if (userType === 'admin') {
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('adminDashboard').style.display = 'block';
        } else {
            alert('User dashboard not implemented in this demo');
        }
    } else {
        alert('Please enter both username and password');
    }
}

function logout() {
    document.getElementById('loginSection').style.display = 'flex';
    document.getElementById('adminDashboard').style.display = 'none';
    document.getElementById('pickupTable').style.display = 'none';
}

function showPickupRequests() {
    document.getElementById('storageMonitoring').style.display = 'none';
    document.getElementById('pickupTable').style.display = 'block';
}

function showStorageMonitoring() {
    document.getElementById('pickupTable').style.display = 'none';
    document.getElementById('storageMonitoring').style.display = 'block';
} 