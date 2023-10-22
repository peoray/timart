# Timart

### Task 1: Database Schema and Query Optimization

## Prerequisites

Before running the project, ensure you have the following:

- Node.js installed on your system.
- MySQL server installed and running.
- Access to a MySQL database where you can create tables.

## Project Structure

- **main.js:** The main script that orchestrates the database setup, data insertion, and query optimization tasks.
- **initializeDatabase.js:** Initializes the MySQL database by creating the necessary tables.
- **insertSampleData.js:** Inserts sample data into the tables.
- **queryOptimization.js:** Optimizes a SQL query to retrieve the top users with the most orders.
- **dbConnection.js:** Establishes a database connection and exports it for use in other files.
- **database_setup.sql**: Contains the SQL commands for creating the database and tables.

## Usage

Clone the repository to your local machine:

   ```bash
   git clone https://github.com/peoray/timart.git
   ```

**Install project dependencies:**
cd into `sql` directory and install the project dependencies

```bash
# inside of the sql directory
run npm install
```

## Environment Configuration

Before running the project, you need to set up your environment variables. Create a `.env` file in the sql project root directory and provide the following configuration:

```bash
PORT=   # Port for your application
DB_HOST=    # Database host
DB_USER=    # Database user
DB_PASSWORD=    # Database password
DB_NAME=    # Database name
```

Or you can simply run the command below and provide the values for the variables
To copy the environemt valriables

```bash
# on unix
cp .env.sample .env

# on windows
copy .env.sample .env
```

#### Set up your MySQL database:

You should have MySQL installed on your server or locally.

To run the command to setup the database and create the tables needed

```bash
npm run db
```

#### Insert Sample Data:

To insert the sample data into the database, run this command:

```bash
npm run insert
```

#### Query Optimization:

To retrieves the top 10 users who have made the most orders, run this command


```bash
npm run query
```

To run the commands at the same time:

```bash
npm run dev
```