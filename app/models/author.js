const connection = require('./db');
const sql = require('./db');

const Author = function (author) {
    this.first_name = author.first_name;
    this.family_name = author.family_name;
    this.date_of_birth = author.date_of_birth;
    this.date_of_death = author.date_of_death;
};

Author.create = (newAuthor, results) => {
    sql.query("INSERT INTO authors SET ?", newAuthor, (err, res) => {
        if (err) {
            console.log(error);
            results(err, null);
            return;
        }
        console.log("created author: ", { id: res.insertId, ...newAuthor });
        results(null, { id: res.insertId, ...newAuthor });
    })
};

Author.getAll = results => {
    sql.query("SELECT * FROM authors", (err, res) => {
        if (err) {
            console.log(err);
            results(null, err);
            return
        }
        console.log("authors: ", res);
        results(null, res);
    })
};

Author.findById = (authorId, result) => {
    sql.query("SELECT * FROM authors WHERE id = ?", [authorId], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        if (res) {
            console.log("found genre: ", res);
            result(null, res);
            return;
        }
    });
};

Author.update = (id, author, result) => {
    sql.query("UPDATE author SET first_name = ?, family_name = ?, date_of_birth = ?, date_of_death = ?  WHERE id = ?", [author.first_name, author.family_name, author.date_of_birth, author.date_of_death, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("updated author: ", { id: id, ...author });
            result(null, { id: id, ...author });
        });
};

Author.delete = (id, result) => {
    sql.query("DELETE FROM authors WHERE id="+ id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("deleted author with id: "+ id);
        result(null, res);
    });
}

module.exports = Author;