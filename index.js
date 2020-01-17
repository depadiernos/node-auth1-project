const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)
const db = require("./data/db-config")
const authRouter = require("./routes/auth/auth-router")
const usersRouter = require("./routes/users/users-router")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "supersecret",
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    store: new KnexSessionStore({
      knex: db,
      createTable: true
    })
  })
)

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
