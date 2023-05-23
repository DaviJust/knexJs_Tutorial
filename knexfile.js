module.exports = {
  client: 'postgresql',
  connection: {
    database: 'knexjss',
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
