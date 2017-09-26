// NOTE: Modules & controlers
const express = require('express'),
      todoController = require('./todoController');

// NOTE: Express Router
const router = express.Router();

      router.get('/todos', todoController.todos, (req, res) =>
         res.render('index', {
             todoIncomplete: req.todoIncomplete,
             todoComplete: req.todoComplete });
      );                                                        // req.todo is an array of objects --> I have to iterate through the array, and pull out title and details so do NOT use {{#todo}}{{.}}{{/todo}}, but {{#todo}}{{title}}{{/todo}}

      router.post('/add', todoController.add, (req, res) => res.redirect('/todos'));
      router.post('/update/:id', todoController.update, (req, res) => res.redirect('/todos'));
      router.post('/delete/:id', todoController.delete, (req, res) => res.redirect('/todos'));
      router.post('/completed/:id', todoController.completed, (req, res) => res.redirect('/todos'));


module.exports = router;
