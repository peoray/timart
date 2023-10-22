const fs = require('fs')
const dbConnection = require('./dbConnection')

const initializeDatabase = async () => {
  try {
    const connection = await dbConnection()

    const sqlCommands = fs.readFileSync('./database_setup.sql', 'utf8')

    const sqlStatements = sqlCommands.split(';')

    for (const sqlStatement of sqlStatements) {
      const trimmedSql = sqlStatement.trim()
      if (trimmedSql) {
        await connection.execute(trimmedSql)
      }
    }

    console.log('Connected to MySQL database!')
    connection.end()
  } catch (error) {
    console.error(error)
  }
}

initializeDatabase() // use if you want to run individual script - npm run db
// module.exports = initializeDatabase // use only if you're running main.js
