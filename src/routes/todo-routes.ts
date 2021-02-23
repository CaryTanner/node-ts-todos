import { Router } from 'express'
import {addTodo, deleteTodo, getTodos, updateTodo} from '../controllers/todo-controllers'
const router = Router()


// add todo
router.post('/', addTodo)

// get all todos
router.get('/', getTodos)

// update todo
router.patch('/:id', updateTodo)

// delete todo
router.delete('/:id', deleteTodo)

export default router