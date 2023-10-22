const initializeDatabase = require('./initializeDatabase')
const insertSampleData = require('./insertSampleData')
const queryOptimization = require('./queryOptimization')

async function main() {
  try {
    await initializeDatabase() // Initialize the database and tables
    await insertSampleData() // Insert sample data
    await queryOptimization() // Perform query optimization
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

main()
