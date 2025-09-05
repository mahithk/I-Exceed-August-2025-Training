function apiCall(url, callback) {
    setTimeout(() => {
        callback(`Response from ${url}`);
    }, Math.random() * 1000);
}

apiCall("https://api/user", (res1) => {
    console.log(res1);
    apiCall("https://api/user/details", (res2) => {
        console.log(res2);
        apiCall("https://api/user/details/friends", (res3) => {
            console.log(res3);
        });
    });
});
