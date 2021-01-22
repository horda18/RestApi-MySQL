const connection = require('./db');
const sql = require('./db');

const BookInstance = function (bookInstance) {
    this.book = bookInstance.book;
    this.imprint = bookInstance.imprint;
    this.status = bookInstance.status;
    this.due_back = bookInstance.due_back;
};

BookInstance.create = (newbookinstance, results) => {
    sql.query("INSERT INTO bookinstances SET ?", newbookinstance, (err, res) => {
        if (err) {
            console.log(error);
            results(err, null);
            return;
        }
        console.log("created bookinstance: ", { id: res.insertId, ...newbookinstance });
        results(null, { id: res.insertId, ...newbookinstance });
    })
};

BookInstance.getAll = results => {
    sql.query("SELECT bookinstances.id, bookinstances.imprint, bookinstances.status, bookinstances.due_back, books.title FROM bookinstances JOIN books ON bookinstances.book = books.id", (err, res) => {
        if (err) {
            console.log(err);
            results(null, err);
            return
        }
        console.log("bookinstances: ", res);
        results(null, res);
    })
};

BookInstance.findById = (bookinstanceId, result) => {
    sql.query("SELECT * FROM bookinstances WHERE id = ?", [bookinstanceId], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        if (res) {
            console.log("found bookinstance: ", res);
            result(null, res);
            return;
        }
    });
};

BookInstance.update = (id, bookinstance, result) => {
    sql.query("UPDATE bookinstances SET book = ?, imprint = ?, status = ?, due_back = ?  WHERE id = ?", [bookinstance.book, bookinstance.imprint, bookinstance.status, bookinstance.due_back, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("updated bookinstance: ", { id: id, ...bookinstance });
            result(null, { id: id, ...bookinstance });
        });
};

BookInstance.delete = (id, result) => {
    sql.query("DELETE FROM bookinstances WHERE id="+ id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("deleted bookinstance with id: "+ id);
        result(null, res);
    });
}

module.exports = BookInstance;