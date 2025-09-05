function fakeFileReader(fileName, callback) {
    setTimeout(() => {
        let content = `Content of ${fileName}`;
        callback(null, content);
    }, 700);
}

fakeFileReader("data.txt", (err, data) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Read Data:", data);
    }
});
