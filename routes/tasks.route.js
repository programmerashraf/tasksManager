const express = require("express")
const Router = express.Router()
const tasksController = require('../controllers/tasks.controller')

Router.get('',tasksController.tasks)
Router.get('/:id',tasksController.task)
Router.post('/',tasksController.addTask)
Router.delete('/:id',tasksController.deleteTask)
Router.patch('/:id',tasksController.updateTask)

module.exports = Router