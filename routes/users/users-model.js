const bcrypt = require("bcryptjs")
const db = require("../../data/db-config")

const find = () => {
  return db("users").select(["id", "username"])
}

const findBy = (filter) => {
  return db("users")
    .where(filter)
    .select(["id", "username", "password"])
}

const findById = (id) => {
  return db("users")
    .where({ id })
    .first(["id", "username"])
}

const add = async (user) => {
  user.password = await bcrypt.hash(user.password, 12)
  const [id] = await db("users").insert(user)
  return findById(id)
}

module.exports = { find, findBy, findById, add }
