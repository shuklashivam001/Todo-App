const todo = require('../models/todo.model');

const createTodo = async (req, res) => {
    try {
        const newTodo = await todo.create(req.body);
        res.status(200).json({ message: "created successfully", data: newTodo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTodos = async (req, res) => {
    try {
        const todos = await todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await todo.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "todo updated", data: updatedTodo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await todo.findByIdAndDelete(id);
        res.status(200).json({ message: "deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTodo, getTodos, updateTodos, deleteTodo };