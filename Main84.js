const library = {
    books: [
        { title: "JavaScript Basics", author: "John Doe", available: true },
        { title: "Python Guide", author: "Alice Smith", available: true },
        { title: "C++ Advanced", author: "Mark Lee", available: false }
    ],
    borrowBook: function (title) {
        let book = this.books.find(b => b.title === title);
        if (book && book.available) {
            book.available = false;
            console.log(`You borrowed: ${book.title}`);
        } else {
            console.log("Book not available");
        }
    },
    returnBook: function (title) {
        let book = this.books.find(b => b.title === title);
        if (book && !book.available) {
            book.available = true;
            console.log(`You returned: ${book.title}`);
        }
    },
    listBooks: function () {
        console.log("Library Collection:");
        this.books.forEach(b => {
            console.log(`${b.title} by ${b.author} - ${b.available ? "Available" : "Borrowed"}`);
        });
    }
};

library.listBooks();
library.borrowBook("Python Guide");
library.listBooks();
library.returnBook("Python Guide");
library.listBooks();
