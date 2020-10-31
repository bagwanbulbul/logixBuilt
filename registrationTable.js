var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'bulbul18',
      database: 'logixBuilt'
    }
  })
knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('emailId').unique()
    table.string('userName')
    table.string('password')
})
.then(() => console.log("table created"))
.catch((err) => { console.log(err); throw err });