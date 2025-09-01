function countdown(start) {
    let current = start
    function tick() {
        console.log("Time left:", current)
        current--
        if (current >= 0) {
            setTimeout(tick, 1000)
        } else {
            console.log("Countdown finished!")
        }
    }
    tick()
}
countdown(5)
