let now = new Date()
console.log("Current Date and Time:", now.toString())

let year = now.getFullYear()
console.log("Year:", year)

let month = now.getMonth() + 1
console.log("Month:", month)

let day = now.getDate()
console.log("Day:", day)

let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()
console.log("Time:", hours + ":" + minutes + ":" + seconds)

let weekday = now.getDay()
console.log("Weekday:", weekday)

let timestamp = now.getTime()
console.log("Timestamp:", timestamp)
