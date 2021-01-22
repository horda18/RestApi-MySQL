const Author = require('../models/author');

// Create and Save a new Customer
exports.author_create = (req, res) => {
    var author = new Author(
        {
            first_name: req.body.first_name,
            family_name: req.body.family_name,
            date_of_birth: req.body.date_of_birth,
            date_of_death: req.body.date_of_death
        }
    );

    Author.create(author, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "error"
            })
        else res.send(data);
    })
};

// Retrieve all Customers from the database.
exports.author_list = (req, res) => {
    Author.getAll((err, data) => {
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
exports.author_detail = (req, res) => {
    Author.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving Customer with id " + req.params.genreId
            });
        }
        else res.send(data);
    })
};

// Update a Customer identified by the customerId in the request
exports.author_update = (req, res) => {
    Author.update(
        req.params.id, new Author(req.body), (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error updating Genre with id " + req.params.id
                });
            }
            else res.send(data);
        }
    )
};

// Delete a Customer with the specified customerId in the request
exports.author_delete = (req, res) => {
    Author.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Could not delete Customer with id " + req.params.id
            });
        }
        else res.send({ message: `genre was deleted successfully! ${req.params.id}` });
    })
};