module.exports = {
  client: 'postgresql',
  connection: {
    database: 'knexjs',
    user: 'postgres'
    },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
