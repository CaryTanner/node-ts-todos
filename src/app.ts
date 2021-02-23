import express, { NextFunction, Request, Response } from 'express'
import todoRoutes from './routes/todo-routes'
import {json } from 'body-parser'

const PORT = process.env.PORT || 3000
const app = express()

app.use(json())

app.use('/todos', todoRoutes)


// error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction )=> {
    res.status(500).json({message: err.message})
})

app.listen(PORT)