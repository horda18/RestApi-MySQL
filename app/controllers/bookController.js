const Book = require('../models/book');

// Create and Save a new Customer
exports.book_create = (req, res) => {
    var book = new Book(
        {
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
            isbn: req.body.isbn,
            genre: req.body.genre
        }
    );

    Book.create(book, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "error"
            })
        else res.send(data);
    })
};

// Retrieve all Customers from the database.
exports.book_list = (req, res) => {
    Book.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Error"
            });
        }
        else {
            res.send(data);
        }
    });
};

// Find a single Customer with a customerId
exports.book_detail = (req, res) => {
    Book.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving book with id " + req.params.genreId
            });
        }
        else res.send(data);
    })
};

// Update a Customer identified by the customerId in the request
exports.book_update = (req, res) => {
    Book.update(
        req.params.id, new Book(req.body), (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error updating book with id " + req.params.id
                });
            }
            else res.send(data);
        }
    )
};

// Delete a Customer with the specified customerId in the request
exports.book_delete = (req, res) => {
    Book.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Could not delete book with id " + req.params.id
            });
        }
        else res.send({ message: `book was deleted successfully! ${req.params.id}` });
    })
};