// Sets up the Express server and and mounts the routes.
// The server instance is exported so it can be started in index.ts.
import express from 'express'
import recipeRoutes from './routes/recipeRoutes'

const app = express()

app.use(express.json())
app.use('/recipes', recipeRoutes)

export default app
