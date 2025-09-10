function readFile(file, callback) {
    setTimeout(() => {
        callback(null, `Data from ${file}`);
    }, Math.random() * 1000);
}

function processFile(data, callback) {
    setTimeout(() => {
        callback(null, data.toUpperCase());
    }, Math.random() * 1000);
}

function saveFile(file, data, callback) {
    setTimeout(() => {
        callback(null, `${file} saved with content: ${data}`);
    }, Math.random() * 1000);
}

readFile("input.txt", (err, data) => {
    if (err) return console.error(err);
    processFile(data, (err, processed) => {
        if (err) return console.error(err);
        saveFile("output.txt", processed, (err, result) => {
            if (err) return console.error(err);
            console.log(result);
        });
    });
});
