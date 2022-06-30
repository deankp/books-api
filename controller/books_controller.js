const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')

// Index:
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.json(foundBooks)
        })
        .catch(err => {
            res.render('error404')
        })
})

// Individual Book Show Route:
books.get('/books/:id', (req, res) => {
    Book.findOne({ title: req.params.Book .toLowerCase() })
        .then(foundBook => {
            res.json(foundBook)
        })
        .catch(err => {
            res.render('error404')
        })
})

// DELETE Route
books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(deletedBooks => {
      res.status(303).redirect('/books')
    })
    .catch(err => {
        res.render('error404')
    })
  })

  // UPDATE
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
      .then(updatedBook => {
        console.log(updatedBook) 
        res.redirect(`/books/${req.params.id}`) 
      })
  })

module.exports = books