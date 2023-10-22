-- Create the database
CREATE DATABASE IF NOT EXISTS timart;

-- Create the Users table
CREATE TABLE IF NOT EXISTS Users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  gender ENUM('Male', 'Female', 'Other'),
  address VARCHAR(255),
  dob DATE,
  status ENUM('Active', 'Inactive', 'Suspended'),
  created_at DATETIME
  );

-- Create the Orders table with a foreign key reference to Users
CREATE TABLE IF NOT EXISTS Orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_date DATE NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  order_status ENUM('Processing', 'Shipped', 'Delivered'),
  discount_code VARCHAR(20),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES Users (id)
  );
