const Genre = require('../models/genre');
var async = require('async');

// Create and Save a new Customer
exports.genre_create = (req, res) => {
    var genre = new Genre(
        { name: req.body.name }
    );

    Genre.create(genre, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "error"
            })
        else res.send(data);
    })
};

// Retrieve all Customers from the database.
exports.genre_list = (req, res) => {
    Genre.getAll((err, data) => {
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
exports.genre_detail = (req, res) => {
    Genre.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving Customer with id " + req.params.genreId
            });
        }
        else res.send(data);
    })
};

// Update a Customer identified by the customerId in the request
exports.genre_update = (req, res) => {
    Genre.update(
        req.params.id, new Genre(req.body), (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error updating Genre with id " + req.params.genreId
                });
            }
            else res.send(data);
        }
    )
};

// Delete a Customer with the specified customerId in the request
exports.genre_delete = (req, res) => {
    Genre.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Could not delete Customer with id " + req.params.genreId
            });
        }
        else res.send({ message: `genre was deleted successfully! ${req.params.genreId}` });
    })
};