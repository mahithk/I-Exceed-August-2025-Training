let library = [
    {title: "JavaScript Basics", author: "John", year: 2020},
    {title: "Python Guide", author: "Alice", year: 2019},
    {title: "C Programming", author: "Dennis", year: 2018}
]

function searchBook(keyword) {
    let result = library.filter(b => b.title.toLowerCase().includes(keyword.toLowerCase()))
    if(result.length === 0) throw new Error("No books found")
    return result
}

try {
    let searchResult = searchBook("python")
    console.log("Search Results:", searchResult)
} catch(err) {
    console.log("Error:", err.message)
}

try {
    let searchResult2 = searchBook("ruby")
    console.log("Search Results:", searchResult2)
} catch(err) {
    console.log("Error:", err.message)
}
