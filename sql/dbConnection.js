const mysql = require('mysql2/promise')
require('dotenv').config()

const main = async () => {
  try {
    const connection = await mysql.createConnection({
      multipleStatements: true,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })
    return connection
  } catch (error) {
    console.error('Error connecting to MySQL database:', error)
  }
}

module.exports = main
