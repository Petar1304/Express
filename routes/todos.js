const router = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const { v4 } = require('uuid');

let todos = [];

router.get('/', checkAuth, (req, res) => {
    res.json(todos);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === id);
    return res.json(todo);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].completed = !todos[index].completed;
    return res.json(todos[index]);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex(todo => todo.id === id);
    todos = todos.filter(todo => todo.id !== id);
    return res.json(todos);
});

router.post('/', (req, res) => {
    const title = req.body.title;
    const todo = {
        id: v4(),
        title: title,
        completed: false
    }
    todos.push(todo);
    return res.json(todo)
});

module.exports = router;