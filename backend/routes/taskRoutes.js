const express = require('express')

const{
    getAllTasks,
    getCompletedTasks,
    getLowTasks,
    getMediumTasks,
    getHighTasks,
    addTask,
    updateTask,
    deleteTask,
} = require('../controllers/taskControllers')

const router = express.Router()


router.get('/', getAllTasks)

router.get('/completed', getCompletedTasks)

router.get('/low', getLowTasks)

router.get('/medium', getMediumTasks)

router.get('/high', getHighTasks)

router.post('/add', addTask)

router.patch('/update/:id', updateTask)

router.delete('/delete/:name', deleteTask)


module.exports = router