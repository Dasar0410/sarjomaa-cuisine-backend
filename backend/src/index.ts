// Starts the HTTP server listening on a port.
import app from './server'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
