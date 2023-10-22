const mysql = require('mysql2/promise')

const main = async () => {
  try {
    const connection = await mysql.createConnection({
      multipleStatements: true,
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'timart',
    })
    return connection
  } catch (error) {
    console.error('Error connecting to MySQL database:', error)
  }
}

module.exports = main
