const connection = require('./db');
const sql = require('./db');

const Genre = function (genre) {
    this.name = genre.name;
};

Genre.create = (newGenre, results) => {
    sql.query("INSERT INTO genres SET ?", newGenre, (err, res) => {
        if (err) {
            console.log(error);
            results(err, null);
            return;
        }
        console.log("created genre: ", { id: res.insertId, ...newGenre });
        results(null, { id: res.insertId, ...newGenre });
    })
};

Genre.getAll = results => {
    sql.query("SELECT * FROM genres", (err, res) => {
        if (err) {
            console.log(err);
            results(null, err);
            return
        }
        console.log("genres: ", res);
        results(null, res);
    })
};

Genre.findById = (genreId, result) => {
    sql.query("SELECT * FROM genres WHERE id = ?", [genreId], (err, res) => {
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

Genre.update = (id, genre, result) => {
    sql.query("UPDATE genres SET name = ? WHERE id = ?", [genre.name, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("updated genre: ", { id: id, ...genre });
            result(null, { id: id, ...genre });
        });
};

Genre.delete = (id, result) => {
    sql.query("DELETE FROM genres WHERE id="+ id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("deleted genre with id: "+ id);
        result(null, res);
    });
}

module.exports = Genre;