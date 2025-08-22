let current = new Date()
console.log("Full Date:", current.toString())

let onlyDate = current.getDate()
let onlyMonth = current.getMonth() + 1
let onlyYear = current.getFullYear()
console.log("Date:", onlyDate, "/", onlyMonth, "/", onlyYear)

let hours = current.getHours()
let minutes = current.getMinutes()
let seconds = current.getSeconds()
console.log("Time:", hours + ":" + minutes + ":" + seconds)

let dayName = current.toLocaleString('en-US', { weekday: 'long' })
console.log("Today is:", dayName)

let utcTime = current.toUTCString()
console.log("UTC Time:", utcTime)
