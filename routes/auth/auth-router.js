const bcrypt = require("bcryptjs")
const express = require("express")
const usersModel = require("../users/users-model")

const router = express.Router()

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body
    const newUser =
      username && password
        ? await usersModel.add(req.body)
        : res.status(500).json({ message: "missing username and/or password" })
    res.status(201).json(newUser)
  } catch (err) {
    next(err)
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body
    const [user] = await usersModel.findBy({ username })
    const validatePassword = await bcrypt.compare(password, user.password)

    if (user && validatePassword) {
      req.session.user = user
      res.status(200).json({ message: `Welcome, ${user.username}. You've logged in successfully.` })
    } else {
      res.status(401).json({ massage: "You shall not pass!" })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
