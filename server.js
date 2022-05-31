const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();
const listOptions = ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add a employee', 'Update employee role'];

//connect to database mysql
const db = mysql.createConnection(
    {
        host: 'localhost',

        //your mysql username,
        user: 'root',
        //your mysql password
        password: 'Rockclimb#369',
        database: 'employee-db'
    },
    console.log('Connected to the employee database')
);

const questionMenu = [
  {
    type: 'table',
    name: 'options',
    message: 'What would you like to do?',
    choices: listOptions
  }
]



