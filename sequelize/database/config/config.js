// const path = require('path')
// require('dotenv').config({ path: path.join(__dirname, '.env') })

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'timart',
    host: '127.0.0.1',
    dialect: 'mysql',

    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // host: process.env.DB_HOST,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'password',
    database: 'timart',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
}

// const config = {
//   development: {
//     username: 'root',
//     password: 'password',
//     database: 'timart',
//     host: '127.0.0.1',
//     dialect: 'mysql',
//   },
//   test: {
//     username: 'root',
//     password: null,
//     database: 'database_test',
//     host: '127.0.0.1',
//     dialect: 'mysql',
//   },
//   production: {
//     username: 'root',
//     password: 'password',
//     database: 'timart',
//     host: '127.0.0.1',
//     dialect: 'mysql',
//   },
// }

// export default config
