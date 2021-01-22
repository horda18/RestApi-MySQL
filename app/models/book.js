const connection = require('./db');
const sql = require('./db');

const Book = function (book) {
    this.title = book.title;
    this.author = book.author;
    this.isbn = book.isbn;
    this.summary = book.summary;
    this.genre = book.genre;
};

Book.create = (newBook, results) => {
    sql.query("INSERT INTO books SET ?", newBook, (err, res) => {
        if (err) {
            console.log(error);
            results(err, null);
            return;
        }
        console.log("created book: ", { id: res.insertId, ...newBook });
        results(null, { id: res.insertId, ...newBook });
    })
};

Book.getAll = results => {
    sql.query("SELECT books.id, books.title, books.summary, books.isbn, authors.first_name, authors.family_name FROM books JOIN authors ON books.author = authors.id", (err, res) => {
        if (err) {
            console.log(err);
            results(null, err);
            return
        }
        console.log("books: ", res);
        results(null, res);
    })
};

Book.findById = (bookId, result) => {
    sql.query("SELECT * FROM books WHERE id = ?", [bookId], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        if (res) {
            console.log("found book: ", res);
            result(null, res);
            return;
        }
    });
};

Book.update = (id, book, result) => {
    sql.query("UPDATE books SET title = ?, author = ?, summary = ?, isbn = ?, genre = ?  WHERE id = ?", [book.title, book.author, book.summary, book.isbn, book.genre, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("updated book: ", { id: id, ...book });
            result(null, { id: id, ...book });
        });
};

Book.delete = (id, result) => {
    sql.query("DELETE FROM books WHERE id="+ id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("deleted book with id: "+ id);
        result(null, res);
    });
}

module.exports = Book;