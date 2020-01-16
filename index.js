const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const authRouter = require("./routes/auth/auth-router")
const usersRouter = require("./routes/users/users-router")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(cors())
server.use(express.json())

// Routes
server.use("/api/users", usersRouter)
server.use("/api", authRouter)

server.get("/", (req, res, next) => {
  res.json({ message: "The API is working" })
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ message: "Something went wrong" })
})

server.listen(port, () => {
  console.log(`\nRunning on http://localhost:${port}\n`)
})
