import {RequestHandler} from 'express'
import {Todo} from '../models/todo-model'

const TODOS: Todo[] = []

export const addTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text
    const newTodo = new Todo(Math.random().toString(), text)
    TODOS.push(newTodo)

    res.status(201).json({message: 'Created Todo', createdTodo: newTodo })
}

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({todos: TODOS})
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const id = req.params.id
    const text = (req.body as {text: string}).text
    const indexOfTodo = TODOS.findIndex(todo => todo.id === id )
   if(indexOfTodo < 0){
       throw new Error('todo not found')
   }

   TODOS[indexOfTodo] = new Todo(TODOS[indexOfTodo].id, text)
    

res.status(201).json({message: 'Updated Todo', updatedTodo: TODOS[indexOfTodo]  })
}

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const id = req.params.id
    
    const indexOfTodo = TODOS.findIndex(todo => todo.id === id )
   if(indexOfTodo < 0){
       throw new Error('todo not found to delete')
   }

   TODOS.splice(indexOfTodo, 1)
    

res.status(201).json({message: 'Todo Deleted', remainingTodos: TODOS  })
}