function downloadFile(url, callback) {
    console.log("Downloading file from:", url);
    setTimeout(function () {
        let file = "file_content_of_" + url;
        callback(file);
    }, 2000);
}

function processFile(file, callback) {
    console.log("Processing file...");
    setTimeout(function () {
        let processed = file.toUpperCase();
        callback(processed);
    }, 2000);
}

function saveFile(data, callback) {
    console.log("Saving file...");
    setTimeout(function () {
        console.log("File saved:", data);
        callback();
    }, 2000);
}

downloadFile("example.com", function (file) {
    processFile(file, function (processed) {
        saveFile(processed, function () {
            console.log("Download and save completed.");
        });
    });
});
