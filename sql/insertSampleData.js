const dbConnection = require('./dbConnection')
const { faker } = require('@faker-js/faker')

async function insertSampleData() {
  const connection = await dbConnection()

  // Insert 1000 users
  for (let i = 1; i <= 1000; i++) {
    // const username = `user${i}`
    // const email = `user${i}@example.com`

    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = faker.internet.email({ firstName, lastName })
    const username = faker.internet.displayName({ firstName, lastName })
    const gender = faker.helpers.arrayElement(['Male', 'Female', 'Other'])
    const address = faker.location.streetAddress({ useFullAddress: true })
    const dob = faker.date.birthdate()
    const status = faker.helpers.arrayElement([
      'Active',
      'Inactive',
      'Suspended',
    ])
    const createdAt = faker.date.past()

    await connection.execute(
      'INSERT INTO Users (first_name, last_name, username, email, gender, address, dob, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        firstName,
        lastName,
        username,
        email,
        gender,
        address,
        dob,
        status,
        createdAt,
      ]
    )
  }

  // Insert 5000 orders with some users having multiple orders
  for (let i = 1; i <= 5000; i++) {
    const orderDate = faker.date.past()
    const totalAmount = faker.finance.amount()
    const orderStatus = faker.helpers.arrayElement([
      'Processing',
      'Shipped',
      'Delivered',
    ])
    const discountCode = faker.string.alphanumeric(6)
    const userId = Math.floor(Math.random() * 1000) + 1
    await connection.execute(
      'INSERT INTO Orders (order_date, total_amount, order_status, discount_code, user_id) VALUES (?, ?, ?, ?, ?)',
      [orderDate, totalAmount, orderStatus, discountCode, userId]
    )
  }

  console.log('Sample data inserted.')
  connection.end()
}

// insertSampleData() // use if you want to run individual script - npm run insert
module.exports = insertSampleData // use only if you're running main.js
