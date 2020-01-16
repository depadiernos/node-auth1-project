module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection:{
      filename: "./data/auth.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/migrations"
    },
    pool: {
      afterCreate: (connection, done) => {
        connection.run("PRAGMA foreign_keys = ON", done)
      }
    }
  }
}