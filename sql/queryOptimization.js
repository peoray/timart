const dbConnection = require('./dbConnection')

async function queryOptimization() {
  const connection = await dbConnection()

  const query = `
        SELECT Users.username, COUNT(Orders.id) AS order_count
        FROM Users
        LEFT JOIN Orders ON Users.id = Orders.user_id
        GROUP BY Users.id
        ORDER BY order_count DESC
        LIMIT 10;
    `

  try {
    const [results] = await connection.execute(query)
    const formattedResults = results.map((row, index) => ({
      Rank: index + 1,
      Username: row.username,
      Orders: row.order_count,
    }))

    console.log('Top 10 Users with Most Orders:')

    console.table(formattedResults)

    // results.forEach((row, index) => {
    //   console.log(
    //     `${index + 1}. Username: ${row.username}, Orders: ${row.order_count}`
    //   )
    // })
  } catch (error) {
    console.error('Error executing the query:', error)
  }

  connection.end()
}

queryOptimization() // use if you want to run individual script - npm run query
// module.exports = queryOptimization // use only if you're running main.js
