// NOTE: Modules
const models = require('./../models'),
      sequelize = require('sequelize');

module.exports = {
  // Hi: function(req, res){console.log('Hi'), res.send('Hi')},
  todos: function(req, res, next) {
         // SELECT title, details FROM todos WHERE complete = f
         models.todo.findAll({ attributes: ['id', 'title', 'details'], where: { completed: false }, raw: true })
                    .then((todo) => { req.todoIncomplete = todo; console.log('Grabbed incomplete todos') })   // passing todo to the next middleware by attaching it to req object
                    .catch((err) =>   console.error(err) );

         models.todo.findAll({ attributes: ['id', 'title', 'details'], where: { completed: true }, raw: true })
                    .then((todo) => { req.todoComplete = todo; console.log('Grabbed complete todos, now next'); next() })   // passing todo to the next middleware by attaching it to req object
                    .catch((err) =>   console.error(err) );
  },

  add: function(req, res, next){
       models.todo.create({ title: req.body.title, details: req.body.details, createdAt: Date.now(), updatedAt: Date.now() })
                  .then(() => { console.log('Todo created !'); next() })
                  .catch((err) =>  console.error(err) );

  },

  update: function(req, res, next){
          // console.log('canaryBird1');
          models.todo.findById(req.params.id)
                     .then((todo) =>
                 todo.update({ title: req.body.title, details: req.body.details, updatedAt: Date.now() })
                     .then(() => { console.log('Todo updated !'); next() })
                     .catch((err) =>  console.error(err) )
                    ).catch((err) =>  console.error(err) );
  },

  delete: function(req, res, next){
          models.todo.findById(req.params.id)
                     .then((todo) =>
                 todo.destroy()
                     .then(() => { console.log('Todo deleted !'); next() })
                     .catch((err) =>  console.error(err) )
                    ).catch((err) =>  console.error(err) );
  },

  completed: function(req, res, next){
             models.todo.findById(req.params.id)
                        .then((todo) =>
                    todo.update({ completed: true })
                        .then(() => { console.log('Todo completed !'); next() })
                        .catch((err) =>  console.error(err) )
                       ).catch((err) =>  console.error(err) );
  }
};
