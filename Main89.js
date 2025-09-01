function sendMessage(message, delay) {
    setTimeout(function () {
        console.log("Message delivered:", message)
    }, delay)
}
sendMessage("Hello after 1 second", 1000)
sendMessage("Hello after 2 seconds", 2000)
sendMessage("Hello after 3 seconds", 3000)
sendMessage("Hello after 4 seconds", 4000)
sendMessage("Hello after 5 seconds", 5000)
