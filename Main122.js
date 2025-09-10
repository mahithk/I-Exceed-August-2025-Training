function getUser(username, callback) {
    setTimeout(() => {
        if (username === "admin") callback(null, { id: 1, username: "admin" });
        else callback("User not found", null);
    }, 500);
}

function checkPassword(user, password, callback) {
    setTimeout(() => {
        if (password === "secret") callback(null, true);
        else callback("Invalid password", null);
    }, 500);
}

function getPermissions(user, callback) {
    setTimeout(() => {
        callback(null, ["read", "write", "delete"]);
    }, 500);
}

getUser("admin", (err, user) => {
    if (err) return console.error(err);
    checkPassword(user, "secret", (err, valid) => {
        if (err) return console.error(err);
        getPermissions(user, (err, perms) => {
            if (err) return console.error(err);
            console.log("Access granted with permissions:", perms);
        });
    });
});
