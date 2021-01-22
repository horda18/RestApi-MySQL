const Book = require('../models/book');
const BookInstance = require('../models/bookinstance');

// Create and Save a new Customer
exports.bookinstance_create = (req, res) => {
    var bookinstance = new BookInstance(
        {
            book: req.body.book,
            imprint: req.body.imprint,
            status: req.body.status,
            due_back: req.body.due_back
        }
    );

    BookInstance.create(bookinstance, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "error"
            })
        else res.send(data);
    })
};

// Retrieve all Customers from the database.
exports.bookinstance_list = (req, res) => {
    BookInstance.getAll((err, data) => {
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
exports.bookinstance_detail = (req, res) => {
    BookInstance.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving bookinstance with id " + req.params.id
            });
        }
        else res.send(data);
    })
};

// Update a Customer identified by the customerId in the request
exports.bookinstance_update = (req, res) => {
    BookInstance.update(
        req.params.id, new BookInstance(req.body), (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error updating bookinstance with id " + req.params.id
                });
            }
            else res.send(data);
        }
    )
};

// Delete a Customer with the specified customerId in the request
exports.bookinstance_delete = (req, res) => {
    BookInstance.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Could not delete bookinstance with id " + req.params.id
            });
        }
        else res.send({ message: `bookinstance was deleted successfully! ${req.params.id}` });
    })
};