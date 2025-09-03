function authenticateUser(username, password, callback) {
    console.log("Authenticating user...");
    setTimeout(function () {
        if (username === "admin" && password === "1234") {
            callback(true);
        } else {
            callback(false);
        }
    }, 2000);
}

function fetchUserData(isAuthenticated, callback) {
    if (isAuthenticated) {
        console.log("Fetching user data...");
        setTimeout(function () {
            let user = { id: 1, name: "Admin", role: "SuperUser" };
            callback(user);
        }, 2000);
    } else {
        callback(null);
    }
}

authenticateUser("admin", "1234", function (success) {
    fetchUserData(success, function (user) {
        if (user) {
            console.log("User details:", user);
        } else {
            console.log("Authentication failed.");
        }
    });
});
